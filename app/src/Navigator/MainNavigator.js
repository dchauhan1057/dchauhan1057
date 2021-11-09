import React from 'react';
import {Image} from 'react-native';

import {Images} from '../../res/ImageConstant/Images';
import {responsiveWidth} from '../utils/Size';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import SliderScreen from '../screens/SliderScreen';
import WelcomeToApp from '../screens/WelcomeToApp';
import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';

import PersonalInfoScreen from '../screens/PersonalInfoScreen';
import SettingScreen from '../screens/SettingScreen';
import ContactInfoScreen from '../screens/ContactInfoScreen';
import CoBorrowerScreen from '../screens/CoBorrowerScreen';
import RequestScreen from '../screens/RequestScreen';
import MortgageScreen from '../screens/MortgageScreen';
import UnsecuredLoanScreen from '../screens/UnsecuredLoanScreen';
import IncomeInformationScreen from '../screens/IncomeInformationScreen';
import WorkinformationScreen from '../screens/WorkinformationScreen';
import InfoAboutName from '../screens/InfoAboutName';
import SubscribeScreen from '../screens/SubscribeScreen';
import ShareResultScreen from '../screens/ShareResultScreen';
import NegotiableScreen from '../screens/NegotiableScreen';
import GoodScoreScreen from '../screens/GoodScoreScreen';
import BadScoreScreen from '../screens/BadScoreScreen';
import PaymentScreen from '../screens/PaymentScreen';
import RequestAcceptScreen from '../screens/RequestAcceptScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ServiceScreen from '../screens/ServiceScreen';

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      options={{headerShown: false}}>
      <Stack.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}
function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      options={{headerShown: false}}>
      <Stack.Screen
        options={{headerShown: false}}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
}
function ServiceStack() {
  return (
    <Stack.Navigator
      initialRouteName="ServiceScreen"
      options={{headerShown: false}}>
      <Stack.Screen
        options={{headerShown: false}}
        name="ServiceScreen"
        component={ServiceScreen}
      />
    </Stack.Navigator>
  );
}
function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      tabBarOptions={{
        activeTintColor: '#C4D600',
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={Images.Close_Icon}
              style={{
                height: responsiveWidth(5),
                width: responsiveWidth(5),
                tintColor: focused ? '#C4D600' : '#5C6770',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, focused, size}) => (
            <Image
              source={Images.Close_Icon}
              style={{
                height: responsiveWidth(5),
                width: responsiveWidth(5),
                tintColor: focused ? '#C4D600' : '#5C6770',
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ServiceStack"
        component={ServiceStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Setting',
          tabBarIcon: ({color, focused, size}) => (
            <Image
              source={Images.Close_Icon}
              style={{
                height: responsiveWidth(5),
                width: responsiveWidth(5),
                tintColor: focused ? '#C4D600' : '#5C6770',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function MainNavigator() {
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
      <Stack.Screen name="NegotiableScreen" options={{headerShown: false}}>
        {screenProps => <NegotiableScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="GoodScoreScreen" options={{headerShown: false}}>
        {screenProps => <GoodScoreScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="BadScoreScreen" options={{headerShown: false}}>
        {screenProps => <BadScoreScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="SubscribeScreen" options={{headerShown: false}}>
        {screenProps => <SubscribeScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="PaymentScreen" options={{headerShown: false}}>
        {screenProps => <PaymentScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="ShareResultScreen" options={{headerShown: false}}>
        {screenProps => <ShareResultScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="RequestAcceptScreen" options={{headerShown: false}}>
        {screenProps => <RequestAcceptScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="SettingScreen" options={{headerShown: false}}>
        {screenProps => <SettingScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="ContactInfoScreen" options={{headerShown: false}}>
        {screenProps => <ContactInfoScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="ServiceScreen" options={{headerShown: false}}>
        {screenProps => <ServiceScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="ProfileScreen" options={{headerShown: false}}>
        {screenProps => <ProfileScreen {...screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="HomeScreen" options={{headerShown: false}}>
        {screenProps => <HomeScreen {...screenProps} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default MainNavigator;
