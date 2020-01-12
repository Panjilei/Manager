import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginForm from './LoginForm';
import MainMenu from './MainMenu';

const stack = createStackNavigator(
    {
        Login: {
            screen: LoginForm
        },
        MainMenu: {
            screen: ({ navigation }) => <MainMenu screenProps={{ rootNavigation: navigation }} />
        }
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none'
    }
);

export default createAppContainer(stack)