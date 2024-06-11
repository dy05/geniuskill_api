import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useTailwind } from 'tailwind-rn';
import logomds from './../../assets/images/logomds.png';

export default function Logopage(props) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const tailwind = useTailwind();

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 20;
      });
    }, 500);

    if (loadingProgress >= 100) {
      setTimeout(() => {
        if (props.setLoadingSplash) {
          props.setLoadingSplash(false);
        }
        // navigation.navigate('Home'); // Change this to your homepage route
      }, 500);
    }

    return () => clearInterval(interval);
  }, [loadingProgress]);

  return (
    <View style={[styles.container]}>
      <Text style={[tailwind('text-4xl mb-8 text-white'), styles.welcomeText]}>Bienvenue</Text>
      <Image source={logomds} style={styles.logo} />
      <View style={styles.loadingBarContainer}>
        <View style={styles.loadingBar}>
          <View style={[styles.loadingBarProgress, { width: `${loadingProgress}%` }]} />
        </View>
        <Text style={styles.loadingPercentage}>{loadingProgress}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00008B', // Changement de la couleur de fond
  },
  logo: {
    width: 100,
    height: 100,
  },
  loadingBarContainer: {
    width: '80%',
    backgroundColor: '#ccc',
    borderRadius: 5,
    marginTop: 20,
    position: 'relative',
  },
  loadingBar: {
    height: 20,
    backgroundColor: '#120e5a',
    borderRadius: 5,
    overflow: 'hidden',
  },
  loadingBarProgress: {
    height: '100%',
    backgroundColor: '#1E90FF',
    position: 'absolute',
    left: 0,
    top: 0,
  },
  loadingPercentage: {
    position: 'absolute',
    top: 2,
    left: '50%',
    transform: [{ translateX: -50 }],
    color: 'white',
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 36, // Taille de police plus grande
    fontWeight: 'bold', // Texte en gras
    color: '#FFFFFF', // Couleur blanche
    textShadowColor: '#000000', // Ombre de texte noire
    textShadowOffset: { width: 2, height: 2 }, // Décalage de l'ombre de texte
    textShadowRadius: 5, // Rayon de l'ombre de texte
  }
});
