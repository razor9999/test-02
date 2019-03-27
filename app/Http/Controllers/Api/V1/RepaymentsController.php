<?php

namespace App\Http\Controllers\Api\V1;

use App\Repayment;
use App\Http\Controllers\Controller;
use App\Http\Resources\Repayment as RepaymentResource;
use App\Http\Requests\Admin\StoreRepaymentsRequest;
use App\Http\Requests\Admin\UpdateRepaymentsRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;

use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Input;


class RepaymentsController extends Controller
{
    public function index()
    {
        

        return new RepaymentResource(Repayment::with(['loan', 'created_by'])->get());
    }

    public function show($id)
    {
        if (Gate::denies('repayment_view')) {
            return abort(401);
        }

        $repayment = Repayment::with(['loan', 'created_by'])->findOrFail($id);

        return new RepaymentResource($repayment);
    }

    public function store(StoreRepaymentsRequest $request)
    {
        if (Gate::denies('repayment_create')) {
            return abort(401);
        }
        $row =$request->all();
        $row['status'] = 'pending';

        $repayment = Repayment::create($row);
        
        

        return (new RepaymentResource($repayment))
            ->response()
            ->setStatusCode(201);
    }

    public function update(UpdateRepaymentsRequest $request, $id)
    {
        if (Gate::denies('repayment_edit')) {
            return abort(401);
        }

        $repayment = Repayment::findOrFail($id);
        $repayment->update($request->all());
        
        
        

        return (new RepaymentResource($repayment))
            ->response()
            ->setStatusCode(202);
    }

    public function destroy($id)
    {
        if (Gate::denies('repayment_delete')) {
            return abort(401);
        }

        $repayment = Repayment::findOrFail($id);
        $repayment->delete();

        return response(null, 204);
    }
}
