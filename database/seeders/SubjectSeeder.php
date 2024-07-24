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
        $levelIds = Level::query()->get()->pluck('id');
        $countLevels = count($levelIds);

        if (!$countLevels) {
            $this->call(LevelSeeder::class);
            $levelIds = Level::query()->get()->pluck('id');
            $countLevels = count($levelIds);
        }

        if ($countLevels) {
            $categories = Category::query()->get()->keyBy('label');
            $categoryLanguage = $categories->get('Langues');
            $categoryInformatique = $categories->get('Informatique');
            $categoryData = $categories->get('Structure de données');
            $categoryDigital = $categories->get('Digital');
            $categoryMarketing = $categories->get('Marketing');

            $subjects = [
                [
                    'label' => 'Algorithme',
                    'slug' => Str::slug('Algorithme'),
                    'level_id' => $levelIds->random(),
                    'category_id' => optional($categoryInformatique)->id,
                ],
                [
                    'label' => 'Développement Mobile',
                    'slug' => Str::slug('Développement Mobile'),
                    'level_id' => $levelIds->random(),
                    'category_id' => optional($categoryInformatique)->id,
                ],
                [
                    'label' => 'Développement Web',
                    'slug' => Str::slug('Développement Web'),
                    'level_id' => $levelIds->random(),
                    'category_id' => optional($categoryInformatique)->id,
                ],
                [
                    'label' => 'Cybersécurité',
                    'slug' => Str::slug('Cybersécurité'),
                    'level_id' => $levelIds->random(),
                    'category_id' => optional($categoryInformatique)->id,
                ],
                [
                    'label' => 'Marketing',
                    'slug' => Str::slug('Marketing'),
                    'level_id' => $levelIds->random(),
                    'category_id' => optional($categoryMarketing)->id,
                ],
                [
                    'label' => 'UX/UI',
                    'slug' => Str::slug('UX/UI'),
                    'level_id' => $levelIds->random(),
                    'category_id' => optional($categoryDigital)->id,
                ],
                [
                    'label' => 'Figma',
                    'slug' => Str::slug('Figma'),
                    'level_id' => $levelIds->random(),
                    'category_id' => optional($categoryDigital)->id,
                ],
                [
                    'label' => 'Structure de données',
                    'slug' => Str::slug('Structure de données'),
                    'level_id' => $levelIds->random(),
                    'category_id' => optional($categoryData)->id,
                ],
                [
                    'label' => 'Programmation',
                    'slug' => Str::slug('Programmation'),
                    'level_id' => $levelIds->random(),
                    'category_id' => optional($categoryInformatique)->id,
                ],
                [
                    'label' => 'Langues',
                    'slug' => Str::slug('Langues'),
                    'level_id' => $levelIds->random(),
                    'category_id' => optional($categoryLanguage)->id,
                ],
            ];

            foreach ($subjects as $subject) {
                Subject::query()->firstOrCreate($subject);
            }
        }
    }

    /**
     * @return string[]
     */
    public static function getSubjects(): array
    {
        return [
            'Algorithme',
            'Développement Mobile',
            'Développement Web',
            'Cybersécurité',
            'Marketing',
            'UX/UI',
            'Figma',
            'Structure de données',
            'Programmation',
            'Langues',
        ];
    }
}
