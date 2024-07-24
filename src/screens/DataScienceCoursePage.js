import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Color, FontFamily, FontSize } from "../components/GlobalStyles";

const DataScienceCoursePage = () => {
  const courseProgress = 0.3; // 30% de progression

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.pageDuCours}>
        {/* Image en haut de la page */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.pageDuCoursChild}
            contentFit="cover"
            source={require("../../assets/images/datascience.png")}
          />
        </View>

        {/* Titre "Introduction à la Data Science" */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Introduction à la Data Science</Text>
        </View>

        {/* Description du cours */}
        <Text style={styles.courseDescription}>
          Le cours "Introduction à la Data Science" offre une vue d'ensemble complète des méthodes et techniques utilisées pour extraire des connaissances à partir des données. Il couvre les bases de la manipulation de données, l'analyse statistique, et les méthodes d'apprentissage automatique. Les participants apprendront à utiliser des outils comme Python, R, et SQL pour traiter des ensembles de données, créer des modèles prédictifs, et visualiser les résultats.
        </Text>

        {/* Détails du cours */}
        <Text style={styles.courseDetails}>
          Durée : 16 semaines{"\n"}
          Niveau : Débutant à Avancé
        </Text>

        {/* Objectifs du cours */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objectifs du cours :</Text>
          <Text style={styles.sectionText}>
            - Comprendre les principes fondamentaux de la data science.{"\n"}
            - Maîtriser les techniques de nettoyage et de préparation des données.{"\n"}
            - Appliquer des méthodes d'analyse statistique pour extraire des insights.{"\n"}
            - Construire et évaluer des modèles prédictifs.{"\n"}
            - Utiliser des outils de visualisation pour communiquer les résultats.
          </Text>
        </View>

        {/* Contenu du cours */}
        <View style={styles.sectionsContainer}>
          {/* Section "Introduction à la Data Science" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>1. Introduction à la Data Science :</Text>
            <Text style={styles.sectionText}>
              - Qu'est-ce que la data science ?{"\n"}
              - Applications et importance dans l'industrie{"\n"}
              - Outils et environnements de travail
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

          {/* Section "Manipulation des Données" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>2. Manipulation des Données :</Text>
            <Text style={styles.sectionText}>
              - Nettoyage et préparation des données{"\n"}
              - Utilisation de pandas en Python et d.dplyr en R{"\n"}
              - Gestion des valeurs manquantes et des anomalies
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

          {/* Section "Analyse Statistique" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>3. Analyse Statistique :</Text>
            <Text style={styles.sectionText}>
              - Statistiques descriptives et inférentielles{"\n"}
              - Tests d'hypothèses et intervalles de confiance{"\n"}
              - Corrélations et régressions
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

          {/* Section "Apprentissage Supervisé" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>4. Apprentissage Supervisé :</Text>
            <Text style={styles.sectionText}>
              - Classification et régression{"\n"}
              - Modèles de décision, SVM, et forêts aléatoires{"\n"}
              - Évaluation des modèles et validation croisée
            </Text>
            <View style={styles.sectionFooter}>
              <Text style={styles.sectionHours}>5 : 00 hrs</Text>
              <TouchableOpacity style={styles.playButton}>
                <Icon name="play-circle-outline" size={30} color="#1E90FF" />
              </TouchableOpacity>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: `${courseProgress * 100}%` }]} />
            </View>
          </View>

          {/* Section "Apprentissage Non Supervisé" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>5. Apprentissage Non Supervisé :</Text>
            <Text style={styles.sectionText}>
              - Clustering et réduction de dimension{"\n"}
              - K-means, PCA, et t-SNE{"\n"}
              - Applications et évaluation des résultats
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

          {/* Section "Visualisation des Données" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>6. Visualisation des Données :</Text>
            <Text style={styles.sectionText}>
              - Création de graphiques avec Matplotlib et Seaborn{"\n"}
              - Visualisation interactive avec Plotly et Tableau{"\n"}
              - Meilleures pratiques pour la présentation des résultats
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

          {/* Section "Projets Pratiques" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>7. Projets Pratiques :</Text>
            <Text style={styles.sectionText}>
              - Analyse d'un ensemble de données réel{"\n"}
              - Construction d'un modèle prédictif{"\n"}
              - Présentation des résultats et recommandations
            </Text>
            <View style={styles.sectionFooter}>
              <Text style={styles.sectionHours}>5 : 00 hrs</Text>
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
            <Text style={styles.sectionTitle}>8. Examen Final :</Text>
            <Text style={styles.sectionText}>
              - Évaluation des connaissances et des compétences acquises{"\n"}
              - Projet pratique de data science{"\n"}
              - Certification en Data Science
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

export default DataScienceCoursePage;
