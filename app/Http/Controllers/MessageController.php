<?php

namespace App\Http\Controllers;

use App\User;
use App\Models\Conversation;
use App\Models\Message;
use Illuminate\Http\Request;
use Nahid\Talk\Facades\Talk;
use Auth;
use View;
use DB;
use Config;
use Validator;
class MessageController extends Controller
{
    protected $authUser;
    public function __construct()
    {
        $this->middleware('auth');
        $user = Auth::user();
        Talk::setAuthUserId(Auth::user()->id);

        View::composer('partials.peoplelist', function($view) {
            $threads = Talk::threads();
            $view->with(compact('threads'));
        });
    }

    public function removeChatHistory($id){
        $user = Auth::user();
        $conversation = Conversation::where(function($query) use($user, $id){
                        $query->where('conversations.user_one', $user->id);
                        $query->where('conversations.user_two', $id);
                    })
                    ->orwhere(function($query) use($user, $id){
                        $query->where('conversations.user_one', $id);
                        $query->where('conversations.user_two', $user->id);
                    })
                    ->first()->id;
        Message::where('conversation_id', $conversation)->where('user_id', '<>', $user->id)->update(['is_seen' => config('constants.MESSAGE_READ')]);
        return response()->json(['success'=>true], 200);
    }
    
    public function chatHistory($id)
    {
        $conversations = Talk::getMessagesByUserId($id);
        $user = '';
        $messages = [];
        if(!$conversations) {
            $user = User::find($id);
        } else {
            $user = $conversations->withUser;
            $messages = $conversations->messages;
        }

        return view('messages.conversations', compact('messages', 'user', 'id'));
    }

    public function contactAdmin(Request $request){
        $data = $request->only(['id','message']);
        $validator = Validator::make($data, [
          'id'       => 'required|numeric',
          'message'      => 'required'
        ]);
        if ($validator->fails()) {
          dd("Invalid http request.");
        }
        //Send email to the admin
        // Mail::send('mail/contact_mail', $data, function($message) use($contact, $mail_to) {
        //     $message->to($mail_to, 'Tutorials Point')->subject
        //         ("The user is contacting to you.");
        //     $message->from('noreply@milionmitzvot.com','MilionMitzvot');
        // });
        if ($message = Talk::sendMessageByUserId($data['id'], $data['message'])) {
            return redirect('message/'.$data['id']);
        }
    }

    public function index()
    {
        $user = Auth::user();
        $first = Conversation::join('users', function($join){
                $join->on('conversations.user_two', '=', 'users.id');
            })
            ->leftjoin('messages', function($join) use($user){
                          $join->on('messages.conversation_id', '=', 'conversations.id');
                          $join->where('messages.user_id', '<>', $user->id);
                          $join->where('messages.is_seen', config('constants.MESSAGE_UNREAD'));
                    })
            ->where('conversations.user_one', $user->id)
            ->select('users.id', 'users.name', 'users.image_url', DB::raw('count(messages.id) as unread_messages'))
            ->groupby('conversations.id');
        $users = Conversation::join('users', function($join){
                $join->on('conversations.user_one', '=', 'users.id');
            })
            ->leftjoin('messages', function($join) use($user){
                          $join->on('messages.conversation_id', '=', 'conversations.id');
                          $join->where('messages.user_id', '<>', $user->id);
                          $join->where('messages.is_seen', config('constants.MESSAGE_UNREAD'));
                    })
            ->where('conversations.user_two', $user->id)
            ->select('users.id', 'users.name', 'users.image_url', DB::raw('count(messages.id) as unread_messages'))
            ->groupby('conversations.id')
            ->union($first)
            ->get();
        foreach ($users as $us) {
          $us->image_url = $us->image_url?url('/').$us->image_url:"";
        }
        return view('messages.home', compact('users'));
    }
    
    public function ajaxSendMessage(Request $request)
    {
        if ($request->ajax()) {
            $rules = [
                'message-data'=>'required',
                '_id'=>'required'
            ];

            $this->validate($request, $rules);

            $body = $request->input('message-data');
            $userId = $request->input('_id');

            if ($message = Talk::sendMessageByUserId($userId, $body)) {
                $html = view('ajax.newMessageHtml', compact('message'))->render();
                return response()->json(['status'=>'success', 'html'=>$html], 200);
            }
        }
    }

    public function ajaxDeleteMessage(Request $request, $id)
    {
        if ($request->ajax()) {
            if(Talk::deleteMessage($id)) {
                return response()->json(['status'=>'success'], 200);
            }

            return response()->json(['status'=>'errors', 'msg'=>'something went wrong'], 401);
        }
    }

    public function tests()
    {
        dd(Talk::channel());
    }
}
