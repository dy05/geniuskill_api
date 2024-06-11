import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

// Importez vos images pour les différentes découvertes
import cour1 from './../../assets/images/cour1.png';
import cour2 from './../../assets/images/cour2.png';
import cour3 from './../../assets/images/cour3.png';

const DecouvrirScreen = () => {
  // Fonction pour naviguer vers les détails de la découverte
  const navigateToDetails = (id) => {
    // Ajoutez votre logique de navigation ici
    console.log("Navigating to details of discovery with ID:", id);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Accueil</Text>
      <View style={styles.discoveryContainer}>
        <TouchableOpacity onPress={() => navigateToDetails(1)}>
          <Image source={cour1} style={styles.discoveryImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToDetails(2)}>
          <Image source={cour2} style={styles.discoveryImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToDetails(3)}>
          <Image source={cour3} style={styles.discoveryImage} />
        </TouchableOpacity>
      </View>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  discoveryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  discoveryImage: {
    width: '48%',
    height: 200,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default DecouvrirScreen;
