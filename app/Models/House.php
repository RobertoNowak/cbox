<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class House extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'manager', 'manager_email', 'address', 'city', 'state', 'del_flg'];
    protected $table = 'cbox_houses';
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        // 'password', 'remember_token',
    ];

}
