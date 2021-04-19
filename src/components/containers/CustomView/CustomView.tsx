import {useTheme} from '@react-navigation/native';
import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';

type Props = {
  children: JSX.Element | JSX.Element[];
  style?: object;
};

const CustomView: FC<Props> = (props: Props) => {
  const {colors} = useTheme();

  console.log('container', colors.background);

  return (
    <SafeAreaView
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        ...props.style,
      }}>
      {props.children}
    </SafeAreaView>
  );
};

export default CustomView;
