<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CboxOrderCountry extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('cbox_orders', function (Blueprint $table) {
            $table->string('country', 150)->default('')->nullable();
        });
        Schema::table('cbox_donates', function (Blueprint $table) {
            $table->string('state', 150)->default('')->nullable();
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
