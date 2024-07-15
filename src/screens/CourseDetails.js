import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Color, FontFamily, FontSize } from "../components/GlobalStyles";

const CoursePage = () => {
  const courseProgress = 0.7; // 70% de progression

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.pageDuCours}>
        {/* Image en haut de la page */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.pageDuCoursChild}
            contentFit="cover"
            source={require("../../assets/images/rectangle.png")}
          />
        </View>

        {/* Titre "Anglais" */}
        <View style={styles.titleContainer}>
          <Text style={styles.anglais}>Anglais</Text>
        </View>

        {/* Texte principal */}
        <Text style={styles.amliorezVosComptences}>
          Améliorez vos compétences en anglais avec notre cours interactif et
          complet, conçu pour les apprenants de tous niveaux. Ce cours vous
          guidera à travers les bases et les subtilités de la langue anglaise.
        </Text>

        {/* Par Tiffany King */}
        <Text style={styles.parTiffanyKingContainer}>
          <Text style={styles.par}>Par </Text>
          <Text style={styles.tiffanyKing}>Tiffany King</Text>
        </Text>

        {/* 5 cours - 22 heures de cours total */}
        <Text style={styles.cours22}>
          5 cours - 22 heures de cours total
        </Text>

        {/* Container pour les sections de cours */}
        <View style={styles.sectionsContainer}>
          {/* Section "Grammaire et vocabulaire" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>1. Grammaire et vocabulaire :</Text>
            <Text style={styles.sectionText}>
              Maîtrisez les règles de grammaire essentielles et enrichissez votre vocabulaire pour mieux vous exprimer.
            </Text>
            <View style={styles.sectionFooter}>
              <Text style={styles.sectionHours}>04 : 40 hrs</Text>
              <TouchableOpacity style={styles.playButton}>
                <Icon name="play-circle-outline" size={30} color="#1E90FF" />
              </TouchableOpacity>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: `${courseProgress * 100}%` }]} />
            </View>
          </View>

          {/* Section "Compréhension écrite" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>2. Compréhension écrite :</Text>
            <Text style={styles.sectionText}>
              Développez vos compétences en lecture en explorant divers textes,
              articles et histoires.
            </Text>
            <View style={styles.sectionFooter}>
              <Text style={styles.sectionHours}>04 : 40 hrs</Text>
              <TouchableOpacity style={styles.playButton}>
                <Icon name="play-circle-outline" size={30} color="#1E90FF" />
              </TouchableOpacity>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: `${courseProgress * 100}%` }]} />
            </View>
          </View>

          {/* Section "Expression orale" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>3. Expression orale :</Text>
            <Text style={styles.sectionText}>
              Améliorez votre prononciation et votre fluidité en participant à des
              exercices de conversation et de discours.
            </Text>
            <View style={styles.sectionFooter}>
              <Text style={styles.sectionHours}>04 : 40 hrs</Text>
              <TouchableOpacity style={styles.playButton}>
                <Icon name="play-circle-outline" size={30} color="#1E90FF" />
              </TouchableOpacity>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: `${courseProgress * 100}%` }]} />
            </View>
          </View>

          {/* Section "Compréhension orale" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>4. Compréhension orale :</Text>
            <Text style={styles.sectionText}>
              Entraînez-vous à comprendre l'anglais parlé grâce à des
              enregistrements audio et des vidéos.
            </Text>
            <View style={styles.sectionFooter}>
              <Text style={styles.sectionHours}>04 : 40 hrs</Text>
              <TouchableOpacity style={styles.playButton}>
                <Icon name="play-circle-outline" size={30} color="#1E90FF" />
              </TouchableOpacity>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: `${courseProgress * 100}%` }]} />
            </View>
          </View>

          {/* Section "Expression écrite" */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>5. Expression écrite :</Text>
            <Text style={styles.sectionText}>
              Apprenez à rédiger des essais, des lettres et des emails avec clarté
              et précision.
            </Text>
            <View style={styles.sectionFooter}>
              <Text style={styles.sectionHours}>04 : 40 hrs</Text>
              <TouchableOpacity style={styles.playButton}>
                <Icon name="play-circle-outline" size={30} color="#1E90FF" />
              </TouchableOpacity>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={[styles.progressBar, { width: `${courseProgress * 100}%` }]} />
            </View>

            {/* Quizz - 25 questions */}
            <View style={styles.quizzContainer}>
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="help-circle-outline" size={30} color="#1E90FF" />
              </TouchableOpacity>
              <Text style={styles.quizzText}>Quizz - 25 questions</Text>
              <TouchableOpacity style={styles.iconButton}>
                <Icon name="play-circle-outline" size={30} color="#1E90FF" />
              </TouchableOpacity>
            </View>
             {/* Section avec l'image */}
          <View style={styles.section}>
            {/* Ajouter l'image ici */}
            <Image
              style={styles.imageContainer} // Utiliser le style approprié pour l'image
              contentFit="cover" // Cette propriété peut nécessiter une vérification selon votre configuration
              source={require("../../assets/images/rectanglee.png")} // Chemin vers l'image
            />
          </View>
            <Text style={[styles.tiffanyKingEst, styles.tiffanyKingEstTypo]}>
              Tiffany King est une enseignante d'anglais passionnée et expérimentée,
              dédiée à aider ses élèves à maîtriser la langue anglaise. Avec plus de
              huit années d'expérience dans l'enseignement de l'anglais à divers
              niveaux, elle a développé des méthodes pédagogiques innovantes et
              engageantes pour faciliter l'apprentissage.
            </Text>
    

          </View>
          <View style={[styles.carloDespusWrapper, styles.carloPosition]}>
        <Text
          style={[styles.carloDespus, styles.carloDespusTypo]}
        >{`Carlo Despuès `}</Text>
      </View>
      <Text style={[styles.loremIpsumDolor, styles.loremTypo]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac
        augue leo. Vestibulum ante ipsum primis in faucibus orci
      </Text>
      <Text style={[styles.loremIpsumDolor1, styles.loremTypo]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac
        augue leo. Vestibulum ante ipsum primis in faucibus orci
      </Text>
     
     
     
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
    flex: 1,
    backgroundColor: Color.white,
    alignItems: 'center',
    paddingTop: 20,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  pageDuCoursChild: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    marginBottom: 10,
  },
  anglais: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    color: Color.black,
    textAlign: 'center',
  },
  amliorezVosComptences: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    color: Color.black,
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  parTiffanyKingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  par: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    color: Color.black,
  },
  tiffanyKing: {
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_sm,
    color: Color.black,
  },
  cours22: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    color: Color.black,
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionsContainer: {
    width: '90%',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: Color.lightGray,
  },
  sectionTitle: {
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_base,
    color: Color.black,
    marginBottom: 5,
  },
  sectionText: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    color: Color.black,
    marginTop: 5,
  },
  sectionFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  sectionHours: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    color: Color.black,
  },
  playButton: {
    marginLeft: 10,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#f0f0f0',
    marginTop: 8,
    borderRadius: 5,
    overflow: 'hidden',
  },
  grammaireEtVocabulaireContainer: {
    padding: 10,
    marginTop: 20,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#1E90FF',
  }, 
  tiffanyTypo: {
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_md,
    color: Color.black,
    textAlign: 'center',
    marginTop: 10,
  },
  quizzContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  iconButton: {
    marginHorizontal: 10,
  },
  quizzText: {
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_md,
    color: Color.black,
  },
  tiffanyKingEst: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    color: Color.black,
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  tiffanyKingEstTypo: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    color: Color.black,
    textAlign: 'center',


  },
  carloDespusTypo: {
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.size_md,
    color: Color.black,
  },
  loremTypo: {
    fontFamily: FontFamily.robotoRegular,
    fontSize: FontSize.size_sm,
    color: Color.black,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },

});

export default CoursePage;
