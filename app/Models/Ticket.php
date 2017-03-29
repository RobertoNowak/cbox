<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Ticket extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $table = 'tickets';

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        // 'password', 'remember_token',
    ];

}
