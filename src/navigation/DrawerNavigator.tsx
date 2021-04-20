import React, {FC} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SettingScreen from '../screens/SettingScreen/SettingScreen';
import HomeNavigator from './HomeNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator: FC = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="home" component={HomeNavigator} />
      <Drawer.Screen name="setting" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
