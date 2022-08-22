import React from 'react';

import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Navigator } from './Navigator';
import { SearchScreen } from '../screens/search/SearchScreen';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      tabBarOptions={{
        activeTintColor: '#5856D6',
        labelStyle: {
          marginBottom: Platform.OS === 'ios' ? 0 : 10,
        },
        style: {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255, 0.92)',
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 80 : 60,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({ color }) => (
            <Icon color={color} size={25} name="list-outline" />
          ),
        }}
        component={Navigator}
      />
      <Tab.Screen
        name="SearchScreen"
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon color={color} size={25} name="search-outline" />
          ),
        }}
        component={SearchScreen}
      />
    </Tab.Navigator>
  );
};
