<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        Schema::create('course_progressions', function (Blueprint $table) {
            $table->id();
            $table->string('order');
            $table->foreignId('course_id')
                ->nullable()
                ->constrained('courses')
                ->onDelete('SET NULL');
            $table->timestamps();
        });

        Schema::create('user_course_progressions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')
                ->nullable()
                ->constrained('users')
                ->cascadeOnDelete();
            $table->foreignId('course_progression_id')
                ->nullable()
                ->constrained('course_progressions')
                ->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('user_course_progressions');
        Schema::dropIfExists('course_progressions');
    }
};
