<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Sound extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $table = 'cbox_sounds';
    protected $fillable = [
        'user_id', 'name', 'file_url', 'del_flg'
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
