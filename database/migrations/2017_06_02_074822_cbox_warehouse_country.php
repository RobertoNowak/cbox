<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CboxWarehouseCountry extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('cbox_houses', function (Blueprint $table) {
            $table->string('country', 150)->default('')->nullable();
        });
        Schema::table('cbox_buyers', function (Blueprint $table) {
            $table->string('country', 150)->default('')->nullable();
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
