<?php

$factory->define(App\Repayment::class, function (Faker\Generator $faker) {
    return [
        "loan_id" => factory('App\Loan')->create(),
        "amount" => $faker->randomNumber(2),
        "status" => collect(["pending","failed","paid",])->random(),
        "note" => $faker->name,
        "created_by_id" => factory('App\User')->create(),
    ];
});
