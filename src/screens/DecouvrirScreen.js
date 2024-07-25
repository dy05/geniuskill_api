import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Assurez-vous d'avoir installé react-native-vector-icons
import exampleImage from './../../assets/images/book.png'; // Importez votre nouvelle image
import { getCourses } from "../services/courseService";

const DecouvrirScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [otherCourses, setOtherCourses] = useState([]);
  const userName = "Ariel"; // Remplacez par le nom de l'utilisateur connecté

  useEffect(() => {
    if (!loading) {
      getCourses().then((response) => {
        setCourses(response.data.courses ?? []); // Mettez à jour l'état avec les données de réponse
        setOtherCourses(response.data.otherCourses ?? []); // Mettez à jour l'état avec les données de réponse
      });
    } else {
      setLoading(false);
    }
  }, [loading]);

  // Fonction pour naviguer vers les détails de la découverte
  const navigateToDetails = (id) => {
    navigation.navigate('CourseDetails', { id: id });
  };

  // Fonction pour ouvrir la photo de profil
  const openProfilePicture = () => {
    // Ajoutez ici la logique pour ouvrir ou modifier la photo de profil
    console.log('Profile picture clicked');
  };

  const otherGroupedCourses = () => {
    return otherCourses.reduce((acc, course, index) => {
      if (index % 3 === 0) {
        acc.push([]);
      }
      acc[acc.length - 1].push(course);
      return acc;
    }, []);
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
            <View style={styles.welcomeTextContainer}>
              <Text style={styles.welcomeText}>Bienvenue, {userName}</Text>
            </View>
            <TouchableOpacity onPress={openProfilePicture} style={styles.profilePictureContainer}>
              <Icon name="person-circle" size={40} color="#000" />
            </TouchableOpacity>
          </View>
          <Text style={styles.subTitle}>Votre programme</Text>
          
          {/* Image en pleine largeur */}
          <View style={styles.imageContainer}>
            <Image source={exampleImage} style={styles.fullWidthImage} />
          </View>
          
          <Text style={styles.courseTitle}>Cours du jour :</Text>
          <Text style={styles.courseDescription}>Améliorez vos compétences avec notre cours interactif et complet, conçu pour les apprenants de tous niveaux. Ce cours vous guidera à travers les bases et les subtilités de la langue anglaise</Text>
          <Text style={styles.suggestedCoursesTitle}>Cours suggérés :</Text>
          <View style={styles.suggestedCoursesContainer}>
            {courses.map((course) => (
                <View key={course.id} style={styles.courseContainer}>
                  <TouchableOpacity id={course.id} onPress={() => navigateToDetails(course.id)}>
                    <Image source={course.image} style={styles.suggestedCourseImage} />
                  </TouchableOpacity>
                  <Text style={styles.courseLabel}>{course.label}</Text>
                </View>
            ))}
          </View>

          <Text style={styles.additionalCoursesTitle}>Tous les autres cours :</Text>
          {otherGroupedCourses().map((group, index) => (
              <View key={'group' + index} style={styles.additionalCoursesContainer}>
                {group.map((course) => (
                    <View key={course.id} style={styles.courseContainer}>
                      <TouchableOpacity id={course.id} onPress={() => navigateToDetails(course.id)}>
                        <Image source={course.image} style={styles.suggestedCourseImage} />
                      </TouchableOpacity>
                      <Text style={styles.courseLabel}>{course.label}</Text>
                    </View>
                ))}
              </View>
          ))}
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
    justifyContent: 'space-between', // Aligne les éléments avec de l'espace entre eux
    marginBottom: 20,
  },
  profilePictureContainer: {
    marginLeft: 10,
  },
  welcomeTextContainer: {
    flex: 1,
    alignItems: 'flex-start', // Assurez-vous que le texte est aligné à gauche
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageContainer: {
    width: '100%',
    height: 170,
    marginBottom: 10,
  },
  fullWidthImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
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
