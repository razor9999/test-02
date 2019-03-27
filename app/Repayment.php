<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\FilterByUser;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

/**
 * Class Repayment
 *
 * @package App
 * @property string $loan
 * @property decimal $amount
 * @property enum $status
 * @property text $note
 * @property string $created_by
*/
class Repayment extends Model
{
    use SoftDeletes, FilterByUser;

    
    protected $fillable = ['amount', 'status', 'note', 'loan_id', 'created_by_id'];
    

    public static $enum_status = ["pending" => "Pending", "failed" => "Failed", "paid" => "Paid"];

    public static function boot()
    {
        parent::boot();

        Repayment::observe(new \App\Observers\UserActionsObserver);
    }

    public static function storeValidation($request)
    {
        return [
            'loan_id' => ['integer','exists:loans,id','max:4294967295','required',
                function ($attribute, $value, $fail) use($request) {
                    $loan = Loan::find($request->loan_id);

                    if(is_null($loan)){
                        $fail("Loan is not found");
                        return;
                    }
                    if($loan->status =='repaid'){
                        $fail("Loan has been repaid");
                    }
                    if($loan->created_by_id != Auth::user()->id){
                        $fail("You are trying to repaid loan for another guy?");
                    }

                }],
            'amount' => [
                'numeric',
                'required',
                function ($attribute, $value, $fail) use($request) {
                    $loan = Loan::find($request->loan_id);
                    if(is_null($loan)){
                        $fail("Loan is not found");
                        return;
                    }
                    $paidAmount = Repayment::where('loan_id',$request->loan_id)->where('status','paid')->sum('amount');

                    $amount = $loan->amount - $paidAmount;
                    if ($value > ($loan->amount*1 - $paidAmount*1)) {
                        $fail($attribute.' must be less than or equal to '.$amount);
                    }
                }],
            'status' => 'in:pending,failed,paid',
            'note' => 'max:65535|nullable',
            'created_by_id' => 'integer|exists:users,id|max:4294967295|nullable',

        ];
    }

    public static function updateValidation($request)
    {
        return [
            'loan_id' => 'integer|exists:loans,id|max:4294967295|required',
            'amount' => 'numeric|required',
            'status' => 'in:pending,failed,paid|required',
            'note' => 'max:65535|nullable',
            'created_by_id' => 'integer|exists:users,id|max:4294967295|nullable'
        ];
    }

    

    
    
    public function loan()
    {
        return $this->belongsTo(Loan::class, 'loan_id')->withTrashed();
    }
    
    public function created_by()
    {
        return $this->belongsTo(User::class, 'created_by_id');
    }
    
    
}
