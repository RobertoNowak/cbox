<?php

namespace App\Api\V1\Controllers;

use Config;
use Validator;
use App\User;
use App\Models\Box;
use App\Models\Option;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use Auth;

function getSecretCode($id){
  $keys = [3, 6, 2, 5];
  $str = '';
  for($i = 0; $i < 4; $i ++){
    $x = 0 + $id + $keys[$i];
    $x = $x * $x;
    $x = $x % 26;
    $str .= chr(65 + $x);
  }
  return $str;
}

class BoxController extends BaseController
{

    public function Find(Request $request){
      $user = Auth::user();
      if(!$user->can('BOX_MANAGE')) {
          $res['success'] = false;
          $res['message'] = 'You have not permission to manage boxes.';
          return $res;
      }
      $query = DB::table('cbox_boxes')
                ->leftjoin('cbox_deposits', function($join){
                      $join->on('cbox_boxes.device_id', '=', 'cbox_deposits.device_id');
                })
                ->leftjoin('cbox_currencyts', function($join){
                      $join->on('cbox_deposits.currencyt', '=', 'cbox_currencyts.currencyt');
                })
                ->where('cbox_boxes.user_id', '='  , $user->id)
                ->where('cbox_boxes.del_flg', '<>' , config('constants.ITEM_IS_DELETE'))
                ->select('cbox_boxes.id', 'cbox_boxes.device_id', 'cbox_boxes.country_code', 'cbox_boxes.d_count', 'cbox_boxes.major_version', 'cbox_boxes.minor_version', DB::raw('count(cbox_deposits.id) as lifetime_count'), DB::raw('cast(sum(cbox_deposits.amount*cbox_currencyts.rate) as decimal(10,2)) as amount'), DB::raw('cast(sum(cbox_deposits.amount*cbox_currencyts.rate*(CASE cbox_deposits.del_flg WHEN 2 THEN 0 ELSE 1 END)) as decimal(10,2)) as deposit_amount'))
                ->groupby('cbox_boxes.device_id');
      $boxes = $query->get();
      $res['success'] = true;
      $res['data'] = $boxes;
      $major_version = Option::where('key', 'firmware_major_version')->first()['value'];
      $minor_version = Option::where('key', 'firmware_minor_version')->first()['value'];
      $res['major_version'] = $major_version;
      $res['minor_version'] = $minor_version;
      return $res;
    }

    public function Add(Request $request){
      $user = Auth::user();
      if(!$user->can('BOX_MANAGE')) {
          $res['success'] = false;
          $res['message'] = 'You have not permission to manage boxes.';
          return $res;
      }
      $boxData = $request->only(['device_id', 'country_code', 'secretCode', 'major_version', 'minor_version']);
      $validator = Validator::make($boxData, [
        'device_id'    => 'required|numeric',
        'country_code' => 'required',
        'major_version' => 'required|numeric',
        'minor_version' => 'required|numeric'
      ]);
      if ($validator->fails()) {
        $res["success"] = false;
        $res["message"] = 'The data is not correct.';
        return $res;
      }

      if(getSecretCode($boxData['device_id']) != $boxData['secretCode']){
        $res["success"] = false;
        $res["message"] = 'SecretCode is not valid.';
        return $res;
      }
      $userID = $user->id;

      // check exist device
      if (Box::where('del_flg'  , '<>'  , config('constants.ITEM_IS_DELETE'))
                ->where('device_id' ,  '='  , $boxData['device_id'])
            ->exists()) {
          $res["success"] = false;
          $res["message"] = "Device already exists";
          return $res;
      }

      // add device
      $boxData['user_id'] = $userID;
      unset($boxData['secretCode']);
      Box::unguard();
      $box = Box::create($boxData);
      Box::reguard();

      $res['success'] = true;
      $res['box_id'] = $box->id;
      return $res;
    }

    public function Update(Request $request){
      $user = Auth::user();
      if(!$user->can('BOX_MANAGE')) {
          $res['success'] = false;
          $res['message'] = 'You have not permission to manage boxes.';
          return $res;
      }
      $boxData = $request->only(['device_id', 'country_code', 'major_version', 'minor_version']);
      $validator = Validator::make($boxData, [
        'device_id'    => 'required|numeric',
        'country_code' => 'required',
        'major_version' => 'required|numeric',
        'minor_version' => 'required|numeric'
      ]);
      if ($validator->fails()) {
        $res["success"] = false;
        $res["message"] = "The data is not correct.";
        return $res;
      }

      $userID = $user->id;

      // check exist device
      $box = Box::where('del_flg'  , '<>'  , config('constants.ITEM_IS_DELETE'))
            ->where('user_id'   ,  '='  , $userID)
            ->where('device_id' ,  '='  , $boxData['device_id'])
            ->first();

      if ($box === null) {
          $res["success"] = false;
          $res["message"] = "The device doesn't exist.";
          return $res;
      }

      $box['country_code'] = $boxData['country_code'];
      $box['major_version'] = $boxData['major_version'];
      $box['minor_version'] = $boxData['minor_version'];
      $box->save();
      $res['success'] = true;
      return $res;
    }

    public function Remove(Request $request){
      $user = Auth::user();
      if(!$user->can('BOX_MANAGE')) {
          $res['success'] = false;
          $res['message'] = 'You have not permission to manage boxes.';
          return $res;
      }
      $boxData = $request->only(['device_id']);
      $validator = Validator::make($boxData, ['device_id'   => 'required|numeric']);
      if ($validator->fails()) {
        $res["success"] = false;
        $res["message"] = "The data is not correct.";
        return $res;
      }

      $userID = $user->id;

      // check exist device
      $box = Box::where('del_flg'  , '<>'  , config('constants.ITEM_IS_DELETE'))
            ->where('user_id'   ,  '='  , $userID)
            ->where('device_id' ,  '='  , $boxData['device_id'])
            ->first();

      if ($box === null) {
          $res["success"] = false;
          $res["message"] = "The device doesn't exist.";
          return $res;
      }
      $box['del_flg'] = config('constants.ITEM_IS_DELETE');
      $box->save();
      $res['success'] = true;
      return $res;
    }

    public function UpdateFirmware(Request $request){
      $user = Auth::user();
      if(!$user->can('BOX_MANAGE')) {
          $res['success'] = false;
          $res['message'] = 'You have not permission to manage boxes.';
          return $res;
      }
      $boxData = $request->only(['device_id']);
      $validator = Validator::make($boxData, ['device_id'   => 'required|numeric']);
      if ($validator->fails()) {
        $res["success"] = false;
        $res["message"] = "The data is not correct.";
        return $res;
      }
      $box = Box::where('device_id', $boxData['device_id'])->first();
      $box->update_flg = 1;
      $box->save();
      $res['success'] = true;
      return $res;
    }
}
