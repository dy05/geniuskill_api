<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Level;
use App\Models\Subject;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class SubjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        $categoryIds = Category::query()->get()->pluck('id');

        if (!count($categoryIds)) {
            $this->call(CategorySeeder::class);
            $categoryIds = Category::query()->get()->pluck('id');
        }

        $levelIds = Category::query()->get()->pluck('id');

        if (!count($levelIds)) {
            $this->call(LevelSeeder::class);
            $levelIds = Level::query()->get()->pluck('id');
        }

        if (count($categoryIds) && count($levelIds)) {
            $subjects = [
                [
                    'label' => 'Algorithme',
                    'slug' => Str::slug('Algorithme'),
                    'level_id' => $levelIds->random(),
                    'category_id' => $categoryIds->random(),
                ],
                [
                    'label' => 'Science fiction',
                    'slug' => Str::slug('Science fiction'),
                    'level_id' => $levelIds->random(),
                    'category_id' => $categoryIds->random(),
                ],
                [
                    'label' => 'Déploiement continu',
                    'slug' => Str::slug('Déploiement continu'),
                    'level_id' => $levelIds->random(),
                    'category_id' => $categoryIds->random(),
                ],
            ];

            foreach ($subjects as $subject) {
                Subject::query()
                    ->firstOrCreate($subject);
            }
        }
    }
}
