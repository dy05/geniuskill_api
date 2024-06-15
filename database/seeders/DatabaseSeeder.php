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
                User::factory(8)->create();
                    $this->call(CategorySeeder::class);

        }
    }
}
