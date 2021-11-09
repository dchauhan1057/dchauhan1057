import React from 'react';

import ProfileStack from './TabNavigator/ProfileStack';
import DashboardStack from './TabNavigator/DashboardStack';
import HomeStack from './TabNavigator/HomeStack';
import LoginScreen from '../screens/LoginScreen';

import {Image} from 'react-native';
import {Images} from '../../res/ImageConstant/Images';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator = ({}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeStack"
        component={LoginScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Image source={Images.Happy_Icon} style={{height: 20, width: 20}} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Image source={Images.Happy_Icon} style={{height: 20, width: 20}} />
          ),
        }}
      />
      <Tab.Screen
        name="DashboardStack"
        component={DashboardStack}
        options={{
          tabBarLabel: 'Dashborad',
          tabBarIcon: ({color, size}) => (
            <Image source={Images.Happy_Icon} style={{height: 20, width: 20}} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
