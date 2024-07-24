import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Color } from "../components/GlobalStyles";

const CoursePage = () => {
  const courseProgress = 0.5; // 50% de progression
  const navigation = useNavigation();

  const sections = [
    {
      title: '1. Introduction au HTML',
      text: ' - Structure de base d\'une page HTML\n - Éléments et attributs HTML\n - Mise en forme du texte et des images',
      hours: '2 : 00 hrs',
      videoUrl: 'https://www.youtube.com/watch?v=pQN-pnXPaVg',
      quizId: 1,
    },
    {
      title: '2. Introduction au CSS',
      text: ' - Sélecteurs et propriétés CSS\n - Mise en page avec Flexbox et Grid\n - Styles réactifs pour les différents écrans',
      hours: '2 : 30 hrs',
      videoUrl: 'https://www.youtube.com/watch?v=yfoY53QXEnI',
      quizId: 2,
    },
    {
      title: '3. Introduction au JavaScript',
      text: ' - Variables et types de données\n - Fonctions et événements\n - Manipulation du DOM et AJAX',
      hours: '3 : 00 hrs',
      videoUrl: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
      quizId: 3,
    },
    {
      title: '5. Responsive Design',
      text: ' - Techniques de responsive design\n - Utilisation de media queries\n - Création de mises en page adaptatives',
      hours: '2 : 45 hrs',
      videoUrl: 'https://www.youtube.com/watch?v=srvUrASNj0s',
      quizId: 4,
    },
    {
      title: '6. Optimisation des Performances',
      text: ' - Techniques d\'optimisation des temps de chargement\n - Minification et compression des fichiers\n - Caching et gestion des ressources',
      hours: '2 : 30 hrs',
      videoUrl: 'https://www.youtube.com/watch?v=bdAIw9qBGvc',
      quizId: 5,
    },
    {
      title: '7. Accessibilité Web',
      text: ' - Principes de l\'accessibilité web\n - Utilisation des attributs ARIA\n - Test des interfaces pour les personnes handicapées',
      hours: '2 : 15 hrs',
      videoUrl: 'https://www.youtube.com/watch?v=nM4FdQyIQGo',
      quizId: 6,
    },
    {
      title: '8. Gestion des Versions et Collaboration',
      text: ' - Introduction à Git et GitHub\n - Flux de travail collaboratifs\n - Résolution des conflits et gestion des branches',
      hours: '3 : 00 hrs',
      videoUrl: 'https://www.youtube.com/watch?v=8JJ101D3knE',
      quizId: 7,
    },
  ];

  const navigateToQuiz = (quizId) => {
    navigation.navigate('QuizScreen', { quizId });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.pageDuCours}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.pageDuCoursChild}
            contentFit="cover"
            source={require("../../assets/images/webdevelopment.png")}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Introduction au Développement Web</Text>
        </View>
        <Text style={styles.courseDescription}>
          Le cours "Introduction au Développement Web" est conçu pour fournir aux participants une compréhension complète des technologies et des pratiques du développement web. Ce cours couvre les fondamentaux du HTML, CSS, et JavaScript, ainsi que des concepts plus avancés tels que les frameworks modernes et les bonnes pratiques de développement. Les étudiants apprendront à créer des sites web dynamiques et interactifs, à optimiser les performances et à assurer la compatibilité entre les navigateurs.
        </Text>
        <Text style={styles.courseDetails}>
          Durée : 12 semaines{"\n"}
          Niveau : Débutant à Avancé
        </Text>
        <View style={styles.sectionsContainer}>
          {sections.map((section, index) => (
            <View key={index} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <Text style={styles.sectionText}>{section.text}</Text>
              <View style={styles.sectionFooter}>
                <Text style={styles.sectionHours}>{section.hours}</Text>
                <TouchableOpacity style={styles.playButton} onPress={() => navigation.navigate('VideoPlayer', { videoUrl: section.videoUrl })}>
                  <Icon name="play-circle-outline" size={30} color="#1E90FF" />
                </TouchableOpacity>
              </View>
              <View style={styles.progressBarContainer}>
                <View style={[styles.progressBar, { width: `${courseProgress * 100}%` }]} />
              </View>
              <View style={styles.quizButtonContainer}>
                <TouchableOpacity style={styles.quizButton} onPress={() => navigateToQuiz(section.quizId)}>
                  <Text style={styles.quizButtonText}>Commencer le Quizz</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingBottom: 20,
  },
  pageDuCours: {
    flex: 1,
    backgroundColor: Color.white,
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: 200,
    marginBottom: 20,
  },
  pageDuCoursChild: {
    width: "100%",
    height: "100%",
  },
  titleContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: Color.primary,
  },
  courseDescription: {
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20,
  },
  courseDetails: {
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20,
  },
  sectionsContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: Color.lightGray,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 10,
  },
  sectionFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionHours: {
    fontSize: 14,
    color: Color.darkGray,
  },
  playButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  progressBarContainer: {
    height: 5,
    backgroundColor: Color.gray,
    borderRadius: 2.5,
    marginTop: 10,
  },
  progressBar: {
    height: "100%",
    backgroundColor: Color.primary,
    borderRadius: 2.5,
  },
  quizButtonContainer: {
    marginTop: 10,
  },
  quizButton: {
    backgroundColor: Color.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  quizButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CoursePage;
