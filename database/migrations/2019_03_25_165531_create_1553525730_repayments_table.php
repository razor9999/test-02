<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Create1553525730RepaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if(! Schema::hasTable('repayments')) {
            Schema::create('repayments', function (Blueprint $table) {
                $table->increments('id');
                $table->decimal('amount', 15, 2)->nullable();
                $table->enum('status', array('pending', 'failed', 'paid'))->nullable();
                $table->text('note')->nullable();
                
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
        Schema::dropIfExists('repayments');
    }
}
