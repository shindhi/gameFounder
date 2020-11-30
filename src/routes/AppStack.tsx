import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Friends from '../pages/Friends';
import EditProfile from '../pages/EditProfile';
import PrivateChat from '../pages/PrivateChat';
import FilteredGames from '../pages/FilteredGames';
import GamesCategory from '../pages/GamesCategory';

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
    // initialRouteName="SignUp"
  >
    <Auth.Screen name="SignIn" component={SignIn} />
    <Auth.Screen name="SignUp" component={SignUp} />

    <Auth.Screen name="Profile" component={AppTabs} />
    <Auth.Screen name="EditProfile" component={EditProfile} />
    <Auth.Screen name="GamesCategory" component={GamesCategory} />

    <Auth.Screen name="PrivateChat" component={PrivateChat} />
    <Auth.Screen name="Friends" component={Friends} />
    <Auth.Screen name="FilteredGames" component={FilteredGames} />
  </Auth.Navigator>
);

export default AuthRoutes;
