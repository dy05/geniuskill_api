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
                    'label' => 'Développement Mobile',
                    'slug' => Str::slug('Développement Mobile'),
                    'level_id' => $levelIds->random(),
                    'category_id' => $categoryIds->random(),
                ],
                [
                    'label' => 'Développement Web',
                    'slug' => Str::slug('Développement Web'),
                    'level_id' => $levelIds->random(),
                    'category_id' => $categoryIds->random(),
                ],
                [
                    'label' => 'Cybersécurité',
                    'slug' => Str::slug('Cybersécurité'),
                    'level_id' => $levelIds->random(),
                    'category_id' => $categoryIds->random(),
                ],
                [
                    'label' => 'Marketing',
                    'slug' => Str::slug('Marketing'),
                    'level_id' => $levelIds->random(),
                    'category_id' => $categoryIds->random(),
                ],
                [
                    'label' => 'UX/UI',
                    'slug' => Str::slug('UX/UI'),
                    'level_id' => $levelIds->random(),
                    'category_id' => $categoryIds->random(),
                ],
                [
                    'label' => 'Figma',
                    'slug' => Str::slug('Figma'),
                    'level_id' => $levelIds->random(),
                    'category_id' => $categoryIds->random(),
                ],
                [
                    'label' => 'Structure de données',
                    'slug' => Str::slug('Structure de données'),
                    'level_id' => $levelIds->random(),
                    'category_id' => $categoryIds->random(),
                ],
                [
                    'label' => 'Programmation',
                    'slug' => Str::slug('Programmation'),
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
