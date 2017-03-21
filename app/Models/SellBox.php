<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class SellBox extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $table = 'cbox_sell_boxes';

}
