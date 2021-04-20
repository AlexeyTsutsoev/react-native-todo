import React, {FC} from 'react';
import {Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

type Props = {
  title: string;
  style?: object;
};

const CustomText: FC<Props> = (props: Props) => {
  const {colors} = useTheme();

  return (
    <Text style={{color: colors.text, ...props.style}}>{props.title}</Text>
  );
};

export default CustomText;
