import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tabs = createMaterialBottomTabNavigator();

import Profile from '../pages/Profile';

const AppTabs: React.FC = () => {
  return (
    <Tabs.Navigator
      activeColor="#DB7C0C"
      inactiveColor="#6D6D6D"
      barStyle={{ backgroundColor: '#000' }}
    >
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="mdiAccountOutline"
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
