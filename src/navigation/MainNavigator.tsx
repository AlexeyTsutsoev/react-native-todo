import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/reducer';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from '../screens/StartScreen/StartScreen';

const Stack = createStackNavigator();

const MainNavigator: FC = () => {
  const theme = useSelector((state: RootState) => state.theme);
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator>
        <Stack.Screen name="start" component={StartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
