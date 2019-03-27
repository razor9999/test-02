<?php

namespace App\Observers;

use App\Loan;
use App\Repayment;

class RepaymentObserver
{
    /**
     * Handle the repayment "created" event.
     *
     * @param  \App\Repayment  $repayment
     * @return void
     */
    public function created(Repayment $repayment)
    {
        $this->calculateLoan($repayment);

    }

    /**
     * Handle the repayment "updated" event.
     *
     * @param  \App\Repayment  $repayment
     * @return void
     */
    public function updated(Repayment $repayment)
    {
        $this->calculateLoan($repayment);

    }

    /**
     * Handle the repayment "deleted" event.
     *
     * @param  \App\Repayment  $repayment
     * @return void
     */
    public function deleted(Repayment $repayment)
    {
        $this->calculateLoan($repayment);

    }

    /**
     * Handle the repayment "restored" event.
     *
     * @param  \App\Repayment  $repayment
     * @return void
     */
    public function restored(Repayment $repayment)
    {
        $this->calculateLoan($repayment);

    }

    /**
     * Handle the repayment "force deleted" event.
     *
     * @param  \App\Repayment  $repayment
     * @return void
     */
    public function forceDeleted(Repayment $repayment)
    {
        $this->calculateLoan($repayment);
    }

    private function calculateLoan(Repayment $repayment){
        if($repayment->status =='paid'){
            //calculate amount to update loan status
            $paidAmount = Repayment::where('loan_id',$repayment->loan_id)
                ->where('status','paid')
                ->sum('amount');
            if($paidAmount ==0){
                Loan::where('id',$repayment->loan->id)->update([
                    'status' => 'unpaid'
                ]);
                return;

            }
            if($paidAmount >= $repayment->loan->amount){
                Loan::where('id',$repayment->loan->id)->update([
                    'status' => 'repaid'
                ]);
                return;

            }
            if($paidAmount < $repayment->loan->amount){
                Loan::where('id',$repayment->loan->id)->update([
                    'status' => 'partial_paid'
                ]);
                return;

            }
        }

    }
}
