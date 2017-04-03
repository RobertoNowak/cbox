<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Ticket extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('tickets', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('requester_id')->unsigned()->default(0);
            $table->integer('accepter_id')->unsigned()->default(0);
            $table->string('message')->default('');
            $table->integer('del_flg')->default(0);
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
        Schema::drop('tickets');
    }
}
