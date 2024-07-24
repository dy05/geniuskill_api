<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\CourseItem;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
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

        $items = [
            [
                'order' => 0,
                'course_id' => $course->id,
                'title' => '1. Introduction au HTML',
                'description' => "- Structure de base d'une page HTML\n
                  - Éléments et attributs HTML\n
                  - Mise en forme du texte et des images",
                'duration' => 120,
                'video' => 'https://www.youtube.com/watch?v=KoRFf7zjmmc',
            ],
            [
                'order' => 1,
                'course_id' => $course->id,
                'title' => '2. Introduction au CSS',
                'description' => '- Sélecteurs et propriétés CSS\n
                    - Mise en page avec Flexbox et Grid\n
                    - Styles réactifs pour les différents écrans',
                'duration' => 150,
                'video' => 'https://www.youtube.com/watch?v=9YRk_7pYWXo',
            ],
            [
                'order' => 2,
                'course_id' => $course->id,
                'title' => '3. Introduction au JavaScript',
                'description' => "- Variables et types de données\n
                    - Fonctions et événements\n
                    - Manipulation du DOM et AJAX",
                'duration' => 180,
                'video' => 'https://www.youtube.com/watch?v=ZkMP6YD52L8',
            ],
            [
                'order' => 0,
                'course_id' => $course->id,
                'title' => '4. Frameworks Modernes',
                'description' => "- Introduction à React et Vue.js\n
                    - Composants et gestion d'état\n
                    - Routage et gestion des données",
                'duration' => 210,
                'video' => 'https://www.youtube.com/watch?v=9YRk_7pYWXo',
            ],
            [
                'order' => 4,
                'course_id' => $course->id,
                'title' => '5. Responsive Design',
                'description' => "- Techniques de responsive design\n
                  - Utilisation de media queries\n
                  - Création de mises en page adaptatives",
                'duration' => 165,
                'video' => 'https://www.youtube.com/watch?v=ZkMP6YD52L8',
            ],
            [
                'order' => 5,
                'course_id' => $course->id,
                'title' => '6. Optimisation des Performances',
                'description' => "- Techniques d'optimisation des temps de chargement\n
                    - Minification et compression des fichiers\n
                    - Caching et gestion des ressources",
                'duration' => 150,
                'video' => 'https://www.youtube.com/watch?v=9YRk_7pYWXo',
            ],
            [
                'order' => 6,
                'course_id' => $course->id,
                'title' => '7. Accessibilité Web',
                'description' => "- Principes de l'accessibilité web\n
                  - Utilisation des attributs ARIA\n
                  - Test des interfaces pour les personnes handicapées",
                'duration' => 135,
                'video' => 'https://www.youtube.com/watch?v=ITE8c7dMHEk&t=5s',
            ],
            [
                'order' => 7,
                'course_id' => $course->id,
                'title' => '8. Gestion des Versions et Collaboration',
                'description' => "- Introduction à Git et GitHub\n
                  - Branches, commits et fusion\n
                  - Collaboration et gestion des conflits",
                'duration' => 180,
                'video' => 'https://www.youtube.com/watch?v=9YRk_7pYWXo',
            ],
            [
                'order' => 8,
                'course_id' => $course->id,
                'title' => '9. Examen Final',
                'description' => "- Évaluation des connaissances et des compétences acquises\n
                  - Projet pratique de développement web\n
                  - Certification en Développement Web",
                'duration' => 240,
                'video' => 'https://www.youtube.com/watch?v=ITE8c7dMHEk&t=5s',
            ],
//            [
//                'order' => 0,
//                'course_id' => $course->id,
//                'title' => '',
//                'description' => "",
//                'duration' => 20,
//            ],
        ];

        self::seedItems($items);

        /*
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

        $items = [
            [
                'order' => 0,
                'course_id' => $course->id,
                'title' => '',
                'description' => "",
                'duration' => 20,
            ],
        ];

        self::seedItems($items);
        //*/
    }

    /**
     * @param array $items
     *
     * @return void
     */
    public static function seedItems(array $items = []): void
    {
        foreach ($items as $item) {
            CourseItem::query()->firstOrCreate($item);
        }
    }
}
