import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import GamesCategory from '../pages/GamesCategory';
import PrivateChat from '../pages/PrivateChat';
import GroupChat from '../pages/GroupChat';
import Friends from '../pages/Friends';
import EditProfile from '../pages/EditProfile';
import News from '../pages/News';
import FilteredGames from '../pages/FilteredGames';

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

    <Auth.Screen name="News" component={News} />
    <Auth.Screen name="PrivateChat" component={PrivateChat} />
    <Auth.Screen name="GroupChat" component={GroupChat} />
    <Auth.Screen name="Friends" component={Friends} />
    <Auth.Screen name="FilteredGames" component={FilteredGames} />
  </Auth.Navigator>
);

export default AuthRoutes;
