import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const RechercherScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Ici vous pouvez implémenter la logique de recherche en fonction de searchQuery
    // Par exemple, vous pouvez utiliser une API pour récupérer les résultats de recherche
    // Dans cette démo, nous n'affichons que des résultats statiques
    const results = [
      { id: 1, title: 'Cours 1', description: 'Description du cours 1', image: require('./../../assets/images/cour1.png') },
      { id: 2, title: 'Cours 2', description: 'Description du cours 2', image: require('./../../assets/images/cour2.png') },
      { id: 3, title: 'Cours 3', description: 'Description du cours 3', image: require('./../../assets/images/cour3.png') },
    ];
    setSearchResults(results);
  };

  const topMatieres = [
    'UX/UI',
    'Design graphique',
    'Figma',
    'Structure de données',
    'Marketing',
    'Cybersécurité',
    'Développement Mobile',
  ];

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
      <FlatList
        data={searchResults}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.resultCard}>
            <Image source={item.image} style={styles.resultImage} />
            <View style={styles.resultTextContainer}>
              <Text style={styles.resultTitle}>{item.title}</Text>
              <Text style={styles.resultDescription}>{item.description}</Text>
            </View>
          </View>
        )}
      />
      <Text style={styles.topMatieresTitle}>Top des matières recherchées</Text>
      <View style={styles.topMatieresContainer}>
        {topMatieres.map((matiere, index) => (
          <TouchableOpacity key={index} style={styles.matiereItem}>
            <Text style={styles.matiereText}>{matiere}</Text>
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
  topMatieresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: '#0288d1', // Couleur bleue pour le titre des matières
  },
  topMatieresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  matiereItem: {
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
  matiereText: {
    color: '#0288d1', // Couleur bleue pour le texte des matières
    fontWeight: 'bold',
  },
});

export default RechercherScreen;
