<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMasterfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('masterfiles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('first_name');
            $table->string('other_names');
            $table->string('mobile_no', 12)->unique()->nullable(); // merchant's phone no only
            $table->string('gender', 20)->nullable(); // we do not need to know the gender of the merchant or the admin
            $table->integer('business_role_id')->unsigned();
            $table->foreign('business_role_id')
                ->references('id')->on('business_roles')
                ->onUpdate('cascade')
                ->onDelete('no action');
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
        Schema::dropIfExists('masterfiles');
    }
}
