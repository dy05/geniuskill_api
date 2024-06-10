import React from 'react';
// import React, {useEffect} from 'react';
// import Logopage from './App/screens/logopage';
import MainNavigator from "./App/components/MainNavigation";
// import SplashScreen from 'react-native-splash-screen';

export default function App() {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  // return(
  //    <Logopage/>
  // );

  return <MainNavigator />;
}
