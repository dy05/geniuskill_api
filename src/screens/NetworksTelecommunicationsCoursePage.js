import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Color, FontFamily, FontSize } from "../components/GlobalStyles";

const NetworksTelecommunicationsCoursePage = () => {
  const courseProgress = 0.5; // 50% de progression

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.pageDuCours}>
        {/* Image en haut de la page */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.pageDuCoursChild}
            contentFit="cover"
            source={require("../../assets/images/networks-telecommunications-course.png")}
          />
        </View>

        {/* Titre "Introduction aux Réseaux et Télécommunications" */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Introduction aux Réseaux et Télécommunications</Text>
        </View>

        {/* Description du cours */}
        <Text style={styles.courseDescription}>
          Le cours "Introduction aux Réseaux et Télécommunications" fournit une compréhension approfondie des principes fondamentaux des réseaux informatiques et des systèmes de télécommunication. Vous apprendrez les concepts de base des réseaux, la configuration et la gestion des équipements réseau, ainsi que les protocoles et technologies utilisés pour la communication à distance.
        </Text>

        {/* Détails du cours */}
        <Text style={styles.courseDetails}>
          Durée : 14 semaines{"\n"}
          Niveau : Débutant à Avancé
        </Text>

        {/* Objectifs du cours */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objectifs du cours :</Text>
          <Text style={styles.sectionText}>
            - Comprendre les concepts de base des réseaux et télécommunications.{"\n"}
            - Configurer et gérer les équipements réseau tels que les routeurs et les commutateurs.{"\n"}
            - Apprendre les protocoles de communication et les normes de télécommunication.{"\n"}
            - Diagnostiquer et résoudre les problèmes réseau.{"\n"}
            - Mettre en œuvre des solutions de sécurité pour les réseaux.
          </Text>
        </View>

        {/* Contenu du cours */}
        <View style={styles.sectionsContainer}>
          {/* Section "Introduction aux Réseaux" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>1. Introduction aux Réseaux :</Text>
            <Text style={styles.sectionText}>
              - Concepts de base des réseaux informatiques{"\n"}
              - Types de réseaux (LAN, WAN, MAN){"\n"}
              - Modèle OSI et TCP/IP
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

          {/* Section "Équipements Réseau" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>2. Équipements Réseau :</Text>
            <Text style={styles.sectionText}>
              - Routeurs, commutateurs et points d'accès{"\n"}
              - Configuration des équipements réseau{"\n"}
              - Surveillance et gestion des équipements
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

          {/* Section "Protocoles de Communication" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>3. Protocoles de Communication :</Text>
            <Text style={styles.sectionText}>
              - Protocoles TCP/IP et UDP{"\n"}
              - Protocoles de routage (BGP, OSPF){"\n"}
              - Sécurité et gestion des protocoles
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

          {/* Section "Gestion des Réseaux" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>4. Gestion des Réseaux :</Text>
            <Text style={styles.sectionText}>
              - Surveillance et optimisation des performances réseau{"\n"}
              - Dépannage et résolution des problèmes{"\n"}
              - Outils de gestion réseau
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

          {/* Section "Télécommunications" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>5. Télécommunications :</Text>
            <Text style={styles.sectionText}>
              - Concepts de base des systèmes de télécommunication{"\n"}
              - Technologies de communication à distance (5G, fibre optique){"\n"}
              - Mise en œuvre et gestion des systèmes de télécommunication
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

          {/* Section "Sécurité des Réseaux" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>6. Sécurité des Réseaux :</Text>
            <Text style={styles.sectionText}>
              - Principes de base de la sécurité des réseaux{"\n"}
              - Techniques de prévention et de détection des intrusions{"\n"}
              - Mise en œuvre de politiques de sécurité
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

          {/* Section "Projets Pratiques" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>7. Projets Pratiques :</Text>
            <Text style={styles.sectionText}>
              - Conception et mise en place d'un réseau local{"\n"}
              - Configuration de dispositifs réseau{"\n"}
              - Analyse des performances et sécurité d'un réseau
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
              - Évaluation des compétences acquises{"\n"}
              - Réalisation d'un projet final en réseaux et télécommunications{"\n"}
              - Présentation et certification
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
  },
  pageDuCours: {
    flex: 1,
    padding: 16,
    backgroundColor: Color.white,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  pageDuCoursChild: {
    width: '100%',
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
    textAlign: 'center',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: 8,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#1E90FF',
  },
  sectionsContainer: {
    marginTop: 16,
  },
});

export default NetworksTelecommunicationsCoursePage;
