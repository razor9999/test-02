<?php

namespace App\Http\Controllers\Api\V1;

use App\Loan;
use App\Http\Controllers\Controller;
use App\Http\Resources\Loan as LoanResource;
use App\Http\Requests\Admin\StoreLoansRequest;
use App\Http\Requests\Admin\UpdateLoansRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Input;


class LoansController extends Controller
{
    public function index()
    {
        

        return new LoanResource(Loan::with(['created_by'])->get());
    }

    public function show($id)
    {
        if (Gate::denies('loan_view')) {
            return abort(401);
        }

        $loan = Loan::with(['created_by'])->findOrFail($id);

        return new LoanResource($loan);
    }

    public function store(StoreLoansRequest $request)
    {
        if (Gate::denies('loan_create')) {
            return abort(401);
        }

        $row =$request->all();
        $row['status'] = 'unpaid';

        $loan = Loan::create($row);
        
        

        return (new LoanResource($loan))
            ->response()
            ->setStatusCode(201);
    }

    public function update(UpdateLoansRequest $request, $id)
    {
        if (Gate::denies('loan_edit')) {
            return abort(401);
        }

        $loan = Loan::findOrFail($id);
        $loan->update($request->all());
        
        
        

        return (new LoanResource($loan))
            ->response()
            ->setStatusCode(202);
    }

    public function destroy($id)
    {
        if (Gate::denies('loan_delete')) {
            return abort(401);
        }

        $loan = Loan::findOrFail($id);
        $loan->delete();

        return response(null, 204);
    }
}
