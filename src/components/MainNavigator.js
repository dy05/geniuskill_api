import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from "./SplashScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import DecouvrirScreen from "../screens/DecouvrirScreen";
import RechercheScreen from "../screens/RechercheScreen";
import SauvegarderScreen from "../screens/SauvegaderScreen";
import MesCoursScreen from "../screens/MescoursScreen";
import ProfilScreen from "../screens/ProfilScreen";
import LoginScreen from "../screens/Login";
import {createStackNavigator} from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import PasswordResetScreen from "../screens/PasswordReset";
import RegisterScreen from "../screens/Register";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
      <Tab.Navigator>
          <Tab.Screen name="Home" component={DecouvrirScreen} />
          <Tab.Screen name="Recherche" component={RechercheScreen} />
          <Tab.Screen name="Sauvegarder" component={SauvegarderScreen} />
          <Tab.Screen name="Mescours" component={MesCoursScreen} />
          <Tab.Screen name="Profil" component={ProfilScreen} />
      </Tab.Navigator>
    );
};

const MainNavigator = () => {
    return (
      <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Splash"
            // screenOptions={{ headerShown: false }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'home-outline';
                    } else if (route.name === 'Recherche') {
                        iconName = 'search-outline';
                    } else if (route.name === 'Sauvegarder') {
                        iconName = 'bookmark-outline';
                    } else if (route.name === 'Mescours') {
                        iconName = 'list-outline';
                    } else if (route.name === 'Profil') {
                        iconName = 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColor: 'gray',
            }}
          >
              <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
              <Stack.Screen name="PasswordReset" component={PasswordResetScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Main" component={BottomTabNavigator} options={{ headerShown: false }} />
          </Stack.Navigator>
      </NavigationContainer>
    );
};

export default MainNavigator;
