import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { SearchScreen } from '../screens/search/SearchScreen';
import PokemonScreen from '../screens/pokemon/PokemonScreen';
import { RootStackParams } from './Navigator';

const Tab1 = createStackNavigator<RootStackParams>();

export const Tab1Screen = () => {
  return (
    <Tab1.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Tab1.Screen name="Home" component={SearchScreen} />
      <Tab1.Screen name="DetailScreen" component={PokemonScreen} />
    </Tab1.Navigator>
  );
};
