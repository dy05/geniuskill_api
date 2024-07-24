import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Color, FontFamily, FontSize } from "../components/GlobalStyles";

const ArtificialCoursePage = () => {
  const courseProgress = 0.4; // 40% de progression

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.pageDuCours}>
        {/* Image en haut de la page */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.pageDuCoursChild}
            contentFit="cover"
            source={require("../../assets/images/IntelligenceArt.png")}
          />
        </View>

        {/* Titre "Introduction à l'Intelligence Artificielle" */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Introduction à l'Intelligence Artificielle</Text>
        </View>

        {/* Description du cours */}
        <Text style={styles.courseDescription}>
          Le cours "Introduction à l'Intelligence Artificielle" explore les concepts fondamentaux de l'IA, y compris l'apprentissage automatique, les réseaux neuronaux, et les algorithmes intelligents. Les étudiants apprendront à concevoir et à mettre en œuvre des solutions d'IA pour résoudre des problèmes complexes et améliorer les processus d'affaires. Le cours couvre également les enjeux éthiques et sociaux liés à l'IA.
        </Text>

        {/* Détails du cours */}
        <Text style={styles.courseDetails}>
          Durée : 14 semaines{"\n"}
          Niveau : Intermédiaire à Avancé
        </Text>

        {/* Objectifs du cours */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objectifs du cours :</Text>
          <Text style={styles.sectionText}>
            - Comprendre les principes de base de l'intelligence artificielle.{"\n"}
            - Appliquer les techniques d'apprentissage supervisé et non supervisé.{"\n"}
            - Concevoir et entraîner des réseaux neuronaux profonds.{"\n"}
            - Explorer les applications et les défis éthiques de l'IA.
          </Text>
        </View>

        {/* Contenu du cours */}
        <View style={styles.sectionsContainer}>
          {/* Section "Introduction à l'IA" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>1. Introduction à l'IA :</Text>
            <Text style={styles.sectionText}>
              - Définition et histoire de l'IA{"\n"}
              - Applications actuelles et futures de l'IA{"\n"}
              - Outils et environnements de développement
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

          {/* Section "Algorithmes d'Apprentissage Automatique" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>2. Algorithmes d'Apprentissage Automatique :</Text>
            <Text style={styles.sectionText}>
              - Régression linéaire et logistique{"\n"}
              - Algorithmes de clustering comme K-means{"\n"}
              - Évaluation et validation des modèles
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

          {/* Section "Réseaux Neuronaux" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>3. Réseaux Neuronaux :</Text>
            <Text style={styles.sectionText}>
              - Perceptron multicouche (MLP){"\n"}
              - Réseaux de neurones convolutifs (CNN){"\n"}
              - Réseaux de neurones récurrents (RNN)
            </Text>
            <View style={styles.sectionFooter}>
              <Text style={styles.sectionHours}>5 : 30 hrs</Text>
              <TouchableOpacity style={styles.playButton}>
                <Icon name="play-circle-outline" size={30} color="#1E90FF" />
              </TouchableOpacity>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: `${courseProgress * 100}%` }]} />
            </View>
          </View>

          {/* Section "IA et Éthique" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>4. IA et Éthique :</Text>
            <Text style={styles.sectionText}>
              - Enjeux éthiques et biais des algorithmes{"\n"}
              - Confidentialité et sécurité des données{"\n"}
              - Régulations et législation autour de l'IA
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

          {/* Section "Projets Pratiques en IA" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>5. Projets Pratiques en IA :</Text>
            <Text style={styles.sectionText}>
              - Développement d'un modèle d'IA pour une application réelle{"\n"}
              - Analyse des résultats et optimisation des performances{"\n"}
              - Présentation des projets et recommandations
            </Text>
            <View style={styles.sectionFooter}>
              <Text style={styles.sectionHours}>6 : 00 hrs</Text>
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
            <Text style={styles.sectionTitle}>6. Examen Final :</Text>
            <Text style={styles.sectionText}>
              - Évaluation des compétences et des connaissances acquises{"\n"}
              - Réalisation d'un projet pratique d'IA{"\n"}
              - Certification en Intelligence Artificielle
            </Text>
            <View style={styles.sectionFooter}>
              <Text style={styles.sectionHours}>4 : 30 hrs</Text>
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
  sectionsContainer: {
    marginTop: 16,
  }
});

export default ArtificialCoursePage;
