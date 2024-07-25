<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\CourseItem;
use App\Models\Quiz;
use App\Models\Subject;
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
        $subjects = Subject::query()->get()->keyBy('label');

        $subject = $subjects->get('Développement Web');
        $course = Course::query()
            ->firstOrCreate([
                'subject_id' => optional($subject)->id,
                'level_id' => optional($subject)->level_id,
                'image' => 'images/dev.jpg',
                'label' => 'Introduction au Développement Web',
                'description' => 'Le cours "Introduction au Développement Web" est conçu pour fournir aux participants une compréhension complète des technologies et des pratiques du développement web. Ce cours couvre les fondamentaux du HTML, CSS, et JavaScript, ainsi que des concepts plus avancés tels que les frameworks modernes et les bonnes pratiques de développement. Les étudiants apprendront à créer des sites web dynamiques et interactifs, à optimiser les performances et à assurer la compatibilité entre les navigateurs.',
                'objectifs' => "- Maîtriser les bases du HTML, CSS, et JavaScript.
- Apprendre à utiliser les frameworks modernes comme React ou Vue.js.
- Comprendre les principes de responsive design et d'accessibilité.
- Optimiser les performances des sites web.
- Gérer les versions et collaborer sur des projets de développement.",
                'details' => "Durée : 12 semaines
Niveau : Débutant à Avancé",
                'video' => 'https://www.youtube.com/watch?v=KoRFf7zjmmc',
            ]);

        $items = [
            [
                'order' => 0,
                'course_id' => $course->id,
                'title' => '1. Introduction au HTML',
                'description' => "- Structure de base d'une page HTML
- Éléments et attributs HTML
- Mise en forme du texte et des images",
                'duration' => 120,
                'video' => 'https://www.youtube.com/watch?v=KoRFf7zjmmc',
            ],
            [
                'order' => 1,
                'course_id' => $course->id,
                'title' => '2. Introduction au CSS',
                'description' => '- Sélecteurs et propriétés CSS
- Mise en page avec Flexbox et Grid
- Styles réactifs pour les différents écrans',
                'duration' => 150,
                'video' => 'https://www.youtube.com/watch?v=9YRk_7pYWXo',
            ],
            [
                'order' => 2,
                'course_id' => $course->id,
                'title' => '3. Introduction au JavaScript',
                'description' => "- Variables et types de données
- Fonctions et événements
- Manipulation du DOM et AJAX",
                'duration' => 180,
                'video' => 'https://www.youtube.com/watch?v=ZkMP6YD52L8',
            ],
            [
                'order' => 3,
                'course_id' => $course->id,
                'title' => '4. Frameworks Modernes',
                'description' => "- Introduction à React et Vue.js
- Composants et gestion d'état
- Routage et gestion des données",
                'duration' => 210,
                'video' => 'https://www.youtube.com/watch?v=9YRk_7pYWXo',
            ],
            [
                'order' => 4,
                'course_id' => $course->id,
                'title' => '5. Responsive Design',
                'description' => "- Techniques de responsive design
- Utilisation de media queries
- Création de mises en page adaptatives",
                'duration' => 165,
                'video' => 'https://www.youtube.com/watch?v=ZkMP6YD52L8',
            ],
            [
                'order' => 5,
                'course_id' => $course->id,
                'title' => '6. Optimisation des Performances',
                'description' => "- Techniques d'optimisation des temps de chargement
- Minification et compression des fichiers
- Caching et gestion des ressources",
                'duration' => 150,
                'video' => 'https://www.youtube.com/watch?v=9YRk_7pYWXo',
            ],
            [
                'order' => 6,
                'course_id' => $course->id,
                'title' => '7. Accessibilité Web',
                'description' => "- Principes de l'accessibilité web
- Utilisation des attributs ARIA
- Test des interfaces pour les personnes handicapées",
                'duration' => 135,
                'video' => 'https://www.youtube.com/watch?v=ITE8c7dMHEk&t=5s',
            ],
            [
                'order' => 7,
                'course_id' => $course->id,
                'title' => '8. Gestion des Versions et Collaboration',
                'description' => "- Introduction à Git et GitHub
- Branches, commits et fusion
- Collaboration et gestion des conflits",
                'duration' => 180,
                'video' => 'https://www.youtube.com/watch?v=9YRk_7pYWXo',
            ],
            [
                'order' => 8,
                'course_id' => $course->id,
                'title' => '9. Examen Final',
                'description' => "- Évaluation des connaissances et des compétences acquises
- Projet pratique de développement web
- Certification en Développement Web",
                'duration' => 240,
                'video' => 'https://www.youtube.com/watch?v=ITE8c7dMHEk&t=5s',
            ],
        ];

        self::seedItems($items);

        $quizzes = [
            [
                'title' => 'Quelle est la structure de base d\'une page HTML ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'HTML, CSS, JavaScript',
                    ],
                    [
                        'id' => 1,
                        'text' => 'HTML',
                    ],
                    [
                        'id' => 2,
                        'text' => 'HTML, CSS',
                    ],
                    [
                        'id' => 3,
                        'text' => 'HTML, CSS, JavaScript, PHP',
                    ],
                ]),
                'response' => 1,
            ], [
                'title' => 'Quels éléments sont utilisés pour structurer le texte en HTML ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => '<p>, <a>',
                    ],
                    [
                        'id' => 1,
                        'text' => '<p>, <h1>',
                    ],
                    [
                        'id' => 2,
                        'text' => '<h1>, <h2>',
                    ],
                    [
                        'id' => 3,
                        'text' => '<p>, <div>',
                    ],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Quel est le rôle des sélecteurs CSS ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Définir les couleurs',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Appliquer des styles aux éléments',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Créer des animations',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Gérer le contenu des pages',
                    ],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Quelle propriété CSS est utilisée pour la mise en page en Flexbox ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'display',
                    ],
                    [
                        'id' => 1,
                        'text' => 'float',
                    ],
                    [
                        'id' => 2,
                        'text' => 'position',
                    ],
                    [
                        'id' => 3,
                        'text' => 'align-items',
                    ],
                ]),
                'response' => 0,
            ],
        ];

        self::seedQuizzes($course->id, $quizzes);

        $subject = $subjects->get('UX/UI');
        $course = Course::query()
            ->firstOrCreate([
                'subject_id' => optional($subject)->id,
                'level_id' => optional($subject)->level_id,
                'image' => 'images/ux.jpg',
                'label' => 'Introduction au UX Design',
                'description' => 'Le cours "Introduction au UX Design" est conçu pour fournir aux participants une compréhension approfondie des principes et pratiques du design d\'expérience utilisateur. '
                    . 'Le cours couvre un large éventail de sujets allant des concepts fondamentaux de l\'UX aux techniques avancées de conception centrée sur l\'utilisateur.'
                    . 'Les étudiants apprendront à identifier les besoins des utilisateurs, '
                    . 'à créer des prototypes et à tester les interfaces pour améliorer l\'expérience utilisateur.',
                'objectifs' => "- Comprendre les concepts fondamentaux du UX Design.
- Apprendre les techniques de recherche utilisateur.
- Maîtriser les outils de prototypage et de wireframing.
- Savoir réaliser des tests utilisateurs et analyser les résultats.
- Connaître les bonnes pratiques de conception centrée sur l'utilisateur.",
                'details' => "Durée : 10 semaines
Niveau : Débutant à Intermédiaire",
                'video' => 'https://www.youtube.com/watch?v=9YRk_7pYWXo',
            ]);

        $items = [
            [
                'order' => 0,
                'course_id' => $course->id,
                'title' => '1. Introduction au UX Design',
                'description' => "- Définition et importance du UX Design
- Principes de base de l'expérience utilisateur
- Évolution du design centré sur l'utilisateur",
                'duration' => 120,
                'video' => 'https://www.youtube.com/watch?v=9YRk_7pYWXo',
            ],
            [
                'order' => 1,
                'course_id' => $course->id,
                'title' => "2. Recherche Utilisateur",
                'description' => '- Méthodes de recherche utilisateur (entretiens, sondages, etc.)
- Analyse des besoins et des comportements des utilisateurs
- Création de personas',
                'duration' => 150,
                'video' => 'https://www.youtube.com/watch?v=KoRFf7zjmmc',
            ],
            [
                'order' => 2,
                'course_id' => $course->id,
                'title' => '3. Architecture de l\'Information',
                'description' => "- Organisation et structure de l'information
- Cartes de site et navigation
- Hiérarchie de l'information",
                'duration' => 180,
                'video' => 'https://www.youtube.com/watch?v=ZkMP6YD52L8',
            ],
            [
                'order' => 3,
                'course_id' => $course->id,
                'title' => '4. Prototypage et Wireframing',
                'description' => "- Outils et techniques de prototypage
- Création de wireframes
- Interaction et animation des prototypes",
                'duration' => 210,
                'video' => 'https://www.youtube.com/watch?v=9YRk_7pYWXo',
            ],
            [
                'order' => 4,
                'course_id' => $course->id,
                'title' => '5. Design Visuel',
                'description' => "- Principes de design graphique
- Choix des couleurs et typographie
- Design d'interfaces et d'interactions",
                'duration' => 165,
                'video' => 'https://www.youtube.com/watch?v=ZkMP6YD52L8',
            ],
            [
                'order' => 5,
                'course_id' => $course->id,
                'title' => '6. Tests Utilisateurs',
                'description' => "- Planification et réalisation des tests utilisateurs
- Techniques d'observation et d'analyse
- Amélioration des designs basés sur les retours utilisateurs",
                'duration' => 150,
                'video' => 'https://www.youtube.com/watch?v=KoRFf7zjmmc',
            ],
            [
                'order' => 6,
                'course_id' => $course->id,
                'title' => '7. Accessibilité et Inclusivité',
                'description' => "- Principes d'accessibilité numérique
- Conception pour l'inclusivité
- Normes et bonnes pratiques",
                'duration' => 135,
                'video' => 'https://www.youtube.com/watch?v=9YRk_7pYWXo',
            ],
            [
                'order' => 7,
                'course_id' => $course->id,
                'title' => '8. Design Mobile',
                'description' => "- Spécificités du design mobile
- Conception d'interfaces mobiles
- Techniques de responsive design",
                'duration' => 180,
                'video' => 'https://www.youtube.com/watch?v=ZkMP6YD52L8',
            ],
            [
                'order' => 8,
                'course_id' => $course->id,
                'title' => '9. Examen Final',
                'description' => "- Évaluation des connaissances et des compétences acquises
- Étude de cas et résolution de problèmes pratiques
- Certification en UX Design",
                'duration' => 240,
                'video' => 'https://www.youtube.com/watch?v=9YRk_7pYWXo',
            ],
        ];

        self::seedItems($items);

        $quizzes = [
            [
                'title' => 'Qu\'est-ce que l\'UX Design ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Design de l\'interface utilisateur'],
                    ['id' => 1, 'text' => 'Conception de l\'expérience utilisateur'],
                    ['id' => 2, 'text' => 'Développement web'],
                    ['id' => 3, 'text' => 'Conception graphique'],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Quel est l\'objectif principal d\'une recherche utilisateur ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Créer des wireframes'],
                    ['id' => 1, 'text' => 'Déterminer les besoins des utilisateurs'],
                    ['id' => 2, 'text' => 'Développer des prototypes'],
                    ['id' => 3, 'text' => 'Analyser les performances du site'],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Qu\'est-ce qu\'un persona en UX Design ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Un modèle de données'],
                    ['id' => 1, 'text' => 'Un profil utilisateur fictif'],
                    ['id' => 2, 'text' => 'Un outil de prototypage'],
                    ['id' => 3, 'text' => 'Un type de test utilisateur'],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Quelle méthode est utilisée pour tester l\'usabilité d\'un produit ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Analyse SWOT'],
                    ['id' => 1, 'text' => 'Entrevue utilisateur'],
                    ['id' => 2, 'text' => 'Test A/B'],
                    ['id' => 3, 'text' => 'Étude de marché'],
                ]),
                'response' => 2,
            ],
            [
                'title' => 'Quel est l\'objectif de l\'architecture de l\'information ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Définir les styles visuels'],
                    ['id' => 1, 'text' => 'Organiser le contenu de manière logique'],
                    ['id' => 2, 'text' => 'Créer des interactions animées'],
                    ['id' => 3, 'text' => 'Établir des processus de développement'],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Qu\'est-ce qu\'un wireframe ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Un modèle de données interactif'],
                    ['id' => 1, 'text' => 'Un prototype de haute fidélité'],
                    ['id' => 2, 'text' => 'Une maquette basse fidélité'],
                    ['id' => 3, 'text' => 'Un test de performance'],
                ]),
                'response' => 2,
            ],
            [
                'title' => 'Quelle est la différence entre un prototype et un wireframe ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Un prototype est plus détaillé qu\'un wireframe'],
                    ['id' => 1, 'text' => 'Un wireframe est interactif tandis qu\'un prototype ne l\'est pas'],
                    ['id' => 2, 'text' => 'Un prototype est utilisé pour le test A/B, un wireframe non'],
                    ['id' => 3, 'text' => 'Un wireframe est utilisé pour la recherche utilisateur, un prototype non'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quel est le rôle des tests utilisateurs dans le processus de design UX ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Valider la faisabilité technique'],
                    ['id' => 1, 'text' => 'Évaluer l\'expérience utilisateur et identifier les problèmes'],
                    ['id' => 2, 'text' => 'Déterminer les tendances du marché'],
                    ['id' => 3, 'text' => 'Optimiser les performances du site'],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Quels sont les principes fondamentaux du design visuel ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Contraste, répétition, alignement, proximité'],
                    ['id' => 1, 'text' => 'Harmonie, hiérarchie, équilibre, espace'],
                    ['id' => 2, 'text' => 'Couleur, texture, typographie, imagerie'],
                    ['id' => 3, 'text' => 'Simplicité, sophistication, élégance, fonctionnalité'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quel rôle joue la typographie dans le design UX ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Augmenter la vitesse de chargement'],
                    ['id' => 1, 'text' => 'Créer des animations attrayantes'],
                    ['id' => 2, 'text' => 'Améliorer la lisibilité et la hiérarchie du contenu'],
                    ['id' => 3, 'text' => 'Gérer les interactions utilisateur'],
                ]),
                'response' => 2,
            ],
            [
                'title' => 'Qu\'est-ce que l\'accessibilité numérique ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'La possibilité de naviguer en utilisant des raccourcis clavier'],
                    ['id' => 1, 'text' => 'Concevoir pour que les personnes ayant des handicaps puissent accéder au contenu'],
                    ['id' => 2, 'text' => 'Optimiser le site pour les appareils mobiles'],
                    ['id' => 3, 'text' => 'Améliorer les performances du site'],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Quelles sont les bonnes pratiques pour un design inclusif ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Utiliser des couleurs vives pour attirer l\'attention'],
                    ['id' => 1, 'text' => 'Créer des interfaces adaptables aux besoins de divers utilisateurs'],
                    ['id' => 2, 'text' => 'Minimiser le texte pour éviter la surcharge cognitive'],
                    ['id' => 3, 'text' => 'Utiliser des animations complexes pour engager les utilisateurs'],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Quelles sont les spécificités du design mobile ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Utilisation de grands écrans tactiles'],
                    ['id' => 1, 'text' => 'Conception pour l\'interaction tactile et les petits écrans'],
                    ['id' => 2, 'text' => 'Développement pour des résolutions d\'écran élevées'],
                    ['id' => 3, 'text' => 'Création de designs pour des navigateurs web uniquement'],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Quelle est la technique utilisée pour assurer la réactivité d\'un design mobile ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Responsive Design'],
                    ['id' => 1, 'text' => 'Fixed Layout'],
                    ['id' => 2, 'text' => 'Adaptive Design'],
                    ['id' => 3, 'text' => 'Fluid Layout'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quel est l\'objectif de l\'examen final en UX Design ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Évaluer la compréhension des principes de design'],
                    ['id' => 1, 'text' => 'Déterminer la capacité à utiliser des outils de design'],
                    ['id' => 2, 'text' => 'Valider les compétences techniques en développement'],
                    ['id' => 3, 'text' => 'Analyser les tendances actuelles en design UX'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quel type de projet est généralement utilisé pour l\'examen final ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Un test de performance'],
                    ['id' => 1, 'text' => 'Une étude de marché'],
                    ['id' => 2, 'text' => 'Un projet pratique de design UX'],
                    ['id' => 3, 'text' => 'Une recherche académique'],
                ]),
                'response' => 2,
            ],
        ];

        self::seedQuizzes($course->id, $quizzes);


        $subject = $subjects->get('Programmation');
        $course = Course::query()
            ->firstOrCreate([
                'subject_id' => optional($subject)->id,
                'level_id' => optional($subject)->level_id,
                'image' => 'images/vr.jpg',
                'label' => 'Introduction à la Réalité Virtuelle',
                'description' => 'Le cours "Introduction à la Réalité Virtuelle" vous plonge dans le monde captivant de la réalité virtuelle. '
                    . 'Vous apprendrez les fondamentaux de cette technologie immersive, y compris la création de contenu VR, '
                    . 'le développement d\'applications, et les applications pratiques dans divers domaines. '
                    . 'Ce cours vous permettra de développer des compétences pratiques pour concevoir et déployer des expériences VR engageantes.',
                'objectifs' => "- Comprendre les principes fondamentaux de la réalité virtuelle et de ses technologies associées.
- Acquérir des compétences dans la création et le développement de contenus VR.
- Explorer les différentes plateformes et outils de développement VR.
- Développer des projets pratiques pour créer des expériences immersives.",
                'details' => "Durée : 10 semaines
Niveau : Débutant à Intermédiaire",
                'video' => 'https://www.youtube.com/watch?v=9YRk_7pYWXo',
            ]);

        $items = [
            [
                'order' => 0,
                'course_id' => $course->id,
                'title' => '1. Introduction à la Réalité Virtuelle',
                'description' => "- Définition et histoire de la réalité virtuelle
- Matériel et logiciels utilisés en VR
- Principes de conception pour des expériences immersives",
                'duration' => 180,
                'video' => 'https://www.youtube.com/watch?v=9YRk_7pYWXo',
            ],
            [
                'order' => 1,
                'course_id' => $course->id,
                'title' => "2. Développement d'Applications VR",
                'description' => '- Introduction aux environnements de développement VR
- Utilisation des outils de création de contenu VR (Unity, Unreal Engine)
- Programmation et intégration d\'interactions VR',
                'duration' => 240,
                'video' => 'https://www.youtube.com/watch?v=KoRFf7zjmmc',
            ],
            [
                'order' => 2,
                'course_id' => $course->id,
                'title' => '3. Création de Contenus Immersifs',
                'description' => "- Techniques de modélisation 3D pour VR
- Conception de scènes et d'environnements immersifs
- Utilisation de la réalité virtuelle pour la narration interactive",
                'duration' => 270,
                'video' => 'https://www.youtube.com/watch?v=ZkMP6YD52L8',
            ],
            [
                'order' => 3,
                'course_id' => $course->id,
                'title' => '4. Applications et Cas d\'Utilisation',
                'description' => "- Applications de la VR dans les jeux vidéo et la simulation
- VR pour la formation et l'éducation
- Utilisation de la VR dans la médecine et la réhabilitation",
                'duration' => 240,
                'video' => 'https://www.youtube.com/watch?v=9YRk_7pYWXo',
            ],
            [
                'order' => 4,
                'course_id' => $course->id,
                'title' => '5. Projets Pratiques',
                'description' => "- Création d'une expérience VR interactive
- Développement d'une application VR pour une utilisation spécifique
- Analyse des projets et feedback",
                'duration' => 360,
                'video' => 'https://www.youtube.com/watch?v=ZkMP6YD52L8',
            ],
            [
                'order' => 5,
                'course_id' => $course->id,
                'title' => '6. Examen Final',
                'description' => "- Évaluation des compétences acquises
- Réalisation d'un projet pratique en VR
- Présentation du projet et certification",
                'duration' => 300,
                'video' => 'https://www.youtube.com/watch?v=9YRk_7pYWXo',
            ],
        ];

        self::seedItems($items);

        $quizzes = [
            [
                'title' => 'Que signifie "VR" ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Réalité Virtuelle'],
                    ['id' => 1, 'text' => 'Réalité Visuelle'],
                    ['id' => 2, 'text' => 'Réalité Variable'],
                    ['id' => 3, 'text' => 'Réalité Virtualisée'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quel dispositif est principalement utilisé pour expérimenter la VR ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Casque de réalité virtuelle (HMD)'],
                    ['id' => 1, 'text' => 'Smartphone'],
                    ['id' => 2, 'text' => 'Montre connectée'],
                    ['id' => 3, 'text' => 'Tablette'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Qu\'est-ce que la "VR en espace de jeu" ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Un système VR qui permet de se déplacer dans un espace physique'],
                    ['id' => 1, 'text' => 'Une expérience VR qui simule une pièce'],
                    ['id' => 2, 'text' => 'Un type de VR utilisé dans des pièces avec de grands écrans'],
                    ['id' => 3, 'text' => 'Un système VR avec une position fixe'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quelle technologie est couramment utilisée pour suivre les mouvements de la tête en VR ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Capteurs inertiels'],
                    ['id' => 1, 'text' => 'Bluetooth'],
                    ['id' => 2, 'text' => 'Caméras infrarouges'],
                    ['id' => 3, 'text' => 'RFID'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Que signifie "6DoF" en VR ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Six Degrés de Liberté'],
                    ['id' => 1, 'text' => 'Six Degrés de Flexibilité'],
                    ['id' => 2, 'text' => 'Six Dimensions de Liberté'],
                    ['id' => 3, 'text' => 'Six Degrés de Champ'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quelle entreprise est connue pour son casque Oculus VR ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Meta (anciennement Facebook)'],
                    ['id' => 1, 'text' => 'Google'],
                    ['id' => 2, 'text' => 'Sony'],
                    ['id' => 3, 'text' => 'Apple'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Qu\'est-ce que le "retour haptique" en VR ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'La technologie qui fournit des sensations physiques pour simuler le toucher'],
                    ['id' => 1, 'text' => 'Le retour audio fourni par le système VR'],
                    ['id' => 2, 'text' => 'Les améliorations visuelles dans les graphiques VR'],
                    ['id' => 3, 'text' => 'La réponse du système aux commandes vocales'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quel est le but principal des "contrôleurs" VR ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Interagir avec et manipuler des objets virtuels'],
                    ['id' => 1, 'text' => 'Améliorer la sortie audio'],
                    ['id' => 2, 'text' => 'Ajuster les paramètres d’affichage'],
                    ['id' => 3, 'text' => 'Améliorer la connectivité Internet'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Qu\'est-ce que la "téléprésence" dans le contexte de la VR ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'L’utilisation de la VR pour interagir avec des lieux ou des personnes éloignés'],
                    ['id' => 1, 'text' => 'La technologie pour améliorer la qualité visuelle de la VR'],
                    ['id' => 2, 'text' => 'L’intégration de la VR avec la réalité augmentée'],
                    ['id' => 3, 'text' => 'Le processus de simulation de différents environnements en VR'],
                ]),
                'response' => 0,
            ],
        ];

        self::seedQuizzes($course->id, $quizzes);


        $course = Course::query()
            ->firstOrCreate([
                'subject_id' => optional($subject)->id,
                'level_id' => optional($subject)->level_id,
                'image' => 'images/ai.jpg',
                'label' => 'Introduction à l\'Intelligence Artificielle',
                'description' => 'Le cours "Introduction à l\'Intelligence Artificielle" explore les concepts fondamentaux de l\'IA, '
                    . 'y compris l\'apprentissage automatique, les réseaux neuronaux, et les algorithmes intelligents. '
                    . 'Les étudiants apprendront à concevoir et à mettre en œuvre des solutions d\'IA '
                    . 'pour résoudre des problèmes complexes et améliorer les processus d\'affaires. '
                    . 'Le cours couvre également les enjeux éthiques et sociaux liés à l\'IA.',
                'objectifs' => "- Comprendre les principes de base de l'intelligence artificielle.
- Appliquer les techniques d'apprentissage supervisé et non supervisé.
- Concevoir et entraîner des réseaux neuronaux profonds.
- Explorer les applications et les défis éthiques de l'IA.",
                'details' => "Durée : 14 semaines
Niveau : Intermédiaire à Avancé",
                'video' => 'https://www.youtube.com/watch?v=KoRFf7zjmmc',
            ]);

        $items = [
            [
                'order' => 0,
                'course_id' => $course->id,
                'title' => '1. Introduction à l\'IA',
                'description' => "- Définition et histoire de l'IA
- Applications actuelles et futures de l'IA
- Outils et environnements de développement",
                'duration' => 150,
                'video' => 'https://www.youtube.com/watch?v=KoRFf7zjmmc',
            ],
            [
                'order' => 1,
                'course_id' => $course->id,
                'title' => '2. Algorithmes d\'Apprentissage Automatique',
                'description' => "- Régression linéaire et logistique
- Algorithmes de clustering comme K-means
- Évaluation et validation des modèles",
                'duration' => 240,
            ],
            [
                'order' => 2,
                'course_id' => $course->id,
                'title' => '3. Réseaux Neuronaux',
                'description' => "- Perceptron multicouche (MLP)
- Réseaux de neurones convolutifs (CNN)
- Réseaux de neurones récurrents (RNN)",
                'duration' => 330,
            ],
            [
                'order' => 3,
                'course_id' => $course->id,
                'title' => '4. IA et Éthique',
                'description' => "- Enjeux éthiques et biais des algorithmes
- Confidentialité et sécurité des données
- Régulations et législation autour de l'IA",
                'duration' => 150,
            ],
            [
                'order' => 4,
                'course_id' => $course->id,
                'title' => '5. Projets Pratiques en IA',
                'description' => "- Développement d'un modèle d'IA pour une application réelle
- Analyse des résultats et optimisation des performances
- Présentation des projets et recommandations",
                'duration' => 360,
            ],
            [
                'order' => 5,
                'course_id' => $course->id,
                'title' => '6. Examen Final',
                'description' => "- Évaluation des compétences et des connaissances acquises
- Réalisation d'un projet pratique d'IA
- Certification en Intelligence Artificielle",
                'duration' => 250,
            ],
        ];

        self::seedItems($items);

        $quizzes = [
            [
                'title' => 'Qu\'est-ce que l\'intelligence artificielle (IA) ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'La simulation de l\'intelligence humaine par des systèmes informatiques'],
                    ['id' => 1, 'text' => 'Une méthode de cryptographie'],
                    ['id' => 2, 'text' => 'Un type de programmation'],
                    ['id' => 3, 'text' => 'Un logiciel de gestion de données'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quel est l\'objectif principal de l\'apprentissage supervisé ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Développer des algorithmes pour la sécurité informatique'],
                    ['id' => 1, 'text' => 'Apprendre à partir de données étiquetées pour faire des prédictions ou des classifications'],
                    ['id' => 2, 'text' => 'Créer des sites web interactifs'],
                    ['id' => 3, 'text' => 'Optimiser les bases de données'],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Quelle est la principale différence entre l\'apprentissage supervisé et l\'apprentissage non supervisé ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'L\'apprentissage supervisé utilise des données étiquetées tandis que l\'apprentissage non supervisé utilise des données non étiquetées'],
                    ['id' => 1, 'text' => 'L\'apprentissage supervisé est plus rapide'],
                    ['id' => 2, 'text' => 'L\'apprentissage non supervisé est plus précis'],
                    ['id' => 3, 'text' => 'L\'apprentissage supervisé ne peut pas traiter de grandes quantités de données'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quel algorithme est couramment utilisé pour la classification des données ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'K-means'],
                    ['id' => 1, 'text' => 'Arbre de Décision'],
                    ['id' => 2, 'text' => 'Régression Linéaire'],
                    ['id' => 3, 'text' => 'Réduction de Dimensionnalité'],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Qu\'est-ce qu\'un réseau de neurones artificiels ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Un modèle de machine learning inspiré du fonctionnement du cerveau humain'],
                    ['id' => 1, 'text' => 'Un algorithme de tri de données'],
                    ['id' => 2, 'text' => 'Un outil pour le nettoyage des données'],
                    ['id' => 3, 'text' => 'Une technique pour la compression des images'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Qu\'est-ce que le sur-apprentissage (overfitting) ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Lorsque le modèle est trop simple pour capturer les relations dans les données'],
                    ['id' => 1, 'text' => 'Lorsque le modèle apprend trop bien les détails et le bruit des données d\'entraînement'],
                    ['id' => 2, 'text' => 'Lorsque le modèle est lent à apprendre'],
                    ['id' => 3, 'text' => 'Lorsque le modèle est incapable de généraliser à de nouvelles données'],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Quel est le rôle de la fonction d\'activation dans un réseau de neurones ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Calculer la perte du modèle'],
                    ['id' => 1, 'text' => 'Transformer les entrées en sorties non linéaires'],
                    ['id' => 2, 'text' => 'Évaluer les performances du modèle'],
                    ['id' => 3, 'text' => 'Optimiser les hyperparamètres'],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Quel est l\'objectif principal de la régression en machine learning ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Prédire des valeurs continues à partir de données'],
                    ['id' => 1, 'text' => 'Classifier les données en différentes catégories'],
                    ['id' => 2, 'text' => 'Grouper les données similaires'],
                    ['id' => 3, 'text' => 'Réduire la dimensionnalité des données'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Qu\'est-ce que le traitement du langage naturel (NLP) ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Un sous-domaine de l\'IA qui traite de l\'interaction entre les ordinateurs et les langues humaines'],
                    ['id' => 1, 'text' => 'Une technique pour la vision par ordinateur'],
                    ['id' => 2, 'text' => 'Un algorithme de clustering'],
                    ['id' => 3, 'text' => 'Une méthode de prétraitement des images'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quelle technique est couramment utilisée pour réduire la dimensionnalité des données ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Analyse en Composantes Principales (PCA)'],
                    ['id' => 1, 'text' => 'Régression Logistique'],
                    ['id' => 2, 'text' => 'K-means'],
                    ['id' => 3, 'text' => 'Régression Linéaire'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Qu\'est-ce qu\'un algorithme de clustering ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Un algorithme qui regroupe les données en clusters ou groupes similaires'],
                    ['id' => 1, 'text' => 'Un algorithme qui prédit des valeurs continues'],
                    ['id' => 2, 'text' => 'Un algorithme qui classe les données en catégories'],
                    ['id' => 3, 'text' => 'Un algorithme de réduction de dimensionnalité'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quel est l\'objectif de l\'apprentissage par renforcement ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Optimiser la prise de décision en apprenant par essais et erreurs'],
                    ['id' => 1, 'text' => 'Apprendre à partir de données étiquetées'],
                    ['id' => 2, 'text' => 'Grouper des données similaires'],
                    ['id' => 3, 'text' => 'Réduire la dimensionnalité des données'],
                ]),
                'response' => 0,
            ],
        ];

        self::seedQuizzes($course->id, $quizzes);


        $subject = $subjects->get('Programmation');
        $course = Course::query()
            ->firstOrCreate([
                'subject_id' => optional($subject)->id,
                'level_id' => optional($subject)->level_id,
                'image' => 'images/blockchain.jpg',
                'label' => 'Introduction à la Blockchain',
                'description' => 'Le cours "Introduction à la Blockchain" explore les principes fondamentaux de la technologie blockchain, '
                    . 'y compris les concepts de cryptographie, les mécanismes de consensus, et les applications décentralisées. '
                    . 'Les étudiants apprendront à développer des smart contracts, à comprendre les différentes plateformes de blockchain, '
                    . 'et à analyser les cas d\'utilisation dans divers secteurs.',
                'objectifs' => "- Comprendre les principes de base de la blockchain et des cryptomonnaies.
- Apprendre les mécanismes de consensus et la cryptographie utilisée dans la blockchain.
- Développer et déployer des smart contracts sur une plateforme blockchain.
- Explorer les applications de la blockchain dans divers secteurs tels que la finance, la supply chain, et la santé.",
                'details' => "Durée : 12 semaines
Niveau : Intermédiaire",
                'video' => 'https://www.youtube.com/watch?v=KoRFf7zjmmc',
            ]);

        $items = [
            [
                'order' => 0,
                'course_id' => $course->id,
                'title' => '1. Introduction à la Blockchain',
                'description' => "- Définition et histoire de la blockchain
- Structure des blocs et fonctionnement des chaînes
- Concepts de cryptographie et de décentralisation",
                'duration' => 180,
            ],
            [
                'order' => 1,
                'course_id' => $course->id,
                'title' => '2. Mécanismes de Consensus',
                'description' => "- Preuve de travail (PoW) et preuve d'enjeu (PoS)
- Algorithmes de consensus pour les réseaux blockchain
- Comparaison des mécanismes de consensus",
                'duration' => 240,
            ],
            [
                'order' => 2,
                'course_id' => $course->id,
                'title' => '3. Smart Contracts',
                'description' => "- Introduction aux smart contracts
- Développement et déploiement de smart contracts sur Ethereum
- Cas d'utilisation et sécurité des smart contracts",
                'duration' => 300,
            ],
            [
                'order' => 3,
                'course_id' => $course->id,
                'title' => '4. Applications de la Blockchain',
                'description' => "- Applications dans la finance (DeFi, crypto-monnaies)
- Gestion de la chaîne d'approvisionnement
- Blockchain dans la santé et l'identité numérique",
                'duration' => 270,
            ],
            [
                'order' => 4,
                'course_id' => $course->id,
                'title' => '5. Projets Pratiques en Blockchain',
                'description' => "- Création d'une application décentralisée (dApp)
- Développement d'un smart contract pour un cas d'utilisation spécifique
- Analyse des performances et déploiement en production",
                'duration' => 360,
            ],
            [
                'order' => 5,
                'course_id' => $course->id,
                'title' => '6. Examen Final',
                'description' => "- Évaluation des compétences et des connaissances acquises
- Réalisation d'un projet pratique de blockchain
- Certification en Blockchain",
                'duration' => 270,
            ],
        ];

        self::seedItems($items);

        $quizzes = [
            [
                'title' => 'Qu\'est-ce qu\'une blockchain ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Un registre décentralisé qui enregistre des transactions de manière sécurisée et immuable',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Un type de base de données relationnelle',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Un protocole de communication réseau',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Un langage de programmation',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quel est le rôle des nœuds dans une blockchain ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Vérifier et valider les transactions, ainsi que maintenir une copie du registre',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Créer de nouveaux blocs',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Exécuter des contrats intelligents',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Stocker des données sur un serveur central',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Qu\'est-ce qu\'un contrat intelligent (smart contract) ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Un programme autonome qui s\'exécute automatiquement lorsque certaines conditions sont remplies',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Un type de clé cryptographique utilisée dans la blockchain',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Un mécanisme de consensus',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Un algorithme de hachage',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quelle est la fonction du hachage dans une blockchain ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Assurer l\'intégrité des données en générant un identifiant unique pour chaque bloc',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Stocker des données utilisateur',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Crypter les transactions',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Gérer les clés privées',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quel est le but principal du consensus dans une blockchain ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Assurer que tous les nœuds du réseau acceptent la même version du registre',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Crypter les transactions',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Stocker les données de manière sécurisée',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Créer des blocs dans la blockchain',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Qu\'est-ce que le proof-of-work (PoW) ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Un mécanisme de consensus qui nécessite que les participants résolvent des problèmes cryptographiques complexes pour ajouter un bloc à la blockchain',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Un algorithme de hachage',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Un type de clé publique',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Un protocole de communication entre nœuds',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quelle est la différence entre une blockchain publique et une blockchain privée ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Une blockchain publique est accessible à tous, tandis qu\'une blockchain privée est restreinte à un groupe spécifique de participants',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Une blockchain privée est plus sécurisée',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Une blockchain publique est plus rapide',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Une blockchain privée est plus décentralisée',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Qu\'est-ce qu\'une fourchette (fork) dans une blockchain ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Une divergence dans le registre qui peut créer deux versions différentes de la blockchain',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Un type de contrat intelligent',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Une méthode de hachage',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Un protocole de consensus',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quel est le rôle des mineurs dans une blockchain utilisant le proof-of-work (PoW) ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Résoudre des puzzles cryptographiques pour valider les transactions et créer de nouveaux blocs',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Vérifier les signatures des transactions',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Gérer les clés privées',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Effectuer des audits de sécurité',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Qu\'est-ce que le "nonce" dans le contexte du proof-of-work (PoW) ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Un nombre utilisé pour ajuster le processus de hachage afin de trouver une solution valide pour un bloc',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Un identifiant de transaction',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Une clé cryptographique',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Un algorithme de hachage',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Qu\'est-ce que le "sharding" dans une blockchain ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Une technique visant à diviser le réseau en sous-ensembles (shards) pour améliorer la scalabilité',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Un type de consensus',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Un algorithme de hachage',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Un protocole de sécurité',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quelle est la fonction des clés publiques et privées dans une blockchain ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Les clés publiques sont utilisées pour recevoir des transactions, tandis que les clés privées sont utilisées pour signer et autoriser des transactions',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Les clés publiques sont pour le chiffrement, les clés privées pour le déchiffrement',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Les clés publiques sont pour les smart contracts, les clés privées pour le hachage',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Les clés publiques sont pour l\'authentification, les clés privées pour la validation',
                    ],
                ]),
                'response' => 0,
            ],
        ];

        self::seedQuizzes($course->id, $quizzes);


        $subject = $subjects->get('Cybersécurité');
        $course = Course::query()
            ->firstOrCreate([
                'subject_id' => optional($subject)->id,
                'level_id' => optional($subject)->level_id,
                'image' => 'images/cyber.jpg',
                'label' => 'Introduction à la Cyber Sécurité',
                'description' => 'Le cours "Introduction à la Cyber Sécurité" est conçu pour fournir aux participants une compréhension approfondie des principes et pratiques de la sécurité informatique. '
                    . 'Le cours couvre un large éventail de sujets allant des concepts fondamentaux de la sécurité aux techniques avancées de protection des systèmes et des données contre les cybermenaces. '
                    . 'Les étudiants apprendront à identifier les vulnérabilités, à mettre en place des mesures de protection, et à réagir efficacement aux incidents de sécurité.',
                'objectifs' => "- Comprendre les concepts fondamentaux de la cybersécurité.
- Identifier les principales menaces et vulnérabilités informatiques.
- Apprendre les méthodes de protection des systèmes et des données.
- Acquérir des compétences en gestion des incidents de sécurité.
- Connaître les cadres et les normes de sécurité informatique.",
                'details' => "Durée : 12 semaines
Niveau : Débutant à Intermédiaire",
                'video' => 'https://www.youtube.com/watch?v=KoRFf7zjmmc',
            ]);

        $items = [
            [
                'order' => 0,
                'course_id' => $course->id,
                'title' => '1. Introduction à la Cyber Sécurité',
                'description' => "- Définition et importance de la cybersécurité
- Principes de base de la sécurité informatique
- Évolution des cybermenaces",
                'duration' => 120,
                'video' => 'https://www.youtube.com/watch?v=KoRFf7zjmmc',
            ],
            [
                'order' => 1,
                'course_id' => $course->id,
                'title' => '2. Menaces et Vulnérabilités',
                'description' => "- Types de menaces (malwares, ransomwares, phishing, etc.)
- Vulnérabilités des systèmes d'information
- Techniques d'attaque courantes (DDoS, SQL injection, etc.)",
                'duration' => 150,
            ],
            [
                'order' => 2,
                'course_id' => $course->id,
                'title' => '3. Cryptographie et Sécurité des Communications',
                'description' => "- Concepts de base de la cryptographie
- Algorithmes de chiffrement symétrique et asymétrique
- Protocoles de sécurité des communications (SSL/TLS, VPN)",
                'duration' => 180,
            ],
            [
                'order' => 3,
                'course_id' => $course->id,
                'title' => '4. Sécurité des Réseaux',
                'description' => "- Architecture de sécurité des réseaux
- Pare-feu, systèmes de détection et de prévention des intrusions (IDS/IPS)
- Sécurité des réseaux sans fil",
                'duration' => 210,
            ],
            [
                'order' => 4,
                'course_id' => $course->id,
                'title' => '5. Sécurité des Applications et des Systèmes',
                'description' => "- Principes de sécurité des systèmes d'exploitation
- Sécurité des applications web
- Pratiques de codage sécurisé",
                'duration' => 165,
            ],
            [
                'order' => 5,
                'course_id' => $course->id,
                'title' => '6. Gestion des Incidents de Sécurité',
                'description' => "- Identification et analyse des incidents de sécurité
- Réponse aux incidents et récupération
- Établissement de plans de continuité des activités",
                'duration' => 150,
            ],
            [
                'order' => 6,
                'course_id' => $course->id,
                'title' => '7. Conformité et Réglementation',
                'description' => "- Cadres et normes de sécurité (ISO 27001, NIST, GDPR)
- Politiques de sécurité et meilleures pratiques
- Audits de sécurité et évaluation de la conformité",
                'duration' => 135,
            ],
            [
                'order' => 7,
                'course_id' => $course->id,
                'title' => '8. Sécurité dans le Cloud',
                'description' => "- Risques et défis de la sécurité dans le cloud
- Stratégies de protection des données dans le cloud
- Sécurité des services cloud (IaaS, PaaS, SaaS)",
                'duration' => 180,
            ],
            [
                'order' => 8,
                'course_id' => $course->id,
                'title' => '9. Examen Final',
                'description' => "- Évaluation des connaissances et des compétences acquises
- Étude de cas et résolution de problèmes pratiques
- Certification en cybersécurité",
                'duration' => 240,
            ],
        ];

        self::seedItems($items);

        $quizzes = [
            [
                'title' => 'Qu\'est-ce qu\'un malware ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Un type de logiciel de sécurité'],
                    ['id' => 1, 'text' => 'Un logiciel malveillant conçu pour nuire aux systèmes informatiques'],
                    ['id' => 2, 'text' => 'Un logiciel pour le développement web'],
                    ['id' => 3, 'text' => 'Un type de pare-feu'],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Quel est le but d\'un pare-feu ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Protéger les données contre les virus'],
                    ['id' => 1, 'text' => 'Empêcher les accès non autorisés à un réseau'],
                    ['id' => 2, 'text' => 'Sauvegarder les fichiers'],
                    ['id' => 3, 'text' => 'Analyser le trafic web'],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Qu\'est-ce que le phishing ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Une méthode de cryptographie'],
                    ['id' => 1, 'text' => 'Une technique pour détecter les intrusions'],
                    ['id' => 2, 'text' => 'Une attaque par email visant à obtenir des informations sensibles'],
                    ['id' => 3, 'text' => 'Un type de logiciel de sécurité'],
                ]),
                'response' => 2,
            ],
            [
                'title' => 'Quelle méthode est couramment utilisée pour sécuriser les mots de passe ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Cryptage'],
                    ['id' => 1, 'text' => 'Compression'],
                    ['id' => 2, 'text' => 'Défragmentation'],
                    ['id' => 3, 'text' => 'Encapsulation'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Qu\'est-ce qu\'une attaque DDoS ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Une attaque visant à accéder à des données privées'],
                    ['id' => 1, 'text' => 'Une attaque qui surcharge un service en envoyant un grand nombre de requêtes'],
                    ['id' => 2, 'text' => 'Une attaque pour voler des informations bancaires'],
                    ['id' => 3, 'text' => 'Une méthode de phishing'],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Quelle est la meilleure pratique pour la gestion des identifiants et des mots de passe ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Utiliser des mots de passe simples et les partager'],
                    ['id' => 1, 'text' => 'Utiliser des mots de passe complexes et uniques, et les stocker en toute sécurité'],
                    ['id' => 2, 'text' => 'Réutiliser les mots de passe pour plusieurs comptes'],
                    ['id' => 3, 'text' => 'Stocker les mots de passe dans un fichier texte sur l\'ordinateur'],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Qu\'est-ce que la double authentification (2FA) ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Une méthode pour crypter les données'],
                    ['id' => 1, 'text' => 'Une méthode d\'authentification qui nécessite deux formes de vérification'],
                    ['id' => 2, 'text' => 'Un type de pare-feu'],
                    ['id' => 3, 'text' => 'Une technique pour détecter les intrusions'],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Qu\'est-ce qu\'une vulnérabilité zero-day ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Une vulnérabilité qui est connue et pour laquelle un correctif est disponible'],
                    ['id' => 1, 'text' => 'Une vulnérabilité qui est découverte et exploitée avant que le fournisseur ne puisse publier un correctif'],
                    ['id' => 2, 'text' => 'Une vulnérabilité qui se produit dans le logiciel antivirus'],
                    ['id' => 3, 'text' => 'Une vulnérabilité qui est résolue immédiatement après sa découverte'],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Quel est l\'objectif principal de la gestion des risques en cybersécurité ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Augmenter le nombre d\'utilisateurs'],
                    ['id' => 1, 'text' => 'Réduire les risques et protéger les actifs informationnels'],
                    ['id' => 2, 'text' => 'Améliorer la vitesse du réseau'],
                    ['id' => 3, 'text' => 'Développer de nouveaux logiciels'],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Qu\'est-ce que l\'ingénierie sociale en cybersécurité ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Une technique de cryptage des données'],
                    ['id' => 1, 'text' => 'Une méthode pour sécuriser les réseaux'],
                    ['id' => 2, 'text' => 'Une technique d\'attaque qui manipule les individus pour obtenir des informations sensibles'],
                    ['id' => 3, 'text' => 'Un type de pare-feu'],
                ]),
                'response' => 2,
            ],
        ];

        self::seedQuizzes($course->id, $quizzes);


        $subject = $subjects->get('Structure de données');
        $course = Course::query()
            ->firstOrCreate([
                'subject_id' => optional($subject)->id,
                'level_id' => optional($subject)->level_id,
                'image' => 'images/data.jpg',
                'label' => 'Introduction à la Data Science',
                'description' => 'Le cours "Introduction à la Data Science" offre une vue d\'ensemble complète des méthodes ' .
                    'et techniques utilisées pour extraire des connaissances à partir des données. '
                    . 'Il couvre les bases de la manipulation de données, l\'analyse statistique, '
                    . 'et les méthodes d\'apprentissage automatique. Les participants apprendront à utiliser des outils comme Python, R, '
                    . 'et SQL pour traiter des ensembles de données, créer des modèles prédictifs, et visualiser les résultats.',
                'objectifs' => "- Comprendre les principes fondamentaux de la data science.
- Maîtriser les techniques de nettoyage et de préparation des données.
- Appliquer des méthodes d'analyse statistique pour extraire des insights.
- Construire et évaluer des modèles prédictifs.
- Utiliser des outils de visualisation pour communiquer les résultats.",
                'details' => "Durée : 16 semaines
Niveau : Débutant à Avancé",
                'video' => 'https://www.youtube.com/watch?v=KoRFf7zjmmc',
            ]);

        $items = [
            [
                'order' => 0,
                'course_id' => $course->id,
                'title' => '1. Introduction à la Data Science',
                'description' => "- Qu'est-ce que la data science ?
- Applications et importance dans l'industrie
- Outils et environnements de travail",
                'duration' => 120,
            ],
            [
                'order' => 1,
                'course_id' => $course->id,
                'title' => '2. Manipulation des Données',
                'description' => "- Nettoyage et préparation des données
- Utilisation de pandas en Python et d.dplyr en R
- Gestion des valeurs manquantes et des anomalies",
                'duration' => 180,
            ],
            [
                'order' => 2,
                'course_id' => $course->id,
                'title' => '3. Analyse Statistique',
                'description' => "- Statistiques descriptives et inférentielles
- Tests d'hypothèses et intervalles de confiance
- Corrélations et régressions",
                'duration' => 240,
            ],
            [
                'order' => 3,
                'course_id' => $course->id,
                'title' => '4. Apprentissage Supervisé',
                'description' => "- Classification et régression
- Modèles de décision, SVM, et forêts aléatoires
- Évaluation des modèles et validation croisée",
                'duration' => 300,
            ],
            [
                'order' => 4,
                'course_id' => $course->id,
                'title' => '5. Apprentissage Non Supervisé ',
                'description' => "- Clustering et réduction de dimension
- K-means, PCA, et t-SNE
- Applications et évaluation des résultats",
                'duration' => 240,
            ],
            [
                'order' => 5,
                'course_id' => $course->id,
                'title' => '6. Visualisation des Données',
                'description' => "- Création de graphiques avec Matplotlib et Seaborn
- Visualisation interactive avec Plotly et Tableau
- Meilleures pratiques pour la présentation des résultats",
                'duration' => 20,
            ],
            [
                'order' => 6,
                'course_id' => $course->id,
                'title' => '7. Projets Pratiques',
                'description' => "",
                'duration' => 20,
            ],
            [
                'order' => 7,
                'course_id' => $course->id,
                'title' => '7. Projets Pratiques',
                'description' => "- Analyse d'un ensemble de données réel
- Construction d'un modèle prédictif{
- Présentation des résultats et recommandations",
                'duration' => 20,
            ],
            [
                'order' => 8,
                'course_id' => $course->id,
                'title' => '8. Examen Final',
                'description' => "",
                'duration' => 270,
            ],
        ];

        self::seedItems($items);

        $quizzes = [
            [
                'title' => 'Qu\'est-ce que la Data Science ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'L\'analyse de données pour la prise de décision'],
                    ['id' => 1, 'text' => 'Le développement de logiciels'],
                    ['id' => 2, 'text' => 'La création de sites web'],
                    ['id' => 3, 'text' => 'La gestion des bases de données'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quelle est la première étape typique du processus de Data Science ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Modélisation des données'],
                    ['id' => 1, 'text' => 'Collecte et nettoyage des données'],
                    ['id' => 2, 'text' => 'Évaluation des résultats'],
                    ['id' => 3, 'text' => 'Déploiement du modèle'],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Qu\'est-ce que le nettoyage des données ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'L\'optimisation des requêtes SQL'],
                    ['id' => 1, 'text' => 'La suppression des valeurs manquantes et des anomalies'],
                    ['id' => 2, 'text' => 'La création de graphiques de visualisation'],
                    ['id' => 3, 'text' => 'L\'ajout de nouvelles données'],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Quel est l\'objectif de la normalisation des données ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Réduire la variance des données'],
                    ['id' => 1, 'text' => 'Assurer que les données sont sur une échelle similaire'],
                    ['id' => 2, 'text' => 'Augmenter le volume des données'],
                    ['id' => 3, 'text' => 'Optimiser les performances de la base de données'],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Qu\'est-ce qu\'un modèle de régression linéaire ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Un modèle de classification'],
                    ['id' => 1, 'text' => 'Un modèle de prédiction des relations entre variables'],
                    ['id' => 2, 'text' => 'Un modèle de clustering'],
                    ['id' => 3, 'text' => 'Un modèle de réduction de dimensionnalité'],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Quel algorithme est couramment utilisé pour les problèmes de classification ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Régression Linéaire'],
                    ['id' => 1, 'text' => 'K-means'],
                    ['id' => 2, 'text' => 'Arbre de Décision'],
                    ['id' => 3, 'text' => 'Réduction de Dimensionnalité'],
                ]),
                'response' => 2,
            ],
            [
                'title' => 'Qu\'est-ce que le sur-apprentissage (overfitting) ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Lorsque le modèle est trop simple pour capturer la complexité des données'],
                    ['id' => 1, 'text' => 'Lorsque le modèle apprend trop bien les détails et le bruit des données d\'entraînement'],
                    ['id' => 2, 'text' => 'Lorsque le modèle n\'apprend pas les caractéristiques pertinentes des données'],
                    ['id' => 3, 'text' => 'Lorsque le modèle est trop lent à apprendre'],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Quelle technique est utilisée pour éviter le sur-apprentissage ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Augmenter le nombre de données d\'entraînement'],
                    ['id' => 1, 'text' => 'Utiliser des algorithmes de clustering'],
                    ['id' => 2, 'text' => 'Implémenter la régularisation'],
                    ['id' => 3, 'text' => 'Réduire le nombre de caractéristiques'],
                ]),
                'response' => 2,
            ],
            [
                'title' => 'Quel outil est couramment utilisé pour l\'analyse des données en Python ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Excel'],
                    ['id' => 1, 'text' => 'Tableau'],
                    ['id' => 2, 'text' => 'Pandas'],
                    ['id' => 3, 'text' => 'SQL'],
                ]),
                'response' => 2,
            ],
            [
                'title' => 'Qu\'est-ce qu\'un ensemble de données "non structuré" ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Données organisées en tables relationnelles'],
                    ['id' => 1, 'text' => 'Données stockées dans des fichiers CSV'],
                    ['id' => 2, 'text' => 'Données sans format prédéfini comme les textes, les images ou les vidéos'],
                    ['id' => 3, 'text' => 'Données triées et étiquetées'],
                ]),
                'response' => 2,
            ],
            [
                'title' => 'Qu\'est-ce qu\'un réseau de neurones ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Un modèle de clustering'],
                    ['id' => 1, 'text' => 'Un modèle d\'apprentissage supervisé inspiré du cerveau humain'],
                    ['id' => 2, 'text' => 'Un algorithme de régression'],
                    ['id' => 3, 'text' => 'Une technique de réduction de dimensionnalité'],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Quelle est la différence entre l\'apprentissage supervisé et non supervisé ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'L\'apprentissage supervisé utilise des données étiquetées, tandis que l\'apprentissage non supervisé utilise des données non étiquetées'],
                    ['id' => 1, 'text' => 'L\'apprentissage non supervisé utilise des données étiquetées, tandis que l\'apprentissage supervisé utilise des données non étiquetées'],
                    ['id' => 2, 'text' => 'L\'apprentissage supervisé est plus rapide'],
                    ['id' => 3, 'text' => 'L\'apprentissage non supervisé est plus précis'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Qu\'est-ce que la validation croisée ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Une méthode pour augmenter les données'],
                    ['id' => 1, 'text' => 'Une technique pour diviser les données en ensembles d\'entraînement et de test'],
                    ['id' => 2, 'text' => 'Une méthode pour optimiser les hyperparamètres'],
                    ['id' => 3, 'text' => 'Une technique pour évaluer la performance du modèle en le testant sur plusieurs sous-ensembles des données'],
                ]),
                'response' => 3,
            ],
            [
                'title' => 'Quel est le but d\'une courbe ROC (Receiver Operating Characteristic) ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Évaluer les performances des algorithmes de clustering'],
                    ['id' => 1, 'text' => 'Comparer les performances des algorithmes de régression'],
                    ['id' => 2, 'text' => 'Évaluer la capacité d\'un modèle à discriminer entre les classes'],
                    ['id' => 3, 'text' => 'Optimiser les requêtes SQL'],
                ]),
                'response' => 2,
            ],
            [
                'title' => 'Qu\'est-ce qu\'une variable cible dans un modèle prédictif ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'La variable indépendante utilisée pour prédire'],
                    ['id' => 1, 'text' => 'La variable que l\'on souhaite prédire'],
                    ['id' => 2, 'text' => 'La variable utilisée pour ajuster les paramètres du modèle'],
                    ['id' => 3, 'text' => 'La variable utilisée pour évaluer la performance du modèle'],
                ]),
                'response' => 1,
            ],
            [
                'title' => 'Quelles sont les caractéristiques d\'un bon modèle de Data Science ?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Précision, rapidité, complexité'],
                    ['id' => 1, 'text' => 'Précision, interprétabilité, généralisation'],
                    ['id' => 2, 'text' => 'Complexité, coût, vitesse'],
                    ['id' => 3, 'text' => 'Précision, coût, données'],
                ]),
                'response' => 1,
            ],
        ];

        self::seedQuizzes($course->id, $quizzes);


        $subject = $subjects->get('Marketing');
        $course = Course::query()
            ->firstOrCreate([
                'subject_id' => optional($subject)->id,
                'level_id' => optional($subject)->level_id,
                'image' => 'images/marketing.jpg',
                'label' => 'Introduction au Marketing Digital',
                'description' => 'Le cours "Introduction au Marketing Digital" vous offre une vue d\'ensemble complète sur les stratégies, '
                    . 'outils et techniques du marketing numérique. Vous apprendrez à concevoir et à mettre en œuvre des campagnes efficaces '
                    . 'pour atteindre vos objectifs commerciaux en ligne. Ce cours couvre tout, de la création de contenu à l\'analyse des données, '
                    . 'en passant par les publicités en ligne et le SEO.',
                'objectifs' => "- Comprendre les principes fondamentaux du marketing digital.
- Maîtriser les outils et techniques de SEO et SEM.
- Créer et gérer des campagnes publicitaires en ligne.
- Utiliser les réseaux sociaux pour améliorer la visibilité et l'engagement.
- Analyser et interpréter les données pour optimiser les performances.",
                'details' => "Durée : 12 semaines
Niveau : Débutant à Avancé",
            ]);

        $items = [
            [
                'order' => 0,
                'course_id' => $course->id,
                'title' => '1. Introduction au Marketing Digital',
                'description' => "- Concepts clés du marketing digital
- L'importance du marketing digital dans le paysage commercial moderne
- Aperçu des canaux et outils de marketing",
                'duration' => 150,
            ],
            [
                'order' => 1,
                'course_id' => $course->id,
                'title' => '2. Stratégies de SEO',
                'description' => "- Introduction au référencement naturel (SEO)
- Optimisation des mots-clés et du contenu
- Techniques de création de liens et d'optimisation technique",
                'duration' => 240,
                'video' => 'https://www.youtube.com/watch?v=KoRFf7zjmmc',
            ],
            [
                'order' => 2,
                'course_id' => $course->id,
                'title' => '3. Publicité en Ligne (SEM)',
                'description' => "- Introduction à la publicité payante (PPC)
- Création et gestion de campagnes Google Ads
- Analyse des performances des annonces et optimisation",
                'duration' => 210,
            ],
            [
                'order' => 3,
                'course_id' => $course->id,
                'title' => '4. Marketing sur les Réseaux Sociaux',
                'description' => "- Création et gestion de contenu pour les réseaux sociaux
- Stratégies pour augmenter l'engagement et la visibilité
- Utilisation des outils d'analyse pour mesurer l'impact",
                'duration' => 240,
            ],
            [
                'order' => 4,
                'course_id' => $course->id,
                'title' => '5. Analyse des Données et Optimisation',
                'description' => "- Introduction à Google Analytics et autres outils d'analyse
- Interprétation des données pour optimiser les campagnes
- Techniques d'A/B testing et d'optimisation continue",
                'duration' => 300,
            ],
            [
                'order' => 5,
                'course_id' => $course->id,
                'title' => '6. Projets Pratiques',
                'description' => "- Création d'une stratégie de marketing digital
- Développement d'une campagne publicitaire complète
- Analyse et optimisation des performances",
                'duration' => 360,
            ],
            [
                'order' => 6,
                'course_id' => $course->id,
                'title' => '7. Examen Final',
                'description' => "- Évaluation des compétences acquises
- Réalisation d'un projet pratique en marketing digital
- Présentation du projet et certification",
                'duration' => 330,
            ],
        ];

        self::seedItems($items);

        $quizzes = [
            [
                'title' => 'Qu\'est-ce que le marketing digital ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'L\'utilisation de techniques de marketing via des canaux numériques pour promouvoir des produits et services',
                    ],
                    [
                        'id' => 1,
                        'text' => 'La création de publicités imprimées',
                    ],
                    [
                        'id' => 2,
                        'text' => 'La gestion de la relation client uniquement en magasin',
                    ],
                    [
                        'id' => 3,
                        'text' => 'La publicité traditionnelle à la télévision et à la radio',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quel est l\'objectif principal du SEO (Search Engine Optimization) ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Améliorer le classement d\'un site web dans les résultats des moteurs de recherche',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Augmenter le budget publicitaire',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Créer des vidéos promotionnelles',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Gérer les réseaux sociaux',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quel est le rôle du PPC (Pay-Per-Click) dans le marketing digital ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Permettre aux annonceurs de payer uniquement lorsque leurs annonces sont cliquées',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Créer des publicités imprimées',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Améliorer le référencement organique',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Envoyer des newsletters par e-mail',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quel est l\'avantage principal du marketing par e-mail ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Permet de communiquer directement avec les clients potentiels et existants',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Augmente les frais de publicité',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Génère du trafic sur les réseaux sociaux',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Améliore la visibilité dans les moteurs de recherche',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Qu\'est-ce qu\'une landing page ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Une page web conçue pour convertir les visiteurs en prospects ou clients en fonction d\'une offre spécifique',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Une page d\'accueil d\'un site web',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Une page de contact',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Une page de blog',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quel est le rôle des KPIs (Key Performance Indicators) dans le marketing digital ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Mesurer l\'efficacité des campagnes de marketing et suivre les performances',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Gérer les budgets publicitaires',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Développer du contenu pour les réseaux sociaux',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Concevoir des visuels publicitaires',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Qu\'est-ce que le marketing de contenu ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'La création et la distribution de contenu pertinent et utile pour attirer et engager une audience cible',
                    ],
                    [
                        'id' => 1,
                        'text' => 'La diffusion de publicités payantes sur les moteurs de recherche',
                    ],
                    [
                        'id' => 2,
                        'text' => 'L\'envoi de publicités par e-mail',
                    ],
                    [
                        'id' => 3,
                        'text' => 'La gestion de la relation client',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quel est l\'objectif principal des médias sociaux dans le marketing digital ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Engager et interagir avec les utilisateurs, et promouvoir des produits et services',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Augmenter le budget publicitaire',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Créer des vidéos promotionnelles',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Améliorer le classement SEO',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Qu\'est-ce que le retargeting (reciblage) ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Une technique qui consiste à cibler les utilisateurs qui ont déjà interagi avec un site ou une publicité',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Une stratégie pour attirer de nouveaux clients',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Un moyen d\'augmenter la visibilité dans les moteurs de recherche',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Une méthode pour augmenter les abonnés sur les réseaux sociaux',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quelle est la différence entre le marketing inbound et outbound ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Le marketing inbound attire les clients vers le contenu de l\'entreprise, tandis que le marketing outbound utilise des techniques de prospection directe',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Le marketing inbound est plus coûteux que le marketing outbound',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Le marketing inbound utilise des publicités payantes, tandis que le marketing outbound utilise des contenus gratuits',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Le marketing inbound est uniquement en ligne, tandis que le marketing outbound est uniquement hors ligne',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Qu\'est-ce que le taux de conversion ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Le pourcentage de visiteurs d\'un site web qui réalisent une action souhaitée, comme un achat ou une inscription',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Le nombre total de visiteurs d\'un site web',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Le montant total des ventes réalisées',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Le nombre d\'abonnés sur les réseaux sociaux',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quelle est l\'importance du SEO mobile ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Assurer que le site web est optimisé pour les utilisateurs de dispositifs mobiles, ce qui améliore l\'expérience utilisateur et le classement dans les moteurs de recherche',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Augmenter le budget de publicité',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Créer des applications mobiles',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Augmenter le nombre de backlinks',
                    ],
                ]),
                'response' => 0,
            ],
        ];

        self::seedQuizzes($course->id, $quizzes);


        $subject = $subjects->get('Cybersécurité');
        $course = Course::query()
            ->firstOrCreate([
                'subject_id' => optional($subject)->id,
                'level_id' => optional($subject)->level_id,
                'image' => 'images/reseau.jpg',
                'label' => 'Introduction aux Réseaux et Télécommunications',
                'description' => 'Le cours "Introduction aux Réseaux et Télécommunications" fournit une compréhension approfondie des principes fondamentaux des réseaux informatiques '
                    . 'et des systèmes de télécommunication. Vous apprendrez les concepts de base des réseaux, la configuration et la gestion des équipements réseau, '
                    . 'ainsi que les protocoles et technologies utilisés pour la communication à distance.',
                'objectifs' => "- Comprendre les concepts de base des réseaux et télécommunications.
- Configurer et gérer les équipements réseau tels que les routeurs et les commutateurs.
- Apprendre les protocoles de communication et les normes de télécommunication.
- Diagnostiquer et résoudre les problèmes réseau.
- Mettre en œuvre des solutions de sécurité pour les réseaux.",
                'details' => "Durée : 14 semaines
Niveau : Débutant à Avancé",
            ]);

        $items = [
            [
                'order' => 0,
                'course_id' => $course->id,
                'title' => '1. Introduction aux Réseaux',
                'description' => "- Concepts de base des réseaux informatiques
- Types de réseaux (LAN, WAN, MAN)
- Modèle OSI et TCP/IP",
                'duration' => 180,
            ],
            [
                'order' => 1,
                'course_id' => $course->id,
                'title' => '2. Équipements Réseau',
                'description' => "- Routeurs, commutateurs et points d'accès
- Configuration des équipements réseau
- Surveillance et gestion des équipements",
                'duration' => 240,
            ],
            [
                'order' => 2,
                'course_id' => $course->id,
                'title' => '3. Protocoles de Communication',
                'description' => "- Protocoles TCP/IP et UDP
- Protocoles de routage (BGP, OSPF)
- Sécurité et gestion des protocoles",
                'duration' => 210,
            ],
            [
                'order' => 3,
                'course_id' => $course->id,
                'title' => '4. Gestion des Réseaux',
                'description' => "- Surveillance et optimisation des performances réseau
- Dépannage et résolution des problèmes
- Outils de gestion réseau",
                'duration' => 270,
            ],
            [
                'order' => 4,
                'course_id' => $course->id,
                'title' => '5. Télécommunications',
                'description' => "- Concepts de base des systèmes de télécommunication
- Technologies de communication à distance (5G, fibre optique)
- Mise en œuvre et gestion des systèmes de télécommunication",
                'duration' => 240,
            ],
            [
                'order' => 5,
                'course_id' => $course->id,
                'title' => '6. Sécurité des Réseaux',
                'description' => "- Principes de base de la sécurité des réseaux
- Techniques de prévention et de détection des intrusions
- Mise en œuvre de politiques de sécurité",
                'duration' => 210,
            ],
            [
                'order' => 6,
                'course_id' => $course->id,
                'title' => '7. Projets Pratiques',
                'description' => "- Conception et mise en place d'un réseau local
- Configuration de dispositifs réseau
- Analyse des performances et sécurité d'un réseau",
                'duration' => 300,
            ],
            [
                'order' => 7,
                'course_id' => $course->id,
                'title' => '8. Examen Final',
                'description' => "- Évaluation des compétences acquises
- Réalisation d'un projet final en réseaux et télécommunications
- Présentation et certification",
                'duration' => 300,
            ],
        ];

        self::seedItems($items);

        $quizzes = [
            [
                'title' => 'Quel est le rôle principal du protocole IP dans les réseaux ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Attribuer des adresses uniques à chaque appareil sur un réseau',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Assurer la sécurité des données transmises',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Contrôler le trafic réseau',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Chiffrer les communications',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Qu\'est-ce qu\'un routeur ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Un dispositif qui dirige les paquets de données entre différents réseaux',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Un dispositif qui connecte des périphériques à un réseau local',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Un serveur qui héberge des sites web',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Un équipement de stockage de données',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quel est le but de la couche OSI "Transport" ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Assurer la livraison fiable et ordonnée des données',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Gérer l\'adressage et le routage des paquets',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Créer des connexions physiques entre les dispositifs',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Déterminer le format des données pour la transmission',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Qu\'est-ce qu\'une adresse MAC ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Une adresse physique unique attribuée à chaque carte réseau',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Une adresse logique utilisée pour identifier des réseaux',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Une adresse IP dynamique attribuée par DHCP',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Un identifiant de session pour les connexions VPN',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quel est le rôle du DNS (Domain Name System) ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Convertir les noms de domaine en adresses IP',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Sécuriser les communications réseau',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Attribuer des adresses IP dynamiques',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Contrôler l\'accès aux ressources réseau',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quel est l\'avantage principal du protocole TCP par rapport à UDP ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'TCP assure la livraison fiable des données avec correction d\'erreurs',
                    ],
                    [
                        'id' => 1,
                        'text' => 'UDP est plus rapide car il ne gère pas les erreurs',
                    ],
                    [
                        'id' => 2,
                        'text' => 'TCP utilise moins de bande passante',
                    ],
                    [
                        'id' => 3,
                        'text' => 'UDP est plus sécurisé',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Qu\'est-ce qu\'un VLAN (Virtual Local Area Network) ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Un réseau logique qui sépare les segments de réseau pour améliorer la sécurité et la gestion',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Un type de routeur utilisé pour connecter plusieurs réseaux',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Un protocole de communication pour les réseaux sans fil',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Un équipement de stockage pour les réseaux',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quelle est la principale différence entre un switch et un hub ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Un switch dirige les données vers le destinataire spécifique, tandis qu\'un hub envoie les données à tous les appareils',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Un hub est plus rapide qu\'un switch',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Un switch fonctionne uniquement sur des réseaux locaux, tandis qu\'un hub fonctionne sur des réseaux étendus',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Un switch est utilisé pour le routage, tandis qu\'un hub est utilisé pour le stockage',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Qu\'est-ce que le protocole DHCP (Dynamic Host Configuration Protocol) ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Un protocole qui attribue automatiquement des adresses IP aux dispositifs sur un réseau',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Un protocole pour sécuriser les données transmises',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Un protocole pour la gestion des noms de domaine',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Un protocole pour la transmission des données en temps réel',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quel est le rôle du protocole HTTPS ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Assurer la sécurité des données échangées entre le navigateur et le serveur web',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Optimiser les performances de réseau',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Attribuer des adresses IP aux dispositifs',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Gérer la connexion entre plusieurs réseaux',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Qu\'est-ce que le NAT (Network Address Translation) ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Une technique qui permet à plusieurs dispositifs sur un réseau local d\'utiliser une seule adresse IP publique',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Une méthode de chiffrement des données',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Un protocole de routage',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Une technologie de stockage réseau',
                    ],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'Quel est le but de la QoS (Quality of Service) dans les réseaux ?',
                'choices' => json_encode([
                    [
                        'id' => 0,
                        'text' => 'Assurer un niveau de performance garanti pour les différents types de trafic réseau',
                    ],
                    [
                        'id' => 1,
                        'text' => 'Augmenter la vitesse de connexion',
                    ],
                    [
                        'id' => 2,
                        'text' => 'Sécuriser les données transmises',
                    ],
                    [
                        'id' => 3,
                        'text' => 'Optimiser l\'utilisation de l\'espace de stockage',
                    ],
                ]),
                'response' => 0,
            ],
        ];

        self::seedQuizzes($course->id, $quizzes);

        $subject = $subjects->get('Langues');
        $course = Course::query()
            ->firstOrCreate([
                'subject_id' => optional($subject)->id,
                'level_id' => optional($subject)->level_id,
                'image' => 'images/english.jpg',
                'label' => 'Anglais',
                'description' => 'Le cours "Anglais" fournit une compréhension approfondie des principes fondamentaux de la langue anglaise',
                'objectifs' => "- Comprendre la conjugaison et les différents temps.
- Faire une lettre.
- Rediger une invitation a un évènement.",
                'details' => "Durée : 2 semaines
Niveau : Débutant à Intermédiaire",
                'video' => 'https://www.youtube.com/watch?v=v5kZekynt-8',
            ]);

        $items = [
            [
                'order' => 0,
                'course_id' => $course->id,
                'title' => 'Apprendre les pronoms',
                'description' => "Comment parler de quelqu'un ou de quelque chose ? Vous trouverez dans la video comment apprendre les prénoms.",
                'duration' => 20,
                'video' => 'https://www.youtube.com/watch?v=m4PZNGuvI88',
            ],
        ];

        self::seedItems($items);

        $quizzes = [
            [
                'title' => 'What does "IP" stand for in networking?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Internet Protocol'],
                    ['id' => 1, 'text' => 'Integrated Protocol'],
                    ['id' => 2, 'text' => 'Internal Protocol'],
                    ['id' => 3, 'text' => 'International Protocol'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'What is the meaning of "Router"?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'A device that directs data packets between different networks'],
                    ['id' => 1, 'text' => 'A device that connects multiple devices within a local network'],
                    ['id' => 2, 'text' => 'A server that hosts websites'],
                    ['id' => 3, 'text' => 'A type of storage device'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'What does "DNS" stand for?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Domain Name System'],
                    ['id' => 1, 'text' => 'Dynamic Network Service'],
                    ['id' => 2, 'text' => 'Data Network Security'],
                    ['id' => 3, 'text' => 'Distributed Network Server'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'What is a "MAC address"?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'A unique physical address assigned to each network interface card'],
                    ['id' => 1, 'text' => 'A logical address used to identify networks'],
                    ['id' => 2, 'text' => 'A dynamically assigned IP address by DHCP'],
                    ['id' => 3, 'text' => 'A session identifier for VPN connections'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'What does "TCP" stand for?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Transmission Control Protocol'],
                    ['id' => 1, 'text' => 'Transport Control Protocol'],
                    ['id' => 2, 'text' => 'Transmission Communication Protocol'],
                    ['id' => 3, 'text' => 'Transport Communication Protocol'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'What is "NAT"?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Network Address Translation'],
                    ['id' => 1, 'text' => 'Network Access Terminal'],
                    ['id' => 2, 'text' => 'Network Allocation Technology'],
                    ['id' => 3, 'text' => 'Network Addressing Tool'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'What does "VLAN" stand for?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Virtual Local Area Network'],
                    ['id' => 1, 'text' => 'Variable Local Area Network'],
                    ['id' => 2, 'text' => 'Virtual Link Access Network'],
                    ['id' => 3, 'text' => 'Virtual Local Access Network'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'What is a "Switch" in networking?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'A device that directs data to the specific recipient'],
                    ['id' => 1, 'text' => 'A device that broadcasts data to all devices in a network'],
                    ['id' => 2, 'text' => 'A type of router used for connecting multiple networks'],
                    ['id' => 3, 'text' => 'A protocol used for network security'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'What does "QoS" stand for?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'Quality of Service'],
                    ['id' => 1, 'text' => 'Quantity of Service'],
                    ['id' => 2, 'text' => 'Quick Operating System'],
                    ['id' => 3, 'text' => 'Quality Operating System'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'What is the purpose of "DHCP"?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'To automatically assign IP addresses to devices on a network'],
                    ['id' => 1, 'text' => 'To manage network traffic'],
                    ['id' => 2, 'text' => 'To convert domain names into IP addresses'],
                    ['id' => 3, 'text' => 'To encrypt network communications'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'What does "HTTPS" stand for?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'HyperText Transfer Protocol Secure'],
                    ['id' => 1, 'text' => 'HyperText Transmission Protocol Standard'],
                    ['id' => 2, 'text' => 'HyperText Transfer Protocol Server'],
                    ['id' => 3, 'text' => 'HyperText Transfer Protocol Service'],
                ]),
                'response' => 0,
            ],
            [
                'title' => 'What is "Bandwidth"?',
                'choices' => json_encode([
                    ['id' => 0, 'text' => 'The maximum rate at which data can be transmitted over a network'],
                    ['id' => 1, 'text' => 'The physical size of network cables'],
                    ['id' => 2, 'text' => 'The number of devices connected to a network'],
                    ['id' => 3, 'text' => 'The software used for network management'],
                ]),
                'response' => 0,
            ],
        ];

        self::seedQuizzes($course->id, $quizzes);

        /*
        $subject = $subjects->get('Programmation');
        $course = Course::query()
            ->firstOrCreate([
                'subject_id' => optional($subject)->id,
                'level_id' => optional($subject)->level_id,
                'image' => 'images/.jpg',
                'label' => '',
                'description' => '',
                'objectifs' => "",
                'details' => "",
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

    /**
     * @param int $courseId
     * @param array $items
     *
     * @return void
     */
    public static function seedQuizzes(int $courseId, array $items = []): void
    {
        foreach ($items as $item) {
            $item['course_id'] = $courseId;
            Quiz::query()->firstOrCreate($item);
        }
    }
}
