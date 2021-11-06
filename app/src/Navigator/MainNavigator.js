import React from 'react';
import {Text} from 'react-native';

import PersonalInfoScreen from '../screens/PersonalInfoScreen';
import MortgageScreen from '../screens/MortgageScreen';
import IncomeInformationScreen from '../screens/IncomeInformationScreen';
// import LoanScreen from '../screens/LoanScreen';
// import MarketValue from '../screens/MarketValue';
import SliderScreen from '../screens/SliderScreen';
// import IntroductionScreen from '../screens/IntroductionScreen';
// import AgreementScreen from '../screens/AgreementScreen';
import RequestScreen from '../screens/RequestScreen';
// import BankBorrowerScreen from '../screens/BankBorrowerScreen';
// import ConfirmationScreen from '../screens/ConfirmationScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
// import InfoSlideScreen from '../screens/InfoSlideScreen';
import RequestAcceptScreen from '../screens/RequestAcceptScreen';
import WelcomeToApp from '../screens/WelcomeToApp';
import LoginScreen from '../screens/LoginScreen';
import CoBorrowerScreen from '../screens/CoBorrowerScreen';
import UnsecuredLoanScreen from '../screens/UnsecuredLoanScreen';
import Co_Borrower from '../screens/Co_Borrower';
import WorkinformationScreen from '../screens/WorkinformationScreen';
import ShareResultScreen from '../screens/ShareResultScreen';
import SettingScreen from '../screens/SettingScreen';
import ContactInfoScreen from '../screens/ContactInfoScreen';
import SubscribeScreen from '../screens/SubscribeScreen';
import SplashScreen from '../screens/SplashScreen';
import InfoAboutName from '../screens/InfoAboutName';
// import ResultScreen from '../screens/ResultScreen';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainNavigator = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SplashScreen" options={{headerShown: false}}>
        {screenProps => <SplashScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="SliderScreen" options={{headerShown: false}}>
        {screenProps => <SliderScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="WelcomeToApp" options={{headerShown: false}}>
        {screenProps => <WelcomeToApp {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="LoginScreen" options={{headerShown: false}}>
        {screenProps => <LoginScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="CoBorrowerScreen" options={{headerShown: false}}>
        {screenProps => <CoBorrowerScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="RequestScreen" options={{headerShown: false}}>
        {screenProps => <RequestScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="MortgageScreen" options={{headerShown: false}}>
        {screenProps => <MortgageScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="UnsecuredLoanScreen" options={{headerShown: false}}>
        {screenProps => <UnsecuredLoanScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen
        name="IncomeInformationScreen"
        options={{headerShown: false}}>
        {screenProps => <IncomeInformationScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="PersonalInfoScreen" options={{headerShown: false}}>
        {screenProps => <PersonalInfoScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="WorkinformationScreen" options={{headerShown: false}}>
        {screenProps => <WorkinformationScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="InfoAboutName" options={{headerShown: false}}>
        {screenProps => <InfoAboutName {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="SubscribeScreen" options={{headerShown: false}}>
        {screenProps => <SubscribeScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="ShareResultScreen" options={{headerShown: false}}>
        {screenProps => <ShareResultScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="RequestAcceptScreen" options={{headerShown: false}}>
        {screenProps => <RequestAcceptScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="Co_Borrower" options={{headerShown: false}}>
        {screenProps => <Co_Borrower {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="SettingScreen" options={{headerShown: false}}>
        {screenProps => <SettingScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="ContactInfoScreen" options={{headerShown: false}}>
        {screenProps => <ContactInfoScreen {...screenProps} />}
      </Stack.Screen>

      {/* <Stack.Screen name="ResultScreen" options={{headerShown: false}}>
        {screenProps => <ResultScreen {...screenProps} />}
      </Stack.Screen>
  
      <Stack.Screen name="ShareScreen" options={{headerShown: false}}>
        {screenProps => <ShareScreen {...screenProps} />}
      </Stack.Screen>
   
   
      <Stack.Screen name="InfoSlideScreen" options={{headerShown: false}}>
        {screenProps => <InfoSlideScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="ThankyouScreen" options={{headerShown: false}}>
        {screenProps => <ThankyouScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="ConfirmationScreen" options={{headerShown: false}}>
        {screenProps => <ConfirmationScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="BankBorrowerScreen" options={{headerShown: false}}>
        {screenProps => <BankBorrowerScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="AgreementScreen" options={{headerShown: false}}>
        {screenProps => <AgreementScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="IntroductionScreen" options={{headerShown: false}}>
        {screenProps => <IntroductionScreen {...screenProps} />}
      </Stack.Screen>

      <Stack.Screen name="MarketValue" options={{headerShown: false}}>
        {screenProps => <MarketValue {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="LoanScreen" options={{headerShown: false}}>
        {screenProps => <LoanScreen {...screenProps} />}
      </Stack.Screen> */}
    </Stack.Navigator>
  );
};

export default MainNavigator;
