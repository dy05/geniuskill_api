import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Importez les icônes AntDesign depuis expo/vector-icons

// Importez vos images pour les différents cours
import cour1 from './../../assets/images/Group 10408.png';
import cour2 from './../../assets/images/Group 10409.png';
import cour3 from './../../assets/images/Group 10410.png';
import cour4 from './../../assets/images/Group 10414.png'; // Ajoutez une quatrième image
import { getCourses } from "../services/courseService";

const MescoursScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (!loading) {
      getCourses().then((response) => {
        console.log('response.data');
        console.log(response.data);
        setCourses(response.data); // Mettez à jour l'état avec les données de réponse
      });
    } else {
      setLoading(false);
    }
  }, [loading]);

  // Fonction pour naviguer vers les détails du cours
  const navigateToDetails = (id) => {
    navigation.navigate('Courses', { screen: 'CourseDetails', id: id });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* En-tête avec titre et flèche de retour */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="blue" />
        </TouchableOpacity>
        <Text style={[styles.headerText, { color: 'blue' }]}>Mes cours</Text>
      </View>

      {/* Contenu des cours */}
      <View style={styles.courseContainer}>
        <Image source={cour1} style={styles.courseImage} />
      </View>

      <View style={styles.courseContainer}>
        <Image source={cour2} style={styles.courseImage} />
      </View>

      <View style={styles.courseContainer}>
        <Image source={cour3} style={styles.courseImage} />
      </View>

      <View style={styles.courseContainer}>
        <Image source={cour4} style={styles.courseImage} /> {/* Ajoutez la quatrième image */}
      </View>

      {/* Ajoutez d'autres cours avec les données appropriées */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FBF9EA',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  courseContainer: {
    borderRadius: 10,
    marginBottom: 20,
    width: '100%', // Ajustez la largeur pour remplir l'écran
    backgroundColor: 'white', // Ajoutez une couleur de fond pour délimiter les cours
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  courseImage: {
    width: '100%',
    height: 150, // Ajustez la hauteur des images
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default MescoursScreen;
