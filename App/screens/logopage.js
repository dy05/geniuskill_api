import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';
const logomds = require('../../assets/images/logomds.png');
// import { useNavigation } from '@react-navigation/native';

export default function Logopage() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  // const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 2000);

    if (loadingProgress >= 100) {
      setTimeout(() => {
        navigation.navigate('Home'); // Change this to your homepage route
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [loadingProgress]);

  return (
    <View style={tailwind('flex-1 justify-center items-center bg-yellow-50')}>
      <Text style={tailwind('text-4xl mb-8')}>Bienvenue</Text>
      <Image source={logomds} style={styles.logo} />
      <View style={tailwind('w-11/12 mt-8')}>
        <View style={tailwind('h-4 bg-gray-300 rounded-full overflow-hidden')}>
          <View style={[tailwind('h-full bg-blue-600'), { width: `${loadingProgress}%` }]} />
        </View>
        <Text style={tailwind('text-center mt-2')}>{loadingProgress}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
});
