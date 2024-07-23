<?php

namespace Database\Seeders;

use App\Models\Level;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class LevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        $levels = [
            'Débutant',
            'Intermédiaire',
            'Avancé'
        ];

        foreach ($levels as $level) {
            Level::query()
                ->firstOrCreate([
                    'label' => $level,
                    'slug' => Str::slug($level),
                ]);
        }
    }
}
