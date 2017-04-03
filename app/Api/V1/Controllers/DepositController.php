<?php

namespace App\Api\V1\Controllers;

use Config;
use Validator;
use App\User;
use App\Models\Box;
use App\Models\Coin;
use App\Models\Deposit;
use App\Models\Currencyt;
use App\Models\Option;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;

class DepositController extends BaseController
{
    public function checkDevID($uId){
      $box = Box::where('device_id', $uId)->first();
      if($box != null)
        return true;
      return false;
    }

    public function getDeviceInfo(Request $request){
      $param = $request->only(['uid']);
      $validator = Validator::make($param, ['uid'   => 'required|numeric']);
      if ($validator->fails()) {
        $res['status'] = "err";
        $res['cbox_end'] = "end";
        return $res;
      }
      if(!$this->checkDevID($param['uid']))
      {
        $res['status'] = "unregistered";
        $res['cbox_end'] = "end";
        return $res;
      }
      $query = DB::table('cbox_deposits')
                    ->leftjoin('cbox_currencyts', function($join){
                          $join->on('cbox_deposits.currencyt', '=', 'cbox_currencyts.currencyt');
                    })->where('cbox_deposits.device_id', $param['uid'])
                    ->select(DB::raw('count(cbox_deposits.id) as deposit_count'), DB::raw('cast(sum(cbox_deposits.amount*cbox_currencyts.rate*(CASE cbox_deposits.del_flg WHEN 0 THEN 1 ELSE 0 END)) as decimal(10,2)) as amount') );
      $result = $query->get();
      $query1 = DB::table('cbox_deposits')
                    ->leftjoin('cbox_currencyts', function($join){
                          $join->on('cbox_deposits.currencyt', '=', 'cbox_currencyts.currencyt');
                    })->select(DB::raw('count(cbox_deposits.id) as deposit_count'), DB::raw('cast(sum(cbox_deposits.amount*cbox_currencyts.rate*(CASE cbox_deposits.del_flg WHEN 0 THEN 1 ELSE 0 END)) as decimal(10,2)) as amount') );
      $result1 = $query1->get();
      $date = date("Y-m-d");
      // $query2 = DB::table('cbox_deposits')
      //               ->leftjoin('cbox_currencyts', function($join){
      //                     $join->on('cbox_deposits.currencyt', '=', 'cbox_currencyts.currencyt');
      //               })
      //               ->leftjoin('cbox_boxes', function($join){
      //                     $join->on('cbox_boxes.device_id', '=', 'cbox_deposits.device_id')->where('cbox_boxes.del_flg', '<>', config('constants.ITEM_IS_DELETE'));
      //               })
      //               ->where('cbox_deposits.device_id', $param['uid'])
      //               ->where('cbox_deposits.created_at', '>', $date)
      //               ->select('cbox_boxes.d_count as deposit_count');
      // $result2 = $query2->get();
      // $query3 = DB::table('cbox_deposits')
      //               ->leftjoin('cbox_currencyts', function($join){
      //                     $join->on('cbox_deposits.currencyt', '=', 'cbox_currencyts.currencyt');
      //               })->where('cbox_deposits.created_at', '>', $date)
      //               ->select(DB::raw('count(cbox_deposits.id) as deposit_count'), DB::raw('cast(sum(cbox_deposits.amount*cbox_currencyts.rate*(CASE cbox_deposits.del_flg WHEN 0 THEN 1 ELSE 0 END)) as decimal(10,2)) as amount') );
      // $result3 = $query3->get();

      $deposit_count = Box::select(DB::raw('sum(d_count) as deposit_count'))->first()['deposit_count'];
      $dtime_box_cnt = Box::where('device_id', $param['uid'])->first()->d_count;
      $res['status'] = "ok";
      if ($result != null && $result1 != null) {
        $result = $result[0];
        $result1 = $result1[0];
        $res['lftime_cnt'] = strval($result1->deposit_count);
        if($result1->amount == null || $result1->amount == 0)
          $res['lftime_dollar'] = '0.00';
        else
          $res['lftime_dollar'] = $result1->amount;
        $res['lftime_box_cnt'] = strval($result->deposit_count);
        if($result->amount == null || $result->amount == 0)
        $res['lftime_box_dollar'] = '0.00';
        else
          $res['lftime_box_dollar'] = $result->amount;
        $res['dtime_cnt'] = strval($deposit_count);
        // if(!isset($result3->amount)){
        //   $res['dtime_dollar'] = "0";
        // }
        // else{
        //   $res['dtime_dollar'] = $result3->amount;
        // }
        $res['dtime_box_cnt'] = strval($dtime_box_cnt);
      } else {
        $res['status'] = "err";
      }
      $res['cbox_end'] = "end";
      // $res['deposit_id'] = $deposit->id;
      return $res;
    }

    public function getDeviceCountry(Request $request){
      $res['status'] = "ok";
      $param = $request->only(['uid']);
      $validator = Validator::make($param, ['uid'   => 'required|numeric']);
      if ($validator->fails()) {
        $res['status'] = "err";
        return $res;
      }
      if(!$this->checkDevID($param['uid']))
      {
        $res['status'] = "unregistered";
        $res['cbox_end'] = "end";
        return $res;
      }
      $box = Box::where('device_id', $param['uid'])->first();
      if ($box === null) {
        $res['status'] = "err";
        $res['cbox_end'] = "end";
        return $res;
      }
      $country_code = $box->country_code;
      $currencyt = Currencyt::where('currencyt', 'LIKE', $country_code)->first();
      if ($currencyt === null) {
        $res['status'] = "err";
        $res['cbox_end'] = "end";
        return $res;
      }
      $res['country'] = $currencyt->country_name;
      $res['cbox_end'] = "end";
      return $res;
    }

    public function Add(Request $request){
      $param = $request->only(['uid', 'cnt', 'data']);
      $validator = Validator::make($param, ['uid'   => 'required|numeric', 'cnt'   => 'required|numeric', 'data'   => 'required']);
      if ($validator->fails()) {
        $res['status'] = "err";
        $res['cbox_end'] = "end";
        return $res;
      }
      if(!$this->checkDevID($param['uid']))
      {
        $res['status'] = "unregistered";
        $res['cbox_end'] = "end";
        return $res;
      }

      // add deposit
      $cboxs = Box::where('device_id', $param['uid'])->where('del_flg'  , '<>'  , config('constants.ITEM_IS_DELETE'))->get();
      if (count($cboxs) == 0) {
        $res['status'] = "err";
        $res['cbox_end'] = "end";
        return $res;
      }
      $cur_box = Box::where('device_id', $param['uid'])->where('del_flg'  , '<>'  , config('constants.ITEM_IS_DELETE'))->first();
      $added_coins = 0;
      if ($cur_box['d_count'] != $param['cnt']){
        if($cur_box['d_count'] == 0 && $param['cnt'] > 4)
          $cur_box['d_count'] = 1;
        else
          $cur_box['d_count'] = $param['cnt'];
        $cur_box->save();
        $currencyt = $cboxs[0]->country_code;
        $user_id = $cboxs[0]->user_id;
        foreach ($param['data'] as $one) {
          $deposit['device_id'] = $param['uid'];
          $deposit['user_id'] = $user_id;
          $coins = Coin::where('country_code', $cboxs[0]->country_code)->get();
          if (count($coins)==0) {
            continue;
          }
          $r_coin = $coins[0];
          foreach($coins as $coin){
            if(abs($coin->size - $one) < abs($r_coin->size - $one))
              $r_coin = $coin;
          }
          //if the difference is more than 2 sizes then ignore
          // if($r_coin->size - $one > 2){
          //   continue;
          // }
          $deposit['amount'] = $r_coin->amount;
          $deposit['coin_size'] = $one;
          $deposit['currencyt'] = $r_coin->country_code;
          Deposit::unguard();
          Deposit::create($deposit);
          Deposit::reguard();
          $added_coins ++;
        }
      }
      //school
      $query = DB::table('cbox_deposits')
                    ->leftjoin('cbox_currencyts', function($join){
                          $join->on('cbox_deposits.currencyt', '=', 'cbox_currencyts.currencyt');
                    })->where('cbox_deposits.device_id', $param['uid'])
                    ->select(DB::raw('count(cbox_deposits.id) as deposit_count'), DB::raw('cast(sum(cbox_deposits.amount*cbox_currencyts.rate*(CASE cbox_deposits.del_flg WHEN 0 THEN 1 ELSE 0 END)) as decimal(10,2)) as amount') );

      $result = $query->get();
      $res['status'] = "ok";
      if ($result != null) {
        $result = $result[0];
        $res['lftime_box_cnt'] = strval($result->deposit_count);
        $res['lftime_box_dollar'] = $result->amount;
      } else {
        $res['status'] = "err";
      }
      $res['coins_added'] = $added_coins;
      $res['cbox_end'] = "end";
      // $res['deposit_id'] = $deposit->id;
      return $res;
    }

    public function resetDeviceDeposit(Request $request){
      $res['status'] = "ok";
      $param = $request->only(['uid']);
      $validator = Validator::make($param, ['uid'   => 'required|numeric']);
      if ($validator->fails()) {
        $res['status'] = "err";
        $res['cbox_end'] = "end";
        return $res;
      }
      Deposit::where('device_id', $param['uid'])
            ->where('del_flg', config('constants.ITEM_IS_LIVE'))
            ->update(array('del_flg'=>config('constants.ITEM_IS_DELETE')));
      $res['cbox_end'] = "end";
      return $res;
    }

    public function resetDeviceDepositForAdmin(Request $request){
      // $res['status'] = "ok";
      $param = $request->only(['uid']);
      $validator = Validator::make($param, ['uid'   => 'required|numeric']);
      if ($validator->fails()) {
        // $res['status'] = "err";
        // $res['cbox_end'] = "end";
        $res["success"] = false;
        $res["message"] = "The data is not correct.";
        return $res;
      }
      Deposit::where('device_id', $param['uid'])
            ->update(array('del_flg'=>config('constants.ITEM_IS_NONE')));
      // $res['cbox_end'] = "end";
      $res['success'] = true;
      return $res;
    }

    public function resetDailyDepositAll(Request $request){
      DB::table('cbox_boxes')
            ->update(['d_count' => 0]);
      $res['success'] = true;
      return $res;
    }

    public function getNewDevID(Request $request){
      DB::beginTransaction();
      $maxId = Option::where('key', 'max_device_id')->first()['value'];
      $res['status'] = "ok";
      $res['id'] = dechex($maxId + 1);
      while(strlen($res['id']) < 8)
        $res['id'] = '0'.$res['id'];
      $maxId = Option::where('key', 'max_device_id')->update(array('value' => $maxId + 1));
      $res['cbox_end'] = "end";
      DB::commit();
      return $res;
    }

    public function getFirmwareVersion(Request $request){
      $major_version = Option::where('key', 'firmware_major_version')->first()['value'];
      $minor_version = Option::where('key', 'firmware_minor_version')->first()['value'];
      $res['status'] = "ok";
      $res['major_version'] = $major_version;
      $res['minor_version'] = $minor_version;
      $res['cbox_end'] = "end";
      return $res;
    }

    public function getFirmwareData(Request $request){
      $param = $request->only(['uid', 'tracknumber']);
      $validator = Validator::make($param, ['tracknumber'   => 'required|numeric']);
      if ($validator->fails()) {
        // $res['status'] = "err";
        // $res['cbox_end'] = "end";
        $res["status"] = "err";
        $res["message"] = "The data is not correct.";
        $res["cbox_end"] = "end";
        return $res;
      }
      $fileName = Option::where('key', 'firmware_file_name')->first()['value'];
      $fileName = base_path('/firmware/'.$fileName);
      $file = fopen($fileName, "rb");
      $filesize = filesize($fileName);
      $seek_start = $param['tracknumber'] * 512;
      $content="";
      $size=0;
      if($filesize > $seek_start){
        fseek($file, $seek_start);
        $contents = fread($file, 512);
        $contents = unpack("C*",$contents);
        $content = "";
        for($i = 1; $i <= count($contents); $i++){
          $temp = dechex($contents[$i]);
          while(strlen($temp) < 2)
            $temp = '0'.$temp;
          $content .= $temp;
        }
        $size = strlen($content);
      }
      fclose($file);
      $res['status'] = "ok";
      $res['uid'] = $param['uid'];
      $res['tracknumber'] = $param['tracknumber'];
      $res['size'] = "".$size;
      $res['content'] = $content;
      $res['cbox_end'] = "end";
      return $res;
    }

    public function getSoundFileCount(Request $request){
      $sound_file_count = Option::where('key', 'sound_file_count')->first()['value'];
      $res['status'] = "ok";
      $res['sound_file_count'] = $sound_file_count;
      $res['cbox_end'] = "end";
      return $res;
    }

    public function getSoundContent(Request $request){
      $param = $request->only(['uid', 'filenumber', 'tracknumber']);
      $validator = Validator::make($param, ['tracknumber'   => 'required|numeric', 'filenumber' => 'required|numeric']);
      if ($validator->fails()) {
        // $res['status'] = "err";
        // $res['cbox_end'] = "end";
        $res["status"] = "err";
        $res["message"] = "The data is not correct.";
        $res["cbox_end"] = "end";
        return $res;
      }
      $fileName = base_path('/dev_sounds/sound_'.$param['filenumber']);
      $file = fopen($fileName, "rb");
      $filesize = filesize($fileName);
      $seek_start = $param['tracknumber'] * 512;
      $content="";
      $size=0;
      if($filesize > $seek_start){
        fseek($file, $seek_start);
        $contents = fread($file, 512);
        $contents = unpack("C*",$contents);
        $content = "";
        for($i = 1; $i <= count($contents); $i++){
          $temp = dechex($contents[$i]);
          while(strlen($temp) < 2)
            $temp = '0'.$temp;
          $content .= $temp;
        }
        $size = strlen($content);
      }
      fclose($file);
      $res['status'] = "ok";
      $res['uid'] = $param['uid'];
      $res['filenumber'] = $param['filenumber'];
      $res['tracknumber'] = $param['tracknumber'];
      $res['size'] = "".$size;
      $res['content'] = $content;
      $res['cbox_end'] = "end";
      return $res;
    }
}
