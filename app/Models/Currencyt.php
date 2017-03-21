<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Currencyt extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $table = 'cbox_currencyts';
    protected $fillable = [
        'currencyt', 'rate',  'del_flg'
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
