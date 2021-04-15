import {useTheme} from '@react-navigation/native';
import React from 'react';
import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native';

type btnProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
};

const MyButton = (props: btnProps) => {
  const {colors} = useTheme();
  console.log(colors);

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{backgroundColor: colors.card}}>
      <Text style={{color: colors.text}}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
