import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, TextInput} from 'react-native';

const EditProfile = ({navigation}) => {

  const handleSave = () => {
    // Code pour sauvegarder les modifications du profil
  };

  const handleChangePassword = () => {
    // Naviguer vers l'écran de changement de mot de passe
    navigation.navigate('PasswordReset');
  };

  return (
    <View style={styles.container}>
      {/* Photo de profil */}
      <Image
        source={require('../../assets/images/profill.png')}
        style={styles.profileImage}
      />

      {/* Champ Nom */}
      <Text style={styles.label}>Nom</Text>
      <TextInput style={styles.input} placeholder="Entrez votre nom" />

      {/* Champ Email */}
      <Text style={styles.label}>Adresse Email</Text>
      <TextInput style={styles.input} placeholder="Entrez votre adresse email" />

      {/* Bouton Sauvegarder */}
      <TouchableOpacity onPress={handleSave} style={[styles.button, { backgroundColor: 'blue' }]}>
        <Text style={styles.buttonText}>Sauvegarder</Text>
      </TouchableOpacity>

      {/* Bouton Changer de mot de passe */}
      <TouchableOpacity onPress={handleChangePassword} style={[styles.button, styles.roundedButton]}>
        <Text style={styles.buttonText}>Changer de mot de passe</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  roundedButton: {
    borderRadius: 20,
  },
});

export default EditProfile;
