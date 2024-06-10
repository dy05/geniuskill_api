import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from "./SplashScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import DecouvrirScreen from "../screens/DecouvrirScreen";
import RechercheScreen from "../screens/RechercheScreen";
import SauvegarderScreen from "../screens/SauvegaderScreen";
import MesCoursScreen from "../screens/MescoursScreen";
import ProfilScreen from "../screens/ProfilScreen";
import {TailwindProvider} from "tailwind-rn";
import utilities from '../../tailwind.json';
import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
      <Tab.Navigator>
          {/*<Tab.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />*/}
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
      <TailwindProvider utilities={utilities}>
          <NavigationContainer>
              <Stack.Navigator
                initialRouteName="Splash"
                screenOptions={{ headerShown: false }}
                // screenOptions={({ route }) => ({
                //     tabBarIcon: ({ color, size }) => {
                //         let iconName;
                //
                //         if (route.name === 'Decouvrir') {
                //             iconName = 'search';
                //         } else if (route.name === 'Recherche') {
                //             iconName = 'compass';
                //         } else if (route.name === 'Sauvegarder') {
                //             iconName = 'bookmark';
                //         } else if (route.name === 'Mescours') {
                //             iconName = 'list';
                //         } else if (route.name === 'Profil') {
                //             iconName = 'person';
                //         }
                //
                //         // You can return any component that you like here!
                //         return <Ionicons name={iconName} size={size} color={color} />;
                //     },
                // })}
                // tabBarOptions={{
                // activeTintColor: 'blue',
                // inactiveTintColor: 'gray',
                // }}
              >
                  <Stack.Screen name="Splash" component={SplashScreen} />
                  <Stack.Screen name="Main" component={BottomTabNavigator} options={{ headerShown: false }} />
              </Stack.Navigator>
          </NavigationContainer>
      </TailwindProvider>
    );
};

export default MainNavigator;
