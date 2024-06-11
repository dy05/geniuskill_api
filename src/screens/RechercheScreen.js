import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const RechercherScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Ici vous pouvez implémenter la logique de recherche en fonction de searchQuery
    // Par exemple, vous pouvez utiliser une API pour récupérer les résultats de recherche
    // Dans cette démo, nous n'affichons que des résultats statiques
    const results = [
      { id: 1, title: 'Cours 1' },
      { id: 2, title: 'Cours 2' },
      { id: 3, title: 'Cours 3' },
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
      <View style={styles.searchContainer}>
        <Icon name="ios-search" size={20} color="#000" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher un cours..."
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
          onSubmitEditing={handleSearch}
        />
      </View>
      <FlatList
        data={searchResults}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
      <Text style={styles.topMatieresTitle}>Top des matières recherchées</Text>
      <View style={styles.topMatieresContainer}>
        {topMatieres.map((matiere, index) => (
          <View key={index} style={styles.matiereItem}>
            <Text style={styles.matiereText}>{matiere}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 24, // Ajouter un peu de padding en haut pour décaler les éléments vers le haut
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  resultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  topMatieresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  
  },
  topMatieresContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  matiereItem: {
    backgroundColor: '#e0f7fa',
    borderRadius: 10,
    padding: 10,
    margin: 5,
  },
  matiereText: {
    color: '#00796b',
  },
});

export default RechercherScreen;
