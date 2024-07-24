<?php

namespace Database\Seeders;

use App\Models\Course;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $course = Course::query()
            ->firstOrCreate([
                'label' => 'Introduction au Développement Web',
                'description' => 'Le cours "Introduction au Développement Web" est conçu pour fournir aux participants une compréhension complète des technologies et des pratiques du développement web. Ce cours couvre les fondamentaux du HTML, CSS, et JavaScript, ainsi que des concepts plus avancés tels que les frameworks modernes et les bonnes pratiques de développement. Les étudiants apprendront à créer des sites web dynamiques et interactifs, à optimiser les performances et à assurer la compatibilité entre les navigateurs.',
                'objectifs' => "- Maîtriser les bases du HTML, CSS, et JavaScript.\n
                    - Apprendre à utiliser les frameworks modernes comme React ou Vue.js.\n
                    - Comprendre les principes de responsive design et d'accessibilité.\n
                    - Optimiser les performances des sites web.\n
                    - Gérer les versions et collaborer sur des projets de développement.",
                'details' => "Durée : 12 semaines\n
                    Niveau : Débutant à Avancé",
                'video' => 'https://www.youtube.com/watch?v=KoRFf7zjmmc',
            ]);

        $course =
    }
}
