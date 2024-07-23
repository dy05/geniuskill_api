import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Color, FontFamily, FontSize } from "../components/GlobalStyles";

const WebDevelopmentCoursePage = () => {
  const courseProgress = 0.5; // 50% de progression

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.pageDuCours}>
        {/* Image en haut de la page */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.pageDuCoursChild}
            contentFit="cover"
            source={require("../../assets/images/webdevelopment.png")}
          />
        </View>

        {/* Titre "Introduction au Développement Web" */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Introduction au Développement Web</Text>
        </View>

        {/* Description du cours */}
        <Text style={styles.courseDescription}>
          Le cours "Introduction au Développement Web" est conçu pour fournir aux participants une compréhension complète des technologies et des pratiques du développement web. Ce cours couvre les fondamentaux du HTML, CSS, et JavaScript, ainsi que des concepts plus avancés tels que les frameworks modernes et les bonnes pratiques de développement. Les étudiants apprendront à créer des sites web dynamiques et interactifs, à optimiser les performances et à assurer la compatibilité entre les navigateurs.
        </Text>

        {/* Détails du cours */}
        <Text style={styles.courseDetails}>
          Durée : 12 semaines{"\n"}
          Niveau : Débutant à Avancé
        </Text>

        {/* Objectifs du cours */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objectifs du cours :</Text>
          <Text style={styles.sectionText}>
            - Maîtriser les bases du HTML, CSS, et JavaScript.{"\n"}
            - Apprendre à utiliser les frameworks modernes comme React ou Vue.js.{"\n"}
            - Comprendre les principes de responsive design et d'accessibilité.{"\n"}
            - Optimiser les performances des sites web.{"\n"}
            - Gérer les versions et collaborer sur des projets de développement.
          </Text>
        </View>

        {/* Contenu du cours */}
        <View style={styles.sectionsContainer}>
          {/* Section "Introduction au HTML" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>1. Introduction au HTML :</Text>
            <Text style={styles.sectionText}>
              - Structure de base d'une page HTML{"\n"}
              - Éléments et attributs HTML{"\n"}
              - Mise en forme du texte et des images
            </Text>
            <View style={styles.sectionFooter}>
              <Text style={styles.sectionHours}>2 : 00 hrs</Text>
              <TouchableOpacity style={styles.playButton}>
                <Icon name="play-circle-outline" size={30} color="#1E90FF" />
              </TouchableOpacity>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: `${courseProgress * 100}%` }]} />
            </View>
          </View>

          {/* Section "Introduction au CSS" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>2. Introduction au CSS :</Text>
            <Text style={styles.sectionText}>
              - Sélecteurs et propriétés CSS{"\n"}
              - Mise en page avec Flexbox et Grid{"\n"}
              - Styles réactifs pour les différents écrans
            </Text>
            <View style={styles.sectionFooter}>
              <Text style={styles.sectionHours}>2 : 30 hrs</Text>
              <TouchableOpacity style={styles.playButton}>
                <Icon name="play-circle-outline" size={30} color="#1E90FF" />
              </TouchableOpacity>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: `${courseProgress * 100}%` }]} />
            </View>
          </View>

          {/* Section "Introduction au JavaScript" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>3. Introduction au JavaScript :</Text>
            <Text style={styles.sectionText}>
              - Variables et types de données{"\n"}
              - Fonctions et événements{"\n"}
              - Manipulation du DOM et AJAX
            </Text>
            <View style={styles.sectionFooter}>
              <Text style={styles.sectionHours}>3 : 00 hrs</Text>
              <TouchableOpacity style={styles.playButton}>
                <Icon name="play-circle-outline" size={30} color="#1E90FF" />
              </TouchableOpacity>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: `${courseProgress * 100}%` }]} />
            </View>
          </View>

          {/* Section "Frameworks Modernes" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>4. Frameworks Modernes :</Text>
            <Text style={styles.sectionText}>
              - Introduction à React et Vue.js{"\n"}
              - Composants et gestion d'état{"\n"}
              - Routage et gestion des données
            </Text>
            <View style={styles.sectionFooter}>
              <Text style={styles.sectionHours}>3 : 30 hrs</Text>
              <TouchableOpacity style={styles.playButton}>
                <Icon name="play-circle-outline" size={30} color="#1E90FF" />
              </TouchableOpacity>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: `${courseProgress * 100}%` }]} />
            </View>
          </View>

          {/* Section "Responsive Design" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>5. Responsive Design :</Text>
            <Text style={styles.sectionText}>
              - Techniques de responsive design{"\n"}
              - Utilisation de media queries{"\n"}
              - Création de mises en page adaptatives
            </Text>
            <View style={styles.sectionFooter}>
              <Text style={styles.sectionHours}>2 : 45 hrs</Text>
              <TouchableOpacity style={styles.playButton}>
                <Icon name="play-circle-outline" size={30} color="#1E90FF" />
              </TouchableOpacity>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: `${courseProgress * 100}%` }]} />
            </View>
          </View>

          {/* Section "Optimisation des Performances" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>6. Optimisation des Performances :</Text>
            <Text style={styles.sectionText}>
              - Techniques d'optimisation des temps de chargement{"\n"}
              - Minification et compression des fichiers{"\n"}
              - Caching et gestion des ressources
            </Text>
            <View style={styles.sectionFooter}>
              <Text style={styles.sectionHours}>2 : 30 hrs</Text>
              <TouchableOpacity style={styles.playButton}>
                <Icon name="play-circle-outline" size={30} color="#1E90FF" />
              </TouchableOpacity>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: `${courseProgress * 100}%` }]} />
            </View>
          </View>

          {/* Section "Accessibilité Web" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>7. Accessibilité Web :</Text>
            <Text style={styles.sectionText}>
              - Principes de l'accessibilité web{"\n"}
              - Utilisation des attributs ARIA{"\n"}
              - Test des interfaces pour les personnes handicapées
            </Text>
            <View style={styles.sectionFooter}>
              <Text style={styles.sectionHours}>2 : 15 hrs</Text>
              <TouchableOpacity style={styles.playButton}>
                <Icon name="play-circle-outline" size={30} color="#1E90FF" />
              </TouchableOpacity>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: `${courseProgress * 100}%` }]} />
            </View>
          </View>

          {/* Section "Gestion des Versions et Collaboration" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>8. Gestion des Versions et Collaboration :</Text>
            <Text style={styles.sectionText}>
              - Introduction à Git et GitHub{"\n"}
              - Branches, commits et fusion{"\n"}
              - Collaboration et gestion des conflits
            </Text>
            <View style={styles.sectionFooter}>
              <Text style={styles.sectionHours}>3 : 00 hrs</Text>
              <TouchableOpacity style={styles.playButton}>
                <Icon name="play-circle-outline" size={30} color="#1E90FF" />
              </TouchableOpacity>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: `${courseProgress * 100}%` }]} />
            </View>
          </View>

          {/* Section "Examen Final" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>9. Examen Final :</Text>
            <Text style={styles.sectionText}>
              - Évaluation des connaissances et des compétences acquises{"\n"}
              - Projet pratique de développement web{"\n"}
              - Certification en Développement Web
            </Text>
            <View style={styles.sectionFooter}>
              <Text style={styles.sectionHours}>4 : 00 hrs</Text>
              <TouchableOpacity style={styles.playButton}>
                <Icon name="play-circle-outline" size={30} color="#1E90FF" />
              </TouchableOpacity>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: `${courseProgress * 100}%` }]} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  pageDuCours: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 16,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  pageDuCoursChild: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  titleContainer: {
    marginBottom: 8,
  },
  title: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.robotoBold,
    color: Color.primary,
    textAlign: "center",
  },
  courseDescription: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
    color: Color.darkGray,
    marginBottom: 16,
  },
  courseDetails: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
    color: Color.gray,
    marginBottom: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: FontSize.size_md,
    fontFamily: FontFamily.robotoBold,
    color: Color.primary,
    marginBottom: 8,
  },
  sectionText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
    color: Color.darkGray,
    marginBottom: 16,
  },
  sectionFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionHours: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
    color: Color.gray,
  },
  playButton: {
    marginLeft: 8,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    overflow: "hidden",
    marginTop: 8,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#1E90FF",
  },
});

export default WebDevelopmentCoursePage;
