<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

$api = app('Dingo\Api\Routing\Router');

$api->version('v1', function ($api) {
	$api->group(['namespace' => 'App\Api\V1\Controllers', 'prefix' => 'v1'], function($api) {
        $api->get('getTime', 		'ScoreController@getTime');
        $api->get('/getGeneralInfo', 'CurrencytController@getInfo');
        $api->get('/getAdminUsers', 'CurrencytController@getAdminUsers');
        $api->get('/getScore', 'ScoreController@getScore');
        $api->group(['middleware' => ['auth'], 'prefix' => 'profile'], function($api) {
            $api->get('/', 		'ProfileController@Find');
            $api->get('/getUserAmount', 'ProfileController@getUserAmountInBox');
            $api->post('/',		'ProfileController@Update');
            $api->post('/follow',		'ProfileController@followUser');
            $api->post('/unFollow',		'ProfileController@unFollowUser');
            $api->get('/unreadMessages',		'ProfileController@unReadMessages');
            $api->post('/updatePassword',		'ProfileController@updatePassword');
            $api->get('/donateMoney',		'ProfileController@donateForBoxAmount');
            $api->post('/updateProfileImage', 'ProfileController@updateProfileImage');
        });
        $api->get('/donateMoneyDone',		'ProfileController@payDone');
        $api->get('/donateMoneyCancel',		'ProfileController@payCancel');
        $api->group(['middleware' => ['auth'], 'prefix' => 'boxes'], function($api) {
            $api->get('/', 		'BoxController@Find');
            $api->post('/', 	'BoxController@Add');
            $api->put('/', 		'BoxController@Update');
            $api->delete('/', 'BoxController@Remove');
            $api->post('/updateBoxFirmware', 'BoxController@UpdateFirmware');
            $api->post('/updateBoxSound', 'BoxController@UpdateSound');
        });
        $api->group(['middleware' => ['auth'], 'prefix' => 'members'], function($api) {
            $api->get('/', 		'MemberController@Find');
            $api->post('/', 	'MemberController@Add');
            $api->put('/', 		'MemberController@Update');
            $api->delete('/', 'MemberController@Remove');
            $api->get('/getBoxAmount', 			'MemberController@getBoxAmount');
            $api->post('/payForBoxAmount', 	'MemberController@payForBoxAmount');
        });
        $api->post('/sendContactMessage',	 'ScoreController@sendContactMessage');
        //For Device
        $api->get('/deposit', 						'DepositController@Add');
        $api->post('/resetDailyDepositAll', 'DepositController@resetDailyDepositAll');
        $api->get('/getDeviceInfo', 			'DepositController@getDeviceInfo');
        $api->get('/getDeviceCountry', 	'DepositController@getDeviceCountry');
        $api->get('/getNewDeviceID', 			'DepositController@getNewDevID');
        $api->get('/getFirmwareVersion', 			'DepositController@getFirmwareVersion');
        $api->get('/getFirmwareContent', 			'DepositController@getFirmwareData');
        $api->get('/getSoundFileCount', 			'DepositController@getSoundFileCount');
        $api->get('/getSoundContent', 			'DepositController@getSoundContent');
        $api->get('/isFirmwareUpdateBooked', 			'DepositController@isFirmwareUpdateBooked');
        $api->get('/firmwareUpdated', 			'DepositController@firmwareUpdated');
        $api->get('/isSoundUpdateBooked', 			'DepositController@isSoundUpdateBooked');
        $api->get('/soundUpdated', 			'DepositController@soundUpdated');


        $api->get('/resetDevice',		'DepositController@resetDeviceDeposit');

        $api->group(['middleware' => ['auth'], 'prefix' => 'donate'], function($api) {
            $api->post('/',		'SellController@saveDonate');
            $api->post('/approve',		'SellController@approveDonate');
            $api->get('/',		'SellController@getCurrentDonate');
        });

        $api->group(['middleware' => ['auth'], 'prefix' => 'sound'], function($api) {
            $api->get('/',		'SoundController@Find');
            $api->post('/',		'SoundController@Add');
            $api->delete('/',		'SoundController@Remove');
        });

        $api->get('/all_donates',		'SellController@getAllDonates');
        $api->group( ['prefix' => 'sell'], function($api) {
            $api->get('/getSellBoxes', 		'SellController@getAllBoxes');
            $api->post('/postPayNow', 		'SellController@payNow');
            $api->get('/postPayDone', 		'SellController@payDone');
            $api->get('/postPayCancel', 		'SellController@payCancel');
            $api->post('/donateNow', 'SellController@donateNow');
            $api->get('/donateDone', 'SellController@donateDone');
            $api->get('/donateCancel', 'SellController@donateCancel');
            // $api->post('/', 	'MemberController@Add');
            // $api->put('/', 		'MemberController@Update');
            // $api->delete('/', 'MemberController@Remove');
        });

        $api->group(['middleware' => ['auth']], function($api) {
            $api->get('/getTransactionHistory', 		'MemberController@getTransactionHistory');
            $api->post('/getPaid', 		'MemberController@getPaid');
        });
    });
});