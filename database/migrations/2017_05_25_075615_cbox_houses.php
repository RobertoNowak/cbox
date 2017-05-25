<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CboxHouses extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('cbox_houses', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->default('');
            $table->string('manager')->default('');
            $table->string('address')->default('');
            $table->string('city')->default('');
            $table->string('state')->default('');
            $table->integer('del_flg')->default(0);
            $table->timestamps();
        });
        Schema::create('cbox_houseios', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('house_id')->unsigned();
            $table->integer('order_id')->default(0);
            $table->integer('amount')->default(0);
            $table->string('comment')->default('');
            $table->integer('del_flg')->default(0);
            $table->foreign('house_id')
                ->references('id')
                ->on('cbox_houses')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
