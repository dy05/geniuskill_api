import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import DecouvrirScreen from './App/screens/DecouvrirScreen';
import ProfilScreen from './App/screens/ProfilScreen';
import RechercheScreen from './App/screens/RechercheScreen';
import SauvegarderScreen from './App/screens/SauvegaderScreen';
import MesCoursScreen from './App/screens/MescoursScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Decouvrir') {
            iconName = 'search';
          } else if (route.name === 'Recherche') {
            iconName = 'compass';
          } else if (route.name === 'Sauvegarder') {
            iconName = 'bookmark';
          } else if (route.name === 'Mescours') {
            iconName = 'list';
          } else if (route.name === 'Profil') {
            iconName = 'person';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
     // tabBarOptions={{
       // activeTintColor: 'blue',
       // inactiveTintColor: 'gray',
     // }}
    >
      <Tab.Screen name="Decouvrir" component={DecouvrirScreen} />
      <Tab.Screen name="Recherche" component={RechercheScreen} />
      <Tab.Screen name="Sauvegarder" component={SauvegarderScreen} />
      <Tab.Screen name="Mescours" component={MesCoursScreen} />
      <Tab.Screen name="Profil" component={ProfilScreen} />
    </Tab.Navigator>
  );
}

export default function Home() {
  return (
    <NavigationContainer style={styles.container}>
      <MyTabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#ffffff',
  },
});
