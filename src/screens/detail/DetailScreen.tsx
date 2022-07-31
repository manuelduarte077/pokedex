import React from 'react';

import { Text, View } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigator/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({ navigation, route }: Props) => {
  const { simplePokemon, color } = route.params;

  return (
    <View>
      <Text>
        {simplePokemon.name} - {color}
      </Text>
    </View>
  );
};
