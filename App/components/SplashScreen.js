import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {useTailwind} from "tailwind-rn";

const SplashScreen = ({ navigation }) => {
    const tailwind = useTailwind();
    const [loadingProgress, setLoadingProgress] = useState(0);

    useEffect(() => {
        if (loadingProgress >= 100) {
            setTimeout(() => {
                navigation.replace('Home');
            }, 3000); // 3 seconds
        }
    }, [navigation, loadingProgress]);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }

                return prev + 10;
            });
        }, 500);

        return () => clearInterval(interval);
    }, [loadingProgress]);

    return (
      <View style={tailwind('flex-1 h-full justify-center items-center bg-yellow-50')}>
          <Text style={tailwind('text-4xl mb-8')}>Bienvenue</Text>
          <Image source={require('../../assets/images/logomds.png')} style={styles.logo} />
          <View style={tailwind('w-11/12 mt-8')}>
              <View style={tailwind('h-4 bg-gray-300 rounded-full overflow-hidden')}>
                  <View style={[tailwind('h-full bg-blue-600'), { width: `${loadingProgress}%` }]} />
              </View>
              <Text style={tailwind('text-center mt-2')}>{loadingProgress}%</Text>
          </View>
      </View>
    );
};

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
    },
});

export default SplashScreen;
