<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreatePicturesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('pictures', function(Blueprint $table)
		{
			$table->integer('PID', true);
			$table->string('Path', 256);
			$table->string('Filename', 256);
			$table->string('THMModule', 9);
			$table->timestamp('Timestamp')->default(DB::raw('CURRENT_TIMESTAMP'));
			$table->string('Class', 6);
			$table->bigInteger('Rating');
			$table->integer('Votes');
			$table->string('Author', 128);
			$table->string('Gallery', 128);
			$table->string('Comment', 256);
		});
	}


	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('pictures');
	}

}
