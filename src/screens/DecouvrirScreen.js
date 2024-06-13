import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Assurez-vous d'avoir installé react-native-vector-icons

// Importez vos images pour les différentes découvertes
import cour1 from './../../assets/images/cour1.png';
import cour2 from './../../assets/images/cour2.png';
import cour3 from './../../assets/images/cour3.png';
import cour4 from './../../assets/images/cour3.png';
import cour5 from './../../assets/images/cour3.png';
import cour6 from './../../assets/images/cour3.png';
import cour7 from './../../assets/images/cour3.png';
import cour8 from './../../assets/images/cour3.png';
import cour9 from './../../assets/images/cour3.png';
import {getCourses} from "../services/courseService";

const DecouvrirScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const userName = "Ariel"; // Remplacez par le nom de l'utilisateur connecté

  useEffect(() => {
    if (!loading) {
      getCourses().then((response) => {
        console.log('response.data');
        console.log(response.data);
        setCourses(courses);
      });
    } else {
      setLoading(false);
    }
  }, [loading]);

  // Fonction pour naviguer vers les détails de la découverte
  const navigateToDetails = (id) => {
    navigation.navigate('CourseDetails', {id: id});
  };

  return (
      <ScrollView contentContainerStyle={styles.container}>
      {loading ? (
          <View>
            <Text>Loading...</Text>
          </View>
      ) : (
          <>
            <View style={styles.header}>
              <Text style={styles.welcomeText}>Bienvenue, {userName}</Text>
              <Icon name="ios-bag" size={30} color="#000" style={styles.icon} />
            </View>
            <Text style={styles.subTitle}>Votre programme</Text>
            <View style={styles.imageFrame}>
              <Image source={{ uri: 'https://via.placeholder.com/328x170' }} style={styles.courseImage} />
            </View>
            <Text style={styles.courseTitle}>Cours du jour :</Text>
            <Text style={styles.courseDescription}>Améliorez vos compétences avec notre cours interactif et complet, conçu pour les apprenants de tous niveaux. Ce cours vous guidera à travers les bases et les subtilités de la langue anglaise</Text>
            <Text style={styles.suggestedCoursesTitle}>Cours suggérés :</Text>
            <View style={styles.suggestedCoursesContainer}>
              <View style={styles.courseContainer}>
                <TouchableOpacity onPress={() => navigateToDetails(1)}>
                  <Image source={cour1} style={styles.suggestedCourseImage} />
                </TouchableOpacity>
                <Text style={styles.courseLabel}>Mathématique</Text>
              </View>
              <View style={styles.courseContainer}>
                <TouchableOpacity onPress={() => navigateToDetails(2)}>
                  <Image source={cour2} style={styles.suggestedCourseImage} />
                </TouchableOpacity>
                <Text style={styles.courseLabel}>Littérature</Text>
              </View>
              <View style={styles.courseContainer}>
                <TouchableOpacity onPress={() => navigateToDetails(3)}>
                  <Image source={cour3} style={styles.suggestedCourseImage} />
                </TouchableOpacity>
                <Text style={styles.courseLabel}>UX Design</Text>
              </View>
            </View>

            <Text style={styles.additionalCoursesTitle}>Tous les autres cours :</Text>
            <View style={styles.additionalCoursesContainer}>
              <View style={styles.courseContainer}>
                <TouchableOpacity onPress={() => navigateToDetails(4)}>
                  <Image source={cour4} style={styles.additionalCourseImage} />
                </TouchableOpacity>
                <Text style={styles.courseLabel}>Histoire de l'art</Text>
              </View>
              <View style={styles.courseContainer}>
                <TouchableOpacity onPress={() => navigateToDetails(5)}>
                  <Image source={cour5} style={styles.additionalCourseImage} />
                </TouchableOpacity>
                <Text style={styles.courseLabel}>Design graphique</Text>
              </View>
              <View style={styles.courseContainer}>
                <TouchableOpacity onPress={() => navigateToDetails(6)}>
                  <Image source={cour6} style={styles.additionalCourseImage} />
                </TouchableOpacity>
                <Text style={styles.courseLabel}>Musique</Text>
              </View>
            </View>

            <View style={styles.additionalCoursesContainer}>
              <View style={styles.courseContainer}>
                <TouchableOpacity onPress={() => navigateToDetails(7)}>
                  <Image source={cour7} style={styles.additionalCourseImage} />
                </TouchableOpacity>
                <Text style={styles.courseLabel}>Illustration numérique</Text>
              </View>
              <View style={styles.courseContainer}>
                <TouchableOpacity onPress={() => navigateToDetails(8)}>
                  <Image source={cour8} style={styles.additionalCourseImage} />
                </TouchableOpacity>
                <Text style={styles.courseLabel}>Programmation</Text>
              </View>
              <View style={styles.courseContainer}>
                <TouchableOpacity onPress={() => navigateToDetails(9)}>
                  <Image source={cour9} style={styles.additionalCourseImage} />
                </TouchableOpacity>
                <Text style={styles.courseLabel}>Philosophie</Text>
              </View>
            </View>
          </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 10,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageFrame: {
    width: 328,
    height: 170,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  courseImage: {
    width: 328,
    height: 170,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  courseDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  suggestedCoursesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  suggestedCoursesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  courseContainer: {
    alignItems: 'center',
    width: '30%',
  },
  suggestedCourseImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  additionalCoursesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  additionalCoursesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  additionalCourseImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  courseLabel: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default DecouvrirScreen;
