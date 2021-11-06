import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import MainNavigator from '../Navigator/MainNavigator';

export default createAppContainer(
  createSwitchNavigator(
    {
      MainNavigator: MainNavigator,
    },
    {
      initialRouteName: 'MainNavigator',
    },
  ),
);
