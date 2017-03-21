<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Follow extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $table = 'cbox_following';
    protected $fillable = [
        'user_id', 'follow_user_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
    ];

}
