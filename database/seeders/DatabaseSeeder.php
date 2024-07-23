<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run(): void
    {
        $usersCount = User::query()->count();
        if (!$usersCount) {
            User::factory()
                ->create([
                    'email' => 'admin@admin.com',
                    'role' => 'admin',
                ]);
            User::factory(9)->create();

            $this->call(CategorySeeder::class);
            $this->call(LevelSeeder::class);
            $this->call(SubjectSeeder::class);
            $this->call(CourseSeeder::class);
            $this->call(ClassroomSeeder::class);
        }
    }
}
