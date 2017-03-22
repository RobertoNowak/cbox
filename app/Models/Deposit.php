<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Deposit extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $table = 'cbox_deposits';
    protected $fillable = [
        'device_id', 'amount', 'currencyt', 'del_flg'
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