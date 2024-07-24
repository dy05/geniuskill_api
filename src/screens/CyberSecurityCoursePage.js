import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Video from 'react-native-video';
import { Color, FontFamily, FontSize } from "../components/GlobalStyles";

const CyberCoursePage = () => {
  const courseProgress = 0.7; // 70% de progression

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.pageDuCours}>
        {/* Image en haut de la page */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.pageDuCoursChild}
            contentFit="cover"
            source={require("../../assets/images/cybersecurity.png")}
          />
        </View>

        {/* Titre "Introduction à la Cyber Sécurité" */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Introduction à la Cyber Sécurité</Text>
        </View>

        {/* Description du cours */}
        <Text style={styles.courseDescription}>
          Le cours "Introduction à la Cyber Sécurité" est conçu pour fournir aux participants une compréhension approfondie des principes et pratiques de la sécurité informatique. Le cours couvre un large éventail de sujets allant des concepts fondamentaux de la sécurité aux techniques avancées de protection des systèmes et des données contre les cybermenaces. Les étudiants apprendront à identifier les vulnérabilités, à mettre en place des mesures de protection, et à réagir efficacement aux incidents de sécurité.
        </Text>

        {/* Détails du cours */}
        <Text style={styles.courseDetails}>
          Durée : 12 semaines{"\n"}
          Niveau : Débutant à Intermédiaire
        </Text>

        {/* Objectifs du cours */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objectifs du cours :</Text>
          <Text style={styles.sectionText}>
            - Comprendre les concepts fondamentaux de la cybersécurité.{"\n"}
            - Identifier les principales menaces et vulnérabilités informatiques.{"\n"}
            - Apprendre les méthodes de protection des systèmes et des données.{"\n"}
            - Acquérir des compétences en gestion des incidents de sécurité.{"\n"}
            - Connaître les cadres et les normes de sécurité informatique.
          </Text>
        </View>

        {/* Contenu du cours */}
        <View style={styles.sectionsContainer}>
          {/* Section "Introduction à la Cyber Sécurité" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>1. Introduction à la Cyber Sécurité :</Text>
            <Text style={styles.sectionText}>
              - Définition et importance de la cybersécurité{"\n"}
              - Principes de base de la sécurité informatique{"\n"}
              - Évolution des cybermenaces
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

          {/* Section "Menaces et Vulnérabilités" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>2. Menaces et Vulnérabilités :</Text>
            <Text style={styles.sectionText}>
              - Types de menaces (malwares, ransomwares, phishing, etc.){"\n"}
              - Vulnérabilités des systèmes d'information{"\n"}
              - Techniques d'attaque courantes (DDoS, SQL injection, etc.)
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

          {/* Section "Cryptographie et Sécurité des Communications" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>3. Cryptographie et Sécurité des Communications :</Text>
            <Text style={styles.sectionText}>
              - Concepts de base de la cryptographie{"\n"}
              - Algorithmes de chiffrement symétrique et asymétrique{"\n"}
              - Protocoles de sécurité des communications (SSL/TLS, VPN)
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

          {/* Section "Sécurité des Réseaux" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>4. Sécurité des Réseaux :</Text>
            <Text style={styles.sectionText}>
              - Architecture de sécurité des réseaux{"\n"}
              - Pare-feu, systèmes de détection et de prévention des intrusions (IDS/IPS){"\n"}
              - Sécurité des réseaux sans fil
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

          {/* Section "Sécurité des Applications et des Systèmes" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>5. Sécurité des Applications et des Systèmes :</Text>
            <Text style={styles.sectionText}>
              - Principes de sécurité des systèmes d'exploitation{"\n"}
              - Sécurité des applications web{"\n"}
              - Pratiques de codage sécurisé
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

          {/* Section "Gestion des Incidents de Sécurité" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>6. Gestion des Incidents de Sécurité :</Text>
            <Text style={styles.sectionText}>
              - Identification et analyse des incidents de sécurité{"\n"}
              - Réponse aux incidents et récupération{"\n"}
              - Établissement de plans de continuité des activités
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

          {/* Section "Conformité et Réglementation" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>7. Conformité et Réglementation :</Text>
            <Text style={styles.sectionText}>
              - Cadres et normes de sécurité (ISO 27001, NIST, GDPR){"\n"}
              - Politiques de sécurité et meilleures pratiques{"\n"}
              - Audits de sécurité et évaluation de la conformité
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

          {/* Section "Sécurité dans le Cloud" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>8. Sécurité dans le Cloud :</Text>
            <Text style={styles.sectionText}>
              - Risques et défis de la sécurité dans le cloud{"\n"}
              - Stratégies de protection des données dans le cloud{"\n"}
              - Sécurité des services cloud (IaaS, PaaS, SaaS)
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
              - Certification en cybersécurité
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

export default CyberCoursePage;
