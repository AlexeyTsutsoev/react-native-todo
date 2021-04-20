import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddToDo from '../screens/AddToDo/AddToDo';
import InfoScreen from '../screens/InfoScreen/InfoScreen';
import MainScreen from '../screens/MainScreen/MainScreen';
import Icons from 'react-native-vector-icons/FontAwesome';
import {useTheme} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const HomeNavigator: FC = () => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';
          if (route.name === 'main') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Add ToDo') {
            iconName = focused ? 'plus-circle' : 'plus';
          } else if (route.name === 'Info') {
            iconName = focused ? 'info-circle' : 'info';
          }
          return <Icons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.text,
      }}>
      <Tab.Screen name="main" component={MainScreen} />
      <Tab.Screen name="Add ToDo" component={AddToDo} />
      <Tab.Screen name="Info" component={InfoScreen} />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
