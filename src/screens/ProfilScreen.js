import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import des icônes Ionicons

const ProfilScreen = ({navigation}) => {

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  const handleMyCourses = () => {
    navigation.navigate('Mes cours');
  };
  const handleRewards = () => {
    navigation.navigate('Profil', {screen:'Rewards'});// la screen pour la page de Rewards
  };
  const handlelangue = () => {
    navigation.navigate('Profil', {screen:'langue'});// la screen pour la page de langue
  };

  // Ajoutez d'autres fonctions de navigation pour les autres boutons

  const handleLogout = () => {
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
        {/* Bouton Editer profil */}
        <TouchableOpacity onPress={handleEditProfile} style={styles.button}>
          <Icon name="person-circle-outline" size={24} color="#1E90FF" style={styles.icon} />
          <Text style={styles.buttonText}>Editer profil</Text>
          <Icon name="chevron-forward-outline" size={24} color="#1E90FF" style={styles.arrowIcon} />
        </TouchableOpacity>

        {/* Bouton Mes cours */}
        <TouchableOpacity onPress={handleMyCourses} style={styles.button}>
          <Icon name="book-outline" size={24} color="#1E90FF" style={styles.icon} />
          <Text style={styles.buttonText}>Mes cours</Text>
          <Icon name="chevron-forward-outline" size={24} color="#1E90FF" style={styles.arrowIcon} />
        </TouchableOpacity>

        {/* Ajoutez d'autres boutons avec des icônes et des flèches */}
        <TouchableOpacity onPress={handleRewards} style={styles.button}>
          <Icon name="medal-outline" size={24} color="#1E90FF" style={styles.icon} />
          <Text style={styles.buttonText}>Rewards</Text>
          <Icon name="chevron-forward-outline" size={24} color="#1E90FF" style={styles.arrowIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Icon name="language-outline" size={24} color="#1E90FF" style={styles.icon} />
          <Text style={styles.buttonText}>Langue de préférence</Text>
          <Icon name="chevron-forward-outline" size={24} color="#1E90FF" style={styles.arrowIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Icon name="notifications-outline" size={24} color="#1E90FF" style={styles.icon} />
          <Text style={styles.buttonText}>Notifications</Text>
          <Icon name="chevron-forward-outline" size={24} color="#1E90FF" style={styles.arrowIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Icon name="card-outline" size={24} color="#1E90FF" style={styles.icon} />
          <Text style={styles.buttonText}>Abonnement</Text>
          <Icon name="chevron-forward-outline" size={24} color="#1E90FF" style={styles.arrowIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.button}>
          <Icon name="help-circle-outline" size={24} color="#1E90FF" style={styles.icon} />
          <Text style={styles.buttonText}>Centre d'aide</Text>
          <Icon name="chevron-forward-outline" size={24} color="#1E90FF" style={styles.arrowIcon} />
        </TouchableOpacity>
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
    alignItems: 'center',
    backgroundColor: '#FBF9EA',
    paddingTop: '8%', // Ajustement de la marge supérieure
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'blue',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 27,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 10,
    flex: 1,
  },
  arrowIcon: {
    marginLeft: 'auto',
  },
  logoutButton: {
    marginTop: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default ProfilScreen;
