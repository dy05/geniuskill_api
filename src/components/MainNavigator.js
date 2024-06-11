import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from "../screens/SplashScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import DecouvrirScreen from "../screens/DecouvrirScreen";
import RechercheScreen from "../screens/RechercheScreen";
import SauvegarderScreen from "../screens/SauvegaderScreen";
import MesCoursScreen from "../screens/MescoursScreen";
import ProfilScreen from "../screens/ProfilScreen";
import LoginScreen from "../screens/Login";
import {createStackNavigator} from "@react-navigation/stack";
// import Ionicons from "react-native-vector-icons/Ionicons";
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import PasswordResetScreen from "../screens/PasswordReset";
import RegisterScreen from "../screens/Register";
import EditProfile from "../screens/EditProfile";
import {Button} from "react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    // iconName = 'home-outline';
                    iconName = 'search';
                } else if (route.name === 'Recherche') {
                    // iconName = 'search-outline';
                    iconName = 'compass';
                } else if (route.name === 'Sauvegarder') {
                    // iconName = 'bookmark-outline';
                    iconName = 'bookmark';
                } else if (route.name === 'Mescours') {
                    // iconName = 'list-outline';
                    iconName = 'list';
                } else if (route.name === 'Profil') {
                    // iconName = 'person-outline';
                    iconName = 'person';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
          })}>
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
            screenOptions={{ headerShown: false }}
          >
              <Stack.Screen name="Splash" component={SplashScreen} />
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
              <Stack.Screen name="PasswordReset" component={PasswordResetScreen}
                            options={{
                                tabBarLabel: 'PasswordReset',
                                tabBarIcon: ({ tintColor }) => (
                                  <MaterialIcons name="account-circle" color={tintColor} size={25} />
                                ),
                            }}
              />
              <Stack.Screen name="Main" component={BottomTabNavigator} />
              <Stack.Screen name="MyCourses" component={MesCoursScreen}
                            options={{
                                headerTitle: 'Mes cours',
                                // headerRight: () => (
                                //   <Button
                                //     onPress={() => navigation.navigate('Main', {screen: 'Profil'})}
                                //     title="Details"
                                //     color="#000"
                                //   />
                                // ),
                                tabBarIcon: ({ tintColor }) => (
                                  <MaterialIcons name="account-circle" color={tintColor} size={25} />
                                ),
                            }}
              />
              <Stack.Screen name="EditProfile" component={EditProfile}
                            options={{
                                tabBarLabel: 'EditProfile',
                                tabBarIcon: ({ tintColor }) => (
                                  <MaterialIcons name="account-circle" color={tintColor} size={25} />
                                ),
                            }}
              />
          </Stack.Navigator>
      </NavigationContainer>
    );
};

export default MainNavigator;
