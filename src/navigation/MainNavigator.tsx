import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from '../screens/StartScreen/StartScreen';
import {useSelector} from 'react-redux';
import HomeNavigator from './HomeNavigator';
import {RootState} from '../redux/store';
import {useColorScheme} from 'react-native';

const Stack = createStackNavigator();

const MainNavigator: FC = () => {
  const theme = useColorScheme() ? DarkTheme : DefaultTheme;
  const isAuth = useSelector((state: RootState) => state.main.isAuth);

  console.log('theme---', theme);

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        {isAuth ? (
          <Stack.Screen name="home" component={HomeNavigator} />
        ) : (
          <Stack.Screen name="start" component={StartScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
