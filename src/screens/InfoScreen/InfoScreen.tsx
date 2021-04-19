import React, {FC} from 'react';
import {Text} from 'react-native-elements';
import CustomText from '../../components/containers/CustomText/CustomText';
import CustomView from '../../components/containers/CustomView/CustomView';

const InfoScreen: FC = () => {
  const text = `
  This application is developed for learn Typescript, React Native and related tech.

  Used techs:
  - TypeScript
  - React Native
  - React Native Element
  - React Native Navigator
  - Redux and Redux Toolkit
  `;
  return (
    <CustomView>
      <CustomText title={text} />
    </CustomView>
  );
};

export default InfoScreen;
