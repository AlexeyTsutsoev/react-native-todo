import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {DrawerActions, useNavigation, useTheme} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/FontAwesome';

type Props = {
  iconName: string;
};

const DrawerToggle: FC<Props> = (props: Props) => {
  const {colors} = useTheme();
  const navigation = useNavigation();

  const drawerToggle = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <TouchableOpacity
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        alignItems: 'center',
        margin: 10,
      }}
      onPress={drawerToggle}>
      <Icons
        name={props.iconName}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{fontSize: 30, color: colors.primary}}
      />
    </TouchableOpacity>
  );
};

export default DrawerToggle;
