<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Discount extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $table = 'cbox_discounts';
    protected $fillable = [
        'code', 'percent', 'del_flg'
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
