import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {useTailwind} from "tailwind-rn";

const SplashScreen = ({ navigation }) => {
    const tailwind = useTailwind();
    const [loadingProgress, setLoadingProgress] = useState(0);

    useEffect(() => {
        if (loadingProgress >= 100) {
            setTimeout(() => {
                navigation.navigate('Login');
            }, 2000); // 2 seconds
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
        }, 200);

        return () => clearInterval(interval);
    }, [loadingProgress]);

    return (
      <View style={[tailwind('flex h-full w-full justify-center items-center'), { backgroundColor: '#1B5091' }]}>
          <View style={tailwind('flex w-3/5 justify-center items-center')}>
              <Text style={tailwind('text-4xl text-white mb-8')}>
                   

              </Text>
              <Image source={require('../../assets/images/logomds.png')} style={styles.logo} />
              <View style={tailwind('w-11/12 mt-8 h-[30vh]')}>
                  <View style={tailwind('h-4 bg-gray-300 rounded-full overflow-hidden')}>
                      <View style={[tailwind('h-full bg-white'), { width: `${loadingProgress}%` }]} />
                  </View>
                  <Text style={tailwind('text-center text-white mt-2')}>{loadingProgress}%</Text>
              </View>
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
