<?php

Route::group(['prefix' => '/v1', 'middleware' => ['auth:api'], 'namespace' => 'Api\V1', 'as' => 'api.'], function () {
    Route::post('change-password', 'ChangePasswordController@changePassword')->name('auth.change_password');
    Route::apiResource('rules', 'RulesController', ['only' => ['index']]);
    Route::apiResource('permissions', 'PermissionsController');
    Route::apiResource('roles', 'RolesController');
    Route::apiResource('users', 'UsersController');
    Route::apiResource('user-actions', 'UserActionsController');
    Route::apiResource('loans', 'LoansController');
    Route::apiResource('repayments', 'RepaymentsController');
    Route::post('login', 'Auth\LoginController@login')->name('auth.login');
    Route::post('logout', 'Auth\LoginController@logout')->name('auth.logout');

});




Route::group(['prefix' => '/v1',  'namespace' => 'Api\V1', 'as' => 'api.'], function () {
    Route::post('login', 'PassportController@login');
    Route::post('register', 'PassportController@register');

});

