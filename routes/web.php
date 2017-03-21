<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return File::get(public_path() . '/index.html');
});

Auth::routes();
Route::get('logout', function (){
    Auth::logout();
    return redirect('/login');
});
Route::get('/activateUser', 'HomeController@activateUser');

Route::group(['namespace' => 'Admin', 'prefix' => 'admin', 'middleware' => ['auth', 'roles'], 'roles' => 'ADMIN'], function () {
    Route::get('/', 'AdminController@index');
    Route::get('give-role-permissions', 'AdminController@getGiveRolePermissions');
    Route::post('give-role-permissions', 'AdminController@postGiveRolePermissions');
    Route::resource('roles', 'RolesController');
    Route::resource('permissions', 'PermissionsController');
    Route::resource('users', 'UsersController');
    Route::resource('donates', 'DonatesController');
    Route::post('donates/approve/{id}', 'DonatesController@approve');
    Route::post('donates/unapprove/{id}', 'DonatesController@unapprove');
    Route::get('generator', ['uses' => '\Appzcoder\LaravelAdmin\Controllers\ProcessController@getGenerator']);
    Route::post('generator', ['uses' => '\Appzcoder\LaravelAdmin\Controllers\ProcessController@postGenerator']);
});
Route::post('message/{id}', 'MessageController@removeChatHistory')->name('message.readAll');
Route::post('contactAdmin', 'MessageController@contactAdmin')->name('contactAdmin');
Route::get('messages', 'MessageController@index')->name('messages');
Route::get('message/{id}', 'MessageController@chatHistory')->name('message.read');
Route::group(['prefix'=>'ajax', 'as'=>'ajax::'], function() {
   Route::post('message/send', 'MessageController@ajaxSendMessage')->name('message.new');
   Route::delete('message/delete/{id}', 'MessageController@ajaxDeleteMessage')->name('message.delete');
});