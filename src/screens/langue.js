import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const LangueScreen = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('fr');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    // Ici, vous pouvez également sauvegarder la langue sélectionnée dans le stockage local ou dans un contexte global
    console.log(`Langue sélectionnée : ${language}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* En-tête avec titre et flèche de retour */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="blue" />
        </TouchableOpacity>
        <Text style={[styles.headerText, { color: 'blue' }]}>Langue de préférence</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Choisissez votre langue de préférence</Text>
        <TouchableOpacity
          onPress={() => handleLanguageChange('fr')}
          style={[
            styles.button,
            selectedLanguage === 'fr' && styles.selectedButton,
          ]}
        >
          <Text style={styles.buttonText}>Français</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleLanguageChange('en')}
          style={[
            styles.button,
            selectedLanguage === 'en' && styles.selectedButton,
          ]}
        >
          <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>
        {/* Ajoutez d'autres options de langue ici */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FBF9EA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    width: '80%',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#d3d3d3',
  },
  buttonText: {
    fontSize: 16,
  },
});

export default LangueScreen;
