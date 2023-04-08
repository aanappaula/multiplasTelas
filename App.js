import React, { useState} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

import Home from './screens/Home';
import Gatos from './screens/Gatos';
import Cachorros from './screens/Cachorros';
import Passaros from './screens/Passaros';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Cachorros" component={Cachorros} />
          <Stack.Screen name="Gatos" component={Gatos} />
          <Stack.Screen name="Passaros" component={Passaros} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
