import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tabs = createMaterialBottomTabNavigator();

import Chat from '../pages/Chat';
import Home from '../pages/Home';
import Search from '../pages/Search';
import Profile from '../pages/Profile';
import PrivateChat from '../pages/PrivateChat';

const AppTabs: React.FC = () => {
  return (
    <Tabs.Navigator
      activeColor="#DB7C0C"
      inactiveColor="#6D6D6D"
      barStyle={{ backgroundColor: '#000' }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="forum-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />

      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default AppTabs;
