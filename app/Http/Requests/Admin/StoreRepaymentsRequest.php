<?php
namespace App\Http\Requests\Admin;

use App\Repayment;
use Illuminate\Foundation\Http\FormRequest;

class StoreRepaymentsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return Repayment::storeValidation($this);
    }
}
