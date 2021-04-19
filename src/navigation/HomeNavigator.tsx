import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import AddToDo from '../screens/AddToDo/AddToDo';
import InfoScreen from '../screens/InfoScreen/InfoScreen';
import MainScreen from '../screens/MainScreen/MainScreen';
import Icons from 'react-native-vector-icons/FontAwesome';
import {useTheme} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';
          console.log(route.name);

          if (route.name === 'main') {
            console.log('if main');
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Add ToDo') {
            console.log('if add');
            iconName = focused ? 'plus-circle' : 'plus';
          } else if (route.name === 'Info') {
            console.log('if info');
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
