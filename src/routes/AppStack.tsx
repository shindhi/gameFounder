import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import GamesCategory from '../pages/GamesCategory';
import PrivateChat from '../pages/PrivateChat';

import AppTabs from './AppTabs';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#191A1E',
      },
    }}
    // initialRouteName="GamesCategory"
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="GamesCategory" component={GamesCategory} />

    <Auth.Screen name="Profile" component={AppTabs} />
    <Auth.Screen name="PrivateChat" component={PrivateChat} />
  </Auth.Navigator>
);

export default AuthRoutes;
