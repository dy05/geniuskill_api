import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from '../screens/DecouvrirScreen';
// import DetailsScreen from '../screens/RechercheScreen';
import { View, Text, Button } from 'react-native';
import SplashScreen from "./SplashScreen";

const HomeScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>HomeHomeHomeHomeHomeHome Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
          />
      </View>
    );
};

const DetailsScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Details Screen</Text>
          <Button
            title="Go back to Home"
            onPress={() => navigation.navigate('Home')}
          />
      </View>
    );
};

const Stack = createStackNavigator();

const MainNavigator = () => {
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Splash" component={SplashScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    );
};

export default MainNavigator;
