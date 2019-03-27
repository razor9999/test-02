<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\FilterByUser;

/**
 * Class Loan
 *
 * @package App
 * @property integer $duration
 * @property integer $repayment_frequency
 * @property double $interest_rate
 * @property decimal $arrangement_fee
 * @property enum $status
 * @property string $created_by
 * @property string $loan_code
*/
class Loan extends Model
{
    use SoftDeletes, FilterByUser;

    
    protected $fillable = ['duration', 'repayment_frequency', 'interest_rate', 'arrangement_fee', 'status', 'loan_code', 'created_by_id','amount'];
    

    public static $enum_status = ["unpaid" => "Unpaid", "partial_paid" => "Partial_paid", "repaid" => "Repaid"];

    public static function boot()
    {
        parent::boot();

        Loan::observe(new \App\Observers\UserActionsObserver);
    }

    public static function storeValidation($request)
    {
        return [
            'duration' => 'integer|max:4294967295|required',
            'repayment_frequency' => 'integer|max:4294967295|required',
            'amount' => 'numeric|required',
            'interest_rate' => 'numeric|required',
            'arrangement_fee' => 'numeric|required',
            'status' => 'in:unpaid',
            'created_by_id' => 'integer|exists:users,id|max:4294967295|nullable',
            'loan_code' => 'max:191|required'
        ];
    }

    public static function updateValidation($request)
    {
        return [
            'duration' => 'integer|max:4294967295|required',
            'repayment_frequency' => 'integer|max:4294967295|required',
            'interest_rate' => 'numeric|required',
            'arrangement_fee' => 'numeric|required',
            'amount' => 'numeric|required',
            'status' => ['in:unpaid,partial_paid,repaid','required',
                function ($attribute, $value, $fail) use($request) {
                    $loan = Loan::find($request->loan_id);
                    $paidAmount = Repayment::where('loan_id', $request->loan_id)->where('status', 'paid')->sum('amount');
                    if ($paidAmount >= $loan->amount) {
                        $fail('Loan has been paid, you can not edit it ');
                    }
                }],
            'created_by_id' => 'integer|exists:users,id|max:4294967295|nullable',
            'loan_code' => 'max:191|required'
        ];
    }

    

    
    
    public function created_by()
    {
        return $this->belongsTo(User::class, 'created_by_id');
    }
    
    
}
