import React, {useEffect, useState} from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {getCourses} from "../services/courseService";
import {getTopSubjects} from "../services/appService";

const RechercherScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [topSubjects, setTopSubjects] = useState([]);

  useEffect(() => {
    if (!loading) {
      getTopSubjects()
          .then((response) => {
            setTopSubjects(response.data?.subjects);
          });
    } else {
      setLoading(false);
    }
  }, [loading]);

  const handleSearch = () => {
    setFormLoading(true);
    getCourses(searchQuery)
        .then((response) => {
          setSearchResults(response.data?.courses);
        })
        .catch((e) => {
          console.log(e.message);
          setSearchResults([]);
        })
        .finally(() => {
          setFormLoading(false);
        });
  };

  const navigateToDetails = (id) => {
    navigation.navigate('CourseDetails', { id: id });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="ios-search" size={30} color="#fff" />
        <Text style={styles.headerText}>Rechercher des Cours</Text>
      </View>
      <View style={styles.searchContainer}>
        <Icon name="ios-search" size={20} color="#00796b" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher un cours..."
          placeholderTextColor="#00796b"
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
          onSubmitEditing={handleSearch}
        />
      </View>
      {!formLoading ? (
          <FlatList
              data={searchResults}
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
      ) : (
          <Text>Loading...</Text>
      )}

      <Text style={styles.topSubjectsTitle}>Top des matières recherchées</Text>
      <View style={styles.topSubjectsContainer}>
        {topSubjects.map((subject) => (
          <TouchableOpacity key={subject.id} style={styles.subjectItem}>
            <Text style={styles.subjectText}>{subject.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 24,
    backgroundColor: '#e3f2fd', // Fond bleu clair
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: '#0288d1', // Fond bleu foncé
    paddingVertical: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
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

export default RechercherScreen;
