<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class SellOrder extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $table = 'cbox_orders';

}
