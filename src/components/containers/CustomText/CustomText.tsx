import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';

type Props = {
  title: string;
  style?: object;
};

const CustomText = (props: Props) => {
  const {colors} = useTheme();

  return (
    <Text style={{color: colors.text, ...props.style}}>{props.title}</Text>
  );
};

export default CustomText;
