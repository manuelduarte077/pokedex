import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonScreen from '../screens/pokemon/PokemonScreen';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { DetailScreen } from '../screens/detail/DetailScreen';

export type RootStackParams = {
  Home: undefined;
  DetailScreen: { simplePokemon: SimplePokemon; color: string };
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Home" component={PokemonScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};
