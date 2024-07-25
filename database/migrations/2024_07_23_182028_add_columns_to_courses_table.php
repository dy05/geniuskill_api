<?php

use App\Models\Course;
use App\Models\User;
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
        Schema::table('courses', function (Blueprint $table) {
            $table->string('image')->nullable();
            $table->text('description')->nullable();
            $table->text('objectifs')->nullable();
            $table->text('video')->nullable();
            $table->text('details')->nullable();
            $table->foreignId('author_id')
                ->nullable()
                ->constrained('users')
                ->onDelete('SET NULL');
        });

        Schema::create('course_items', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->integer('order')->nullable();
            $table->double('duration')->nullable();
            $table->string('video')->nullable();
            $table->foreignIdFor(Course::class, 'course_id')->constrained()->cascadeOnDelete();
            $table->timestamps();
        });

        Schema::create('course_user', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Course::class, 'course_id')->constrained()->cascadeOnDelete();
            $table->foreignIdFor(User::class, 'user_id')->constrained()->cascadeOnDelete();
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
        Schema::table('courses', function (Blueprint $table) {
            if (config('database.default') !== 'sqlite') {
                $table->dropConstrainedForeignId('author_id');
            }
            $table->dropColumn(['image', 'description', 'objectifs', 'video', 'details']);
        });

        Schema::drop('course_items');
        Schema::drop('course_user');
    }
};
