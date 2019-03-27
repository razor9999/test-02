<?php

$factory->define(App\Loan::class, function (Faker\Generator $faker) {
    return [
        "duration" => $faker->randomNumber(2),
        "repayment_frequency" => $faker->randomNumber(2),
        "interest_rate" => $faker->randomFloat(2, 1, 100),
        "arrangement_fee" => $faker->randomNumber(2),
        "status" => collect(["unpaid","partial_paid","repaid",])->random(),
        "created_by_id" => factory('App\User')->create(),
        "loan_code" => $faker->name,
    ];
});
