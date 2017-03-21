<?php

namespace App\Api\V1\Controllers;

use Config;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;

class BaseController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    protected $currentUser;

    public function __construct()
    {
    }

    public function getCurrentUser(){
        if (Auth::check()) {
            return Auth::user();
        }
        return [];
    }

}
