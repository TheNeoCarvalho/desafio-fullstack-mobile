import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Routes from './src/router';

const App = () => {
  SplashScreen.hide();
  console.disableYellowBox = true;
  return (
    <>
      <Routes />
    </>
  );
};

export default App;
