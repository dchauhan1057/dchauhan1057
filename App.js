import React from 'react';
import {Text, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './app/src/Navigator/MainNavigator';
console.disableYellowBox = true;
function App() {
  return (
    <NavigationContainer>
      <MainNavigator></MainNavigator>
    </NavigationContainer>
  );
}
export default App;
