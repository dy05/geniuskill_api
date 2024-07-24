import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Color, FontFamily, FontSize } from "../components/GlobalStyles";

const VRCoursePage = () => {
  const courseProgress = 0.4; // 40% de progression

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.pageDuCours}>
        {/* Image en haut de la page */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.pageDuCoursChild}
            contentFit="cover"
            source={require("../../assets/images/vr-course.png")}
          />
        </View>

        {/* Titre "Introduction à la Réalité Virtuelle" */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Introduction à la Réalité Virtuelle</Text>
        </View>

        {/* Description du cours */}
        <Text style={styles.courseDescription}>
          Le cours "Introduction à la Réalité Virtuelle" vous plonge dans le monde captivant de la réalité virtuelle. Vous apprendrez les fondamentaux de cette technologie immersive, y compris la création de contenu VR, le développement d'applications, et les applications pratiques dans divers domaines. Ce cours vous permettra de développer des compétences pratiques pour concevoir et déployer des expériences VR engageantes.
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
            - Comprendre les principes fondamentaux de la réalité virtuelle et de ses technologies associées.{"\n"}
            - Acquérir des compétences dans la création et le développement de contenus VR.{"\n"}
            - Explorer les différentes plateformes et outils de développement VR.{"\n"}
            - Développer des projets pratiques pour créer des expériences immersives.
          </Text>
        </View>

        {/* Contenu du cours */}
        <View style={styles.sectionsContainer}>
          {/* Section "Introduction à la Réalité Virtuelle" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>1. Introduction à la Réalité Virtuelle :</Text>
            <Text style={styles.sectionText}>
              - Définition et histoire de la réalité virtuelle{"\n"}
              - Matériel et logiciels utilisés en VR{"\n"}
              - Principes de conception pour des expériences immersives
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

          {/* Section "Développement d'Applications VR" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>2. Développement d'Applications VR :</Text>
            <Text style={styles.sectionText}>
              - Introduction aux environnements de développement VR{"\n"}
              - Utilisation des outils de création de contenu VR (Unity, Unreal Engine){"\n"}
              - Programmation et intégration d'interactions VR
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

          {/* Section "Création de Contenus Immersifs" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>3. Création de Contenus Immersifs :</Text>
            <Text style={styles.sectionText}>
              - Techniques de modélisation 3D pour VR{"\n"}
              - Conception de scènes et d'environnements immersifs{"\n"}
              - Utilisation de la réalité virtuelle pour la narration interactive
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

          {/* Section "Applications et Cas d'Utilisation" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>4. Applications et Cas d'Utilisation :</Text>
            <Text style={styles.sectionText}>
              - Applications de la VR dans les jeux vidéo et la simulation{"\n"}
              - VR pour la formation et l'éducation{"\n"}
              - Utilisation de la VR dans la médecine et la réhabilitation
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

          {/* Section "Projets Pratiques" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>5. Projets Pratiques :</Text>
            <Text style={styles.sectionText}>
              - Création d'une expérience VR interactive{"\n"}
              - Développement d'une application VR pour une utilisation spécifique{"\n"}
              - Analyse des projets et feedback
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
              - Évaluation des compétences acquises{"\n"}
              - Réalisation d'un projet pratique en VR{"\n"}
              - Présentation du projet et certification
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

export default VRCoursePage;
