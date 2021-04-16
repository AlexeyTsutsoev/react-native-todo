import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MainScreen from '../screens/MainScreen/MainScreen';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="main" component={MainScreen} />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
