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
        Schema::create('quizzes', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->json('choices');
            $table->string('response');
            $table->foreignId('course_id')
                ->nullable()
                ->constrained('courses')
                ->cascadeOnDelete();
            $table->timestamps();
        });

        Schema::create('user_quizzes', function (Blueprint $table) {
            $table->id();
            $table->string('choice');
            $table->enum('status', [0, 1]);
            $table->foreignId('quiz_id')
                ->constrained('quizzes')
                ->cascadeOnDelete();
            $table->foreignId('user_id')
                ->constrained('users')
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
        Schema::dropIfExists('user_quizzes');
        Schema::dropIfExists('quizzes');
    }
};
