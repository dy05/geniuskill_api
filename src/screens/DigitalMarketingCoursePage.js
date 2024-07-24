import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Color, FontFamily, FontSize } from "../components/GlobalStyles";

const DigitalMarketingCoursePage = () => {
  const courseProgress = 0.5; // 50% de progression

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.pageDuCours}>
        {/* Image en haut de la page */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.pageDuCoursChild}
            contentFit="cover"
            source={require("../../assets/images/digital-marketing-course.png")}
          />
        </View>

        {/* Titre "Introduction au Marketing Digital" */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Introduction au Marketing Digital</Text>
        </View>

        {/* Description du cours */}
        <Text style={styles.courseDescription}>
          Le cours "Introduction au Marketing Digital" vous offre une vue d'ensemble complète sur les stratégies, outils et techniques du marketing numérique. Vous apprendrez à concevoir et à mettre en œuvre des campagnes efficaces pour atteindre vos objectifs commerciaux en ligne. Ce cours couvre tout, de la création de contenu à l'analyse des données, en passant par les publicités en ligne et le SEO.
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
            - Comprendre les principes fondamentaux du marketing digital.{"\n"}
            - Maîtriser les outils et techniques de SEO et SEM.{"\n"}
            - Créer et gérer des campagnes publicitaires en ligne.{"\n"}
            - Utiliser les réseaux sociaux pour améliorer la visibilité et l'engagement.{"\n"}
            - Analyser et interpréter les données pour optimiser les performances.
          </Text>
        </View>

        {/* Contenu du cours */}
        <View style={styles.sectionsContainer}>
          {/* Section "Introduction au Marketing Digital" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>1. Introduction au Marketing Digital :</Text>
            <Text style={styles.sectionText}>
              - Concepts clés du marketing digital{"\n"}
              - L'importance du marketing digital dans le paysage commercial moderne{"\n"}
              - Aperçu des canaux et outils de marketing
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

          {/* Section "Stratégies de SEO" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>2. Stratégies de SEO :</Text>
            <Text style={styles.sectionText}>
              - Introduction au référencement naturel (SEO){"\n"}
              - Optimisation des mots-clés et du contenu{"\n"}
              - Techniques de création de liens et d'optimisation technique
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

          {/* Section "Publicité en Ligne (SEM)" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>3. Publicité en Ligne (SEM) :</Text>
            <Text style={styles.sectionText}>
              - Introduction à la publicité payante (PPC){"\n"}
              - Création et gestion de campagnes Google Ads{"\n"}
              - Analyse des performances des annonces et optimisation
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

          {/* Section "Marketing sur les Réseaux Sociaux" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>4. Marketing sur les Réseaux Sociaux :</Text>
            <Text style={styles.sectionText}>
              - Création et gestion de contenu pour les réseaux sociaux{"\n"}
              - Stratégies pour augmenter l'engagement et la visibilité{"\n"}
              - Utilisation des outils d'analyse pour mesurer l'impact
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

          {/* Section "Analyse des Données et Optimisation" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>5. Analyse des Données et Optimisation :</Text>
            <Text style={styles.sectionText}>
              - Introduction à Google Analytics et autres outils d'analyse{"\n"}
              - Interprétation des données pour optimiser les campagnes{"\n"}
              - Techniques d'A/B testing et d'optimisation continue
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

          {/* Section "Projets Pratiques" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>6. Projets Pratiques :</Text>
            <Text style={styles.sectionText}>
              - Création d'une stratégie de marketing digital{"\n"}
              - Développement d'une campagne publicitaire complète{"\n"}
              - Analyse et optimisation des performances
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
            <Text style={styles.sectionTitle}>7. Examen Final :</Text>
            <Text style={styles.sectionText}>
              - Évaluation des compétences acquises{"\n"}
              - Réalisation d'un projet pratique en marketing digital{"\n"}
              - Présentation du projet et certification
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
    borderRadius: 8,
  },
  titleContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.robotoBold,
    color: Color.darkBlue,
    textAlign: "center",
  },
  courseDescription: {
    fontSize: FontSize.size_md,
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
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: FontSize.size_md,
    fontFamily: FontFamily.robotoBold,
    color: Color.darkBlue,
    marginBottom: 8,
  },
  sectionText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.robotoRegular,
    color: Color.darkGray,
    marginBottom: 8,
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

export default DigitalMarketingCoursePage;
