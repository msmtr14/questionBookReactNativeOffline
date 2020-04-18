import {createStackNavigator, createAppContainer} from 'react-navigation';
import * as SCREENS from './screens';

const Navigator = createStackNavigator(
  {
    SignupScreen: SCREENS.SignupScreen,
  },
  {
    initialRouteName: 'SignupScreen',
    headerMode: 'none',
  },
);

export const AppContainer = createAppContainer(Navigator);
