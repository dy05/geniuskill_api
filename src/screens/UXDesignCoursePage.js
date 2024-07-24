import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import { Color, FontFamily, FontSize } from "../components/GlobalStyles";

const UXDesignCoursePage = () => {
  const courseProgress = 0.7; // 70% de progression

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.pageDuCours}>
        {/* Image en haut de la page */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.pageDuCoursChild}
            contentFit="cover"
            source={require("../../assets/images/uxdesign.png")}
          />
        </View>

        {/* Titre "Introduction au UX Design" */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Introduction au UX Design</Text>
        </View>

        {/* Description du cours */}
        <Text style={styles.courseDescription}>
          Le cours "Introduction au UX Design" est conçu pour fournir aux participants une compréhension approfondie des principes et pratiques du design d'expérience utilisateur. Le cours couvre un large éventail de sujets allant des concepts fondamentaux de l'UX aux techniques avancées de conception centrée sur l'utilisateur. Les étudiants apprendront à identifier les besoins des utilisateurs, à créer des prototypes et à tester les interfaces pour améliorer l'expérience utilisateur.
        </Text>

        {/* Détails du cours */}
        <Text style={styles.courseDetails}>
          Durée : 10 semaines{"\n"}
          Niveau : Débutant à Intermédiaire
        </Text>

        {/* Objectifs du cours */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objectifs du cours :</Text>
          <Text style={styles.sectionText}>
            - Comprendre les concepts fondamentaux du UX Design.{"\n"}
            - Apprendre les techniques de recherche utilisateur.{"\n"}
            - Maîtriser les outils de prototypage et de wireframing.{"\n"}
            - Savoir réaliser des tests utilisateurs et analyser les résultats.{"\n"}
            - Connaître les bonnes pratiques de conception centrée sur l'utilisateur.
          </Text>
        </View>

        {/* Contenu du cours */}
        <View style={styles.sectionsContainer}>
          {/* Section "Introduction au UX Design" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>1. Introduction au UX Design :</Text>
            <Text style={styles.sectionText}>
              - Définition et importance du UX Design{"\n"}
              - Principes de base de l'expérience utilisateur{"\n"}
              - Évolution du design centré sur l'utilisateur
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

          {/* Section "Recherche Utilisateur" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>2. Recherche Utilisateur :</Text>
            <Text style={styles.sectionText}>
              - Méthodes de recherche utilisateur (entretiens, sondages, etc.){"\n"}
              - Analyse des besoins et des comportements des utilisateurs{"\n"}
              - Création de personas
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

          {/* Section "Architecture de l'Information" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>3. Architecture de l'Information :</Text>
            <Text style={styles.sectionText}>
              - Organisation et structure de l'information{"\n"}
              - Cartes de site et navigation{"\n"}
              - Hiérarchie de l'information
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

          {/* Section "Prototypage et Wireframing" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>4. Prototypage et Wireframing :</Text>
            <Text style={styles.sectionText}>
              - Outils et techniques de prototypage{"\n"}
              - Création de wireframes{"\n"}
              - Interaction et animation des prototypes
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

          {/* Section "Design Visuel" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>5. Design Visuel :</Text>
            <Text style={styles.sectionText}>
              - Principes de design graphique{"\n"}
              - Choix des couleurs et typographie{"\n"}
              - Design d'interfaces et d'interactions
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

          {/* Section "Tests Utilisateurs" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>6. Tests Utilisateurs :</Text>
            <Text style={styles.sectionText}>
              - Planification et réalisation des tests utilisateurs{"\n"}
              - Techniques d'observation et d'analyse{"\n"}
              - Amélioration des designs basés sur les retours utilisateurs
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

          {/* Section "Accessibilité et Inclusivité" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>7. Accessibilité et Inclusivité :</Text>
            <Text style={styles.sectionText}>
              - Principes d'accessibilité numérique{"\n"}
              - Conception pour l'inclusivité{"\n"}
              - Normes et bonnes pratiques
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

          {/* Section "Design Mobile" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>8. Design Mobile :</Text>
            <Text style={styles.sectionText}>
              - Spécificités du design mobile{"\n"}
              - Conception d'interfaces mobiles{"\n"}
              - Techniques de responsive design
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
              - Étude de cas et résolution de problèmes pratiques{"\n"}
              - Certification en UX Design
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

export default UXDesignCoursePage;
