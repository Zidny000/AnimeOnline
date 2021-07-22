<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFrontsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fronts', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('image');
            $table->integer('rating');
            $table->string('category');
            $table->string('status');
            $table->string('type');
            $table->integer('comment_int');
            $table->integer('watched_int');
            $table->string('JapaName');
            $table->text('description');
            $table->string('studios');
            $table->string('dateAired');
            $table->string('gener');
            $table->string('duration');
            $table->string('quality');
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
        Schema::dropIfExists('fronts');
    }
}
