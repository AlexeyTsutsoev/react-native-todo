import React from 'react';
import {useSelector} from 'react-redux';
import CustomText from '../../components/containers/CustomText/CustomText';
import CustomView from '../../components/containers/CustomView/CustomView';
import {RootState} from '../../redux/store';

const MainScreen = () => {
  const userName = useSelector((state: RootState) => state.main.login);

  return (
    <CustomView>
      <CustomText title={`Hi! Mister ${userName}`} />
    </CustomView>
  );
};

export default MainScreen;
