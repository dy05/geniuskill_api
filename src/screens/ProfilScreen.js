import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

const ProfilScreen = ({navigation}) => {

  const handleEditProfile = () => {
    // Naviguer vers l'écran d'édition de profil
    navigation.navigate('EditProfile');
  };

  const handleMyCourses = () => {
    // Naviguer vers l'écran de mes cours
    navigation.navigate('MyCourses');
  };

  // Ajoutez d'autres fonctions de navigation pour les autres boutons

  const handleLogout = () => {
    // Mettre ici le code pour se déconnecter
    console.log("Déconnexion...");
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Photo de profil */}
      <Image
        source={require('../../assets/images/profill.png')}
        style={styles.profileImage}
      />

      {/* Nom d'utilisateur */}
      <Text style={styles.username}>Tiana</Text>

      {/* Conteneur de boutons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleEditProfile} style={styles.button}>
          <Text>Editer profil</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMyCourses} style={styles.button}>
          <Text>Mes cours</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMyCourses} style={styles.button}>
          <Text>Rewards</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMyCourses} style={styles.button}>
          <Text>Langue de préference</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMyCourses} style={styles.button}>
          <Text>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMyCourses} style={styles.button}>
          <Text>Abonnement</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMyCourses} style={[styles.button, { marginBottom: 0 }]}>
          <Text>Centre d'aide</Text>
        </TouchableOpacity>
        {/* Ajoutez les autres boutons avec les fonctions de navigation appropriées */}
      </View>

      {/* Bouton de déconnexion */}
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={{ color: 'red' }}>Se déconnecter</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'scroll',
    alignItems: 'center',
    marginTop: '8%',
    height: '80%',
    justifyContent: 'center',
    backgroundColor: '#FBF9EA', // Ajout de la couleur de fond
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 78,
    marginBottom: 50,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    padding: 60,
    width: '80%', // Modifier la largeur du conteneur
    marginBottom:27,
  },
  button: {
    marginBottom: 21,
  },
  logoutButton: {
    marginTop: 11,
  },
});

export default ProfilScreen;
