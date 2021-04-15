import React from 'react';
import {View, Text, TouchableHighlight, TouchableOpacity} from 'react-native';
import MyButton from '../../components/UI/MyBotton';

const StartScreen = () => {
  const onPress = () => {
    console.log('press!');
  };
  return (
    <View>
      <MyButton onPress={onPress} title='Login'></MyButton>
    </View>
  );
};

export default StartScreen;