import React, {FC} from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {useTheme} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import DrawerToggle from '../components/UI/DrawerToggle/DrawerToggle';
import {RootState} from '../redux/store';
import StartScreen from '../screens/StartScreen/StartScreen';
import DrawerNavigator from './DrawerNavigator';

type RootStackParamList = {
  drawer: undefined;
  start: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

type Props = {
  navigation?: StackNavigationProp<RootStackParamList, 'start'>;
};

const StackNavigator: FC<Props> = () => {
  const isAuth = useSelector((state: RootState) => state.main.isAuth);
  const {colors} = useTheme();
  return (
    <Stack.Navigator>
      {isAuth ? (
        <Stack.Screen
          name="drawer"
          component={DrawerNavigator}
          options={{
            headerStyle: {
              backgroundColor: colors.background,
            },
            title: '',
            headerLeft: () => {
              return <DrawerToggle iconName="bars" />;
            },
          }}
        />
      ) : (
        <Stack.Screen name="start" component={StartScreen} />
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
