import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Langue = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('fr');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    // Ici, vous pouvez également sauvegarder la langue sélectionnée dans le stockage local ou dans un contexte global
    console.log(`Langue sélectionnée : ${language}`);
  };

  return (
    <View style={styles.container}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FBF9EA',
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

export default Langue;
