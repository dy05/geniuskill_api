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
        $categories = [
            'Informatique',
            'Physique',
            'Digital',
            'Marketing',
            'SEO',
            'Mathématiques',
        ];

        foreach ($categories as $category) {
            Category::query()
                ->firstOrCreate([
                    'label' => $category,
                    'slug' => Str::slug($category),
                ]);
        }
    }
}
