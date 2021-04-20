import React, {FC} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {useTheme} from '@react-navigation/native';

type MyInputProps = {
  multiLine?: boolean;
  numberOfLines?: number;
  onChange: (text: string) => void;
  value: string;
  placeholder?: string;
  style?: object;
};

const MyInput: FC<MyInputProps> = (props: MyInputProps) => {
  const {colors} = useTheme();
  return (
    <TextInput
      multiline={props.multiLine}
      numberOfLines={props.numberOfLines}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        margin: 10,
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.card,
        color: colors.text,
        width: '50%',
        padding: 5,
        ...props.style,
      }}
      onChangeText={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
      placeholderTextColor={colors.text}
    />
  );
};

export default MyInput;
