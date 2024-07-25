import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
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
import CourseDetails from "../screens/CourseDetails";
//import CoursePage from "../screens/CoursePage";
import BackButton from "./BackButton";
import RewardsScreen from '../screens/Rewards';
import langueScreen from '../screens/langue';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={DecouvrirScreen}
                          options={{headerShown: false}} />
            <Stack.Screen
                name="CourseDetails"
                component={CourseDetails}
                options={() => ({
                    title: 'Course Details',
                    headerLeft: () => (
                        <BackButton />
                    ),
                })}
            />
        </Stack.Navigator>
    );
}

const CoursesStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Courses" component={MesCoursScreen}
                          options={{headerShown: false}} />
            <Stack.Screen
                name="CourseItemDetails"
                component={CourseDetails}
                options={() => ({
                    title: 'Course Details',
                    headerLeft: () => (
                        <BackButton />
                    ),
                })}
            />
        </Stack.Navigator>
    );
}

const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProfilScreen" component={ProfilScreen}
                          options={{headerShown: false}} />
            <Stack.Screen
                name="EditProfile"
                component={EditProfile}
                options={() => ({
                    title: 'Editer Profil',
                    headerLeft: () => (
                        <BackButton />
                    ),
                    
                })}
            />
             <Stack.Screen
                name="Rewards"
                component={RewardsScreen}
                options={() => ({
                    title: 'Rewards',
                    headerLeft: () => (
                        <BackButton />
                    ),
                    
                })}
            />
               <Stack.Screen
                name="Langue de préférence"
                component={langueScreen}
                options={() => ({
                    title: 'langue',
                    headerLeft: () => (
                        <BackButton />
                    ),
                    
                })}
            />
        </Stack.Navigator>
    );
}

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarIcon: ({color, size}) => {
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
                    } else if (route.name === 'Mes cours') {
                        // iconName = 'list-outline';
                        iconName = 'list';
                    } else if (route.name === 'Profil') {
                        // iconName = 'person-outline';
                        iconName = 'person';
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>;
                },
                activeTintColor: 'blue',
                inactiveTintColor: 'gray',
            })}>
            <Tab.Screen name="Home" component={HomeStack}/>
            <Tab.Screen name="Recherche" component={RechercheScreen}/>
            <Tab.Screen name="Sauvegarder" component={SauvegarderScreen}/>
            <Tab.Screen name="Mes cours" component={CoursesStack}/>
            <Tab.Screen name="Profil" component={ProfileStack}/>
        </Tab.Navigator>
    );
};

const MainNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Main"
                // initialRouteName="Splash"
                screenOptions={{headerShown: false}}
            >
                <Stack.Screen name="Splash" component={SplashScreen}/>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Register" component={RegisterScreen}/>
                <Stack.Screen name="PasswordReset" component={PasswordResetScreen}
                              options={{
                                  tabBarLabel: 'PasswordReset',
                                  tabBarIcon: ({tintColor}) => (
                                      <MaterialIcons name="account-circle" color={tintColor} size={25}/>
                                  ),
                              }}
                />
                <Stack.Screen name="Main" component={BottomTabNavigator}/>
                {/*<Stack.Screen name="MyCourses" component={MesCoursScreen}*/}
                {/*              options={{*/}
                {/*                  headerTitle: 'Mes cours',*/}
                {/*                  // headerRight: () => (*/}
                {/*                  //   <Button*/}
                {/*                  //     onPress={() => navigation.navigate('Main', {screen: 'Profil'})}*/}
                {/*                  //     title="Details"*/}
                {/*                  //     color="#000"*/}
                {/*                  //   />*/}
                {/*                  // ),*/}
                {/*                  tabBarIcon: ({tintColor}) => (*/}
                {/*                      <MaterialIcons name="account-circle" color={tintColor} size={25}/>*/}
                {/*                  ),*/}
                {/*              }}*/}
                {/*/>*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigator;

