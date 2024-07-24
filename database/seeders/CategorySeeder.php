<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        foreach (self::getCategories() as $category) {
            Category::query()
                ->firstOrCreate([
                    'label' => $category,
                    'slug' => Str::slug($category),
                ]);
        }
    }

    /**
     * @return array
     */
    public static function getCategories(): array
    {
        return [
            'Informatique',
            'Physique',
            'Digital',
            'Marketing',
            'SEO',
            'Structure de données',
            'Langues',
        ];
    }
}
