import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AppStack from './src/routes/AppStack';
import AppTab from './src/routes/AppTabs';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#191A1E" translucent />
    <View style={{ flex: 1, backgroundColor: '#191A1E' }}>
      {/* <AppStack /> */}
      <AppTab />
    </View>
  </NavigationContainer>
);

export default App;