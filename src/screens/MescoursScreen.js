import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';

// Importez vos images pour les différents cours
import cour1 from './../../assets/images/cour1.png';
import cour2 from './../../assets/images/cour2.png';
import cour3 from './../../assets/images/cour3.png';
import {getCourses} from "../services/courseService";

const MescoursScreen = ({navigation}) => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

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
    navigation.navigate('Courses', {screen: 'CourseDetails', id: id});
  };

  return (
    <View style={styles.container}>
      <View style={styles.courseContainer}>
        <Image source={cour1} style={styles.cour1} />
        <Text style={styles.courseTitle}>AWS</Text>
        <View style={styles.progressBar}>
          {/* Barre d'évolution du cours 1 */}
        </View>
        <Text style={styles.date}>Date de lecture : 01/05/2024</Text>
      </View>

      <View style={styles.courseContainer}>
        <Image source={cour2} style={styles.cour2} />
        <Text style={styles.courseTitle}>Figma</Text>
        <View style={styles.progressBar}>
          {/* Barre d'évolution du cours 2 */}
        </View>
        <Text style={styles.date}>Date de lecture : 05/05/2024</Text>
      </View>
      <View style={styles.courseContainer}>
        <Image source={cour3} style={styles.cour3} />
        <Text style={styles.courseTitle}>Anglais</Text>
        <View style={styles.progressBar}>
          {/* Barre d'évolution du cours 2 */}
        </View>
        <Text style={styles.date}>Date de lecture : 05/05/2024</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBF9EA',
  },
  courseContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '80%', // Largeur augmentée
  },
  courseImage: {
    width: '100%', // Image prend toute la largeur du conteneur
    height: 200, // Hauteur de l'image
    marginBottom: 10,
    resizeMode: 'cover', // Redimensionnement de l'image
    borderRadius: 10,
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  progressBar: {
    width: '100%',
    height: 20,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
  },
  date: {
    marginTop: 10,
  },
});

export default MescoursScreen;
