import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Importez les icônes AntDesign depuis expo/vector-icons

// Importez vos images pour les récompenses
import reward1 from './../../assets/images/rewards1.png';
import reward2 from './../../assets/images/rewards1.png';
import reward3 from './../../assets/images/rewards1.png';
import reward4 from './../../assets/images/rewards1.png';
import reward5 from './../../assets/images/rewards1.png';
import reward6 from './../../assets/images/rewards1.png';

const RewardsScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* En-tête avec titre et flèche de retour */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="blue" />
        </TouchableOpacity>
        <Text style={[styles.headerText, { color: 'blue' }]}>Rewards</Text>
      </View>

      {/* Conteneur avec trois images successives */}
      <View style={styles.rewardsContainer}>
        <Image source={reward1} style={styles.rewardImage} />
        <Image source={reward1} style={styles.rewardImage} />
        <Image source={reward1} style={styles.rewardImage} />
      </View>

      {/* Trois images cliquables en bas */}
      <View style={styles.rewardsContainerClickable}>
        <TouchableOpacity onPress={() => alert('Reward 4 clicked!')}>
          <Image source={reward4} style={styles.rewardImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Reward 5 clicked!')}>
          <Image source={reward5} style={styles.rewardImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Reward 6 clicked!')}>
          <Image source={reward6} style={styles.rewardImage} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FBF9EA',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  rewardsContainer: {
    borderRadius: 10,
    marginBottom: 20,
    width: '100%', // Ajustez la largeur pour remplir l'écran
    backgroundColor: 'white', // Ajoutez une couleur de fond pour délimiter les images
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    alignItems: 'center', // Centrer les images
  },
  rewardsContainerClickable: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Espacer les images
    marginBottom: 20,
    width: '100%',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 10,
    borderRadius: 10,
  },
  rewardImage: {
    width: 100,
    height: 100, // Ajustez la taille des images
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default RewardsScreen;
