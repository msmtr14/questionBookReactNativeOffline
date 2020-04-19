/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import * as SCREENS from './screens/index';
import Icon from 'react-native-vector-icons/Entypo';

Icon.loadFont();
export const HomeScreenBottomTabs = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: SCREENS.HomeScreen,
      navigationOptions: {
        tabBarIcon: (props: {tintColor: string}) => (
          <Icon name={'home'} color={props.tintColor} size={32} />
        ),
      },
    },
    ProfileScreen: {
      screen: SCREENS.ProfileScreen,
      navigationOptions: {
        tabBarIcon: (props: {tintColor: string}) => (
          <Icon name={'user'} color={props.tintColor} size={32} />
        ),
      },
    },
    AskQuestionScreen: {
      screen: SCREENS.AskQuestionScreen,
      navigationOptions: {
        tabBarIcon: (props: {tintColor: string}) => (
          <Icon name={'pencil'} color={props.tintColor} size={32} />
        ),
      },
    },
  },
  {
    tabBarOptions: {showLabel: false},
  },
);

const Navigator = createStackNavigator(
  {
    SignupScreen: SCREENS.SignupScreen,
    HomeScreen: HomeScreenBottomTabs,
    AnsTheQuesScreen: SCREENS.AnsTheQuesScreen,
  },
  {
    initialRouteName: 'SignupScreen',
    headerMode: 'none',
  },
);

export const AppContainer = createAppContainer(Navigator);
