import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Color, FontFamily, FontSize } from "../components/GlobalStyles";

const BlockchainCoursePage = () => {
  const courseProgress = 0.5; // 50% de progression

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.pageDuCours}>
        {/* Image en haut de la page */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.pageDuCoursChild}
            contentFit="cover"
            source={require("../../assets/images/blockchain.png")}
          />
        </View>

        {/* Titre "Introduction à la Blockchain" */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Introduction à la Blockchain</Text>
        </View>

        {/* Description du cours */}
        <Text style={styles.courseDescription}>
          Le cours "Introduction à la Blockchain" explore les principes fondamentaux de la technologie blockchain, y compris les concepts de cryptographie, les mécanismes de consensus, et les applications décentralisées. Les étudiants apprendront à développer des smart contracts, à comprendre les différentes plateformes de blockchain, et à analyser les cas d'utilisation dans divers secteurs.
        </Text>

        {/* Détails du cours */}
        <Text style={styles.courseDetails}>
          Durée : 12 semaines{"\n"}
          Niveau : Intermédiaire
        </Text>

        {/* Objectifs du cours */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objectifs du cours :</Text>
          <Text style={styles.sectionText}>
            - Comprendre les principes de base de la blockchain et des cryptomonnaies.{"\n"}
            - Apprendre les mécanismes de consensus et la cryptographie utilisée dans la blockchain.{"\n"}
            - Développer et déployer des smart contracts sur une plateforme blockchain.{"\n"}
            - Explorer les applications de la blockchain dans divers secteurs tels que la finance, la supply chain, et la santé.
          </Text>
        </View>

        {/* Contenu du cours */}
        <View style={styles.sectionsContainer}>
          {/* Section "Introduction à la Blockchain" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>1. Introduction à la Blockchain :</Text>
            <Text style={styles.sectionText}>
              - Définition et histoire de la blockchain{"\n"}
              - Structure des blocs et fonctionnement des chaînes{"\n"}
              - Concepts de cryptographie et de décentralisation
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

          {/* Section "Mécanismes de Consensus" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>2. Mécanismes de Consensus :</Text>
            <Text style={styles.sectionText}>
              - Preuve de travail (PoW) et preuve d'enjeu (PoS){"\n"}
              - Algorithmes de consensus pour les réseaux blockchain{"\n"}
              - Comparaison des mécanismes de consensus
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

          {/* Section "Smart Contracts" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>3. Smart Contracts :</Text>
            <Text style={styles.sectionText}>
              - Introduction aux smart contracts{"\n"}
              - Développement et déploiement de smart contracts sur Ethereum{"\n"}
              - Cas d'utilisation et sécurité des smart contracts
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

          {/* Section "Applications de la Blockchain" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>4. Applications de la Blockchain :</Text>
            <Text style={styles.sectionText}>
              - Applications dans la finance (DeFi, crypto-monnaies){"\n"}
              - Gestion de la chaîne d'approvisionnement{"\n"}
              - Blockchain dans la santé et l'identité numérique
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

          {/* Section "Projets Pratiques en Blockchain" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>5. Projets Pratiques en Blockchain :</Text>
            <Text style={styles.sectionText}>
              - Création d'une application décentralisée (dApp){"\n"}
              - Développement d'un smart contract pour un cas d'utilisation spécifique{"\n"}
              - Analyse des performances et déploiement en production
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
              - Réalisation d'un projet pratique de blockchain{"\n"}
              - Certification en Blockchain
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

export default BlockchainCoursePage;
