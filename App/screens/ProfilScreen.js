import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Si vous utilisez React Navigation

const ProfilScreen = () => {
  const navigation = useNavigation();

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
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* Photo de profil */}
      <Image
        source={require('../../assets/images/profill.png')}
        style={{ width: 150, height: 150, borderRadius: 78, marginBottom: 50 }}
      />

      {/* Nom d'utilisateur */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Ariel</Text>

      {/* Boutons */}
      <TouchableOpacity onPress={handleEditProfile} style={{ marginBottom: 10 }}>
        <Text>Editer profil</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMyCourses} style={{ marginBottom: 10 }}>
        <Text>Mes cours</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMyCourses} style={{ marginBottom: 10 }}>
        <Text>Rewards</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMyCourses} style={{ marginBottom: 10 }}>
        <Text>Langue de préference</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMyCourses} style={{ marginBottom: 10 }}>
        <Text>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMyCourses} style={{ marginBottom: 10 }}>
        <Text>Abonnement</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleMyCourses} style={{ marginBottom: 18 }}>
        <Text>Centre d'aide</Text>
      </TouchableOpacity>
      {/* Ajoutez les autres boutons avec les fonctions de navigation appropriées */}

      {/* Bouton de déconnexion */}
      <TouchableOpacity onPress={handleLogout} style={{ marginTop: 20 }}>
        <Text style={{ color: 'red' }}>Se déconnecter</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilScreen;
