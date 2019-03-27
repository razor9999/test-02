<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Create1553525239LoansTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(! Schema::hasTable('loans')) {
            Schema::create('loans', function (Blueprint $table) {
                $table->increments('id');
                $table->integer('duration')->nullable()->unsigned();
                $table->integer('repayment_frequency')->nullable()->unsigned();
                $table->double('interest_rate', 15, 2)->nullable();
                $table->decimal('arrangement_fee', 15, 2)->nullable();
                $table->enum('status', array('unpaid', 'partial_paid', 'repaid'))->nullable();
                $table->decimal('amount', 15, 2)->nullable();

                $table->timestamps();
                $table->softDeletes();

                $table->index(['deleted_at']);
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('loans');
    }
}
