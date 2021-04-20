import React, {FC, useEffect} from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {loadTheme} from '../redux/reducer';
import StackNavigator from './StackNavigator';

const MainNavigator: FC = () => {
  const theme = useSelector((state: RootState) => state.main.theme);
  const dispatch = useDispatch();
  const color = useColorScheme();

  useEffect(() => {
    dispatch(loadTheme(color));
  }, [color, dispatch]);

  return (
    <NavigationContainer theme={theme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
