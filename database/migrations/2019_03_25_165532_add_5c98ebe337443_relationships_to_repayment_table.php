<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Add5c98ebe337443RelationshipsToRepaymentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('repayments', function(Blueprint $table) {
            if (!Schema::hasColumn('repayments', 'loan_id')) {
                $table->integer('loan_id')->unsigned()->nullable();
                $table->foreign('loan_id', '32842_5c98ebe2aa859')->references('id')->on('loans')->onDelete('cascade');
                }
                if (!Schema::hasColumn('repayments', 'created_by_id')) {
                $table->integer('created_by_id')->unsigned()->nullable();
                $table->foreign('created_by_id', '32842_5c98ebe2af706')->references('id')->on('users')->onDelete('cascade');
                }
                
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('repayments', function(Blueprint $table) {
            
        });
    }
}
