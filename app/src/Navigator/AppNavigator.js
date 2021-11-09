import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import MainNavigator from '../Navigator/MainNavigator';
import TabNavigator from '../Navigator/TabNavigator';

export default createAppContainer(
  createSwitchNavigator(
    {
      MainNavigator: MainNavigator
    },
    {
      initialRouteName: 'MainNavigator',
    },
  ),
);
