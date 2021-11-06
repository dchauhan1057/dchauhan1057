import React from 'react';
import {Text, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './app/src/Navigator/AppNavigator';
console.disableYellowBox = true;
function App() {
  return (
    <NavigationContainer>
      <AppNavigator></AppNavigator>
    </NavigationContainer>
  );
}
export default App;
