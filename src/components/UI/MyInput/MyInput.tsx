import {useTheme} from '@react-navigation/native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';

type MyInputProps = {
  multiLine?: boolean;
  numberOfLines?: number;
  onChange: (text: string) => void;
  value: string;
  placeholder?: string;
};

const MyInput = (props: MyInputProps) => {
  const {colors} = useTheme();
  return (
    <TextInput
      multiline={props.multiLine}
      numberOfLines={props.numberOfLines}
      style={{
        margin: 10,
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.card,
        color: colors.text,
        width: '50%',
        padding: 5,
      }}
      onChangeText={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
      placeholderTextColor={colors.text}
    />
  );
};

export default MyInput;