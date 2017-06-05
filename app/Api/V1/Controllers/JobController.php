<?php

namespace App\Api\V1\Controllers;

use DB;
use Config;
use Validator;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Carbon;
use App\User;
use Auth;
use Mail;
class JobController extends BaseController
{
    public function __construct()
    {

    }


    public function sendMailtoMembersWeekly(){
        $organizations = DB::table('users')->join('role_user', function($join){
                    $join->on('users.id', '=', 'role_user.user_id');
                  })
                  ->join('roles', function($join){
                    $join->on('roles.id', '=', 'role_user.role_id');
                  })
                  ->select('users.id', 'users.weekly_mail_ignore')
                  ->where('users.weekly_mail_ignore', '<>', config('constants.WEEKLY_MAIL_IGNORE'))
                  ->where(function($query){
                      $query->orwhere('roles.name', config('constants.INSTITUTION_USER'));
                      $query->orwhere('roles.name', config('constants.SCHOOL_USER'));
                  })
                  ->get();
        foreach($organizations as $org){
            $members = DB::table('users')->join('role_user', function($join){
                        $join->on('users.id', '=', 'role_user.user_id');
                    })
                    ->join('roles', function($join){
                        $join->on('roles.id', '=', 'role_user.role_id');
                    })
                    ->join('cbox_member_boxes', function($join){
                        $join->on('cbox_member_boxes.member_id', '=', 'users.id');
                    })
                    ->leftjoin('cbox_deposits', function($join){
                            $join->on('cbox_member_boxes.device_id', '=', 'cbox_deposits.device_id');
                            $join->where('cbox_deposits.created_at', '>=' , date('Y-m-d', strtotime('monday this week')));
                    })
                    ->select('users.email', 'users.weekly_mail_video', 'users.goal_weekly', DB::raw('count(cbox_deposits.id) as deposit_count'))
                    ->where('roles.name', config('constants.MEMBER_USER'))
                    ->where('parent_id', $org->id)
                    ->groupby('users.id')
                    ->get();
            $mail_to = [];
            foreach($members as $_user){
                $mail_data = array('weekly_goal'=>$_user->goal_weekly, 'weekly_count' => $_user->deposit_count, 'video'=> $_user->weekly_mail_video);
                Mail::send('mail/weekly_mail', $mail_data, function($message) use($_user){
                    $message->to($_user->email)->subject('Millionmitzvot Weekly Digest.');
                    $message->from('noreply@milionmitzvot.com','MilionMitzvot');
                });
            }
        }
        $res['success'] = true;
        return $res;
    }
}
