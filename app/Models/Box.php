<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Box extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $table = 'cbox_boxes';
    protected $fillable = [
        'device_id', 'user_id', 'location', 'del_flg'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        // 'password', 'remember_token',
    ];

}
