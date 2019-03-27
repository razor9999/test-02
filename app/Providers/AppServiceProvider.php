<?php

namespace App\Providers;

use App\Observers\RepaymentObserver;
use App\Repayment;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;


class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
        \Laravel\Passport\Passport::withoutCookieSerialization();
        Repayment::observe(RepaymentObserver::class);

    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
        
        if ($this->app->environment('local', 'testing')) {

        }

    }
}
