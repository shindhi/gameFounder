import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  useFonts
} from '@expo-google-fonts/roboto';

import AppStack from './src/routes/AppStack';
import AppTab from './src/routes/AppTabs';

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    roboto_400: Roboto_400Regular,
    roboto_500: Roboto_500Medium,
    roboto_700: Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#191A1E"
        translucent
      />
      <View style={{ flex: 1, backgroundColor: '#191A1E' }}>
        <AppStack />
      </View>
    </NavigationContainer>
  );
}

export default App;