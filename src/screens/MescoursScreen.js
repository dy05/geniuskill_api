import React, { useEffect, useState } from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, FlatList, Button} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Importez les icônes AntDesign depuis expo/vector-icons
import { getAuthCourses } from "../services/courseService";

const MescoursScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (!loading) {
      getAuthCourses().then((response) => {
        console.log('response.data');
        console.log(response.data); // Mettez à jour l'état avec les données de réponse
        setCourses(response.data?.courses ?? []);
      });
    } else {
      setLoading(false);
    }
  }, [loading]);

  // Fonction pour naviguer vers les détails du cours
  const navigateToDetails = (id) => {
    navigation.navigate('Courses', { screen: 'CourseDetails', id: id });
  };

  // Fonction pour naviguer vers les détails du cours
  const navigateToCourses = () => {
    navigation.navigate('Main', { screen: 'Recherche' });
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
      {courses.length ? (
          <View style={styles.courseContainer}>
              <FlatList
                  data={courses}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({ item }) => (
                      <TouchableOpacity id={item.id} onPress={() => navigateToDetails(item.id)}>
                        <View style={styles.resultCard}>
                          <Image source={item.image} style={styles.resultImage} />
                          <View style={styles.resultTextContainer}>
                            <Text style={styles.resultTitle}>{item.label}</Text>
                            <Text style={styles.resultDescription}>{item.description}</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                  )}
              />
          </View>
      ) : (
          <View style={styles.courseContainerEmpty}>
            <Text>Aucun cours actuellement</Text>
          </View>
      )}


      <Button style={styles.button} title={"Voir tous les cours"} onPress={() => navigateToCourses()} />
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
  courseContainerEmpty: {
    borderRadius: 10,
    marginBottom: 60,
    width: '100%', // Ajustez la largeur pour remplir l'écran
    backgroundColor: 'white', // Ajoutez une couleur de fond pour délimiter les cours
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    padding: 20,
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#bbdefb', // Fond bleu clair pour la barre de recherche
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  resultCard: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  resultImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
  },
  resultTextContainer: {
    flex: 1,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0288d1', // Couleur bleue pour le titre
  },
  button: {
    width: 'fit-content',
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0288d1', // Couleur bleue pour le titre
  },
  resultDescription: {
    fontSize: 14,
    color: '#757575',
  },
  topSubjectsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: '#0288d1', // Couleur bleue pour le titre des matières
  },
  topSubjectsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  subjectItem: {
    backgroundColor: '#bbdefb', // Fond bleu clair pour les matières
    borderRadius: 10,
    padding: 10,
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  subjectText: {
    color: '#0288d1', // Couleur bleue pour le texte des matières
    fontWeight: 'bold',
  },
});

export default MescoursScreen;
