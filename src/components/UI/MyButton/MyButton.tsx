import {useTheme} from '@react-navigation/native';
import React from 'react';
import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native';

type btnProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
};

const MyButton = (props: btnProps) => {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      onPress={props.onPress}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        alignItems: 'center',
        backgroundColor: colors.card,
        padding: 5,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: colors.border,
        margin: 5,
        width: '50%',
      }}>
      <Text style={{color: colors.primary}}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
