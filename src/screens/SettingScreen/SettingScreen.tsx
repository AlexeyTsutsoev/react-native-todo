import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';
import * as yup from 'yup';
import {useFormik} from 'formik';
import {Switch} from 'react-native-gesture-handler';
import {RootState} from '../../redux/store';
import {changeLogin, signOut, toggleTheme} from '../../redux/reducer';
import CustomText from '../../components/containers/CustomText/CustomText';
import CustomView from '../../components/containers/CustomView/CustomView';
import MyInput from '../../components/UI/MyInput/MyInput';
import MyButton from '../../components/UI/MyButton/MyButton';

const validation = yup.object().shape({
  name: yup.string().required('Name can not be empty'),
});

const SettingScreen: FC = () => {
  const {colors, dark} = useTheme();
  const [isOn, setIsOn] = useState<boolean>(dark);
  const [isActive, setIsActive] = useState<boolean>(false);
  const login = useSelector((state: RootState) => state.main.login);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleTheme(isOn));
  }, [dispatch, isOn]);

  const {values, handleSubmit, handleChange, resetForm} = useFormik({
    initialValues: {
      name: login,
    },
    validationSchema: validation,
    onSubmit: () => {
      dispatch(changeLogin(values.name));
      toggleActive();
    },
  });

  const toggleSwitch = () => {
    setIsOn(prev => !prev);
  };

  const toggleActive = () => {
    setIsActive(prev => !prev);
  };

  const changeName = (text: string) => {
    handleChange({
      target: {name: 'name', value: text},
    });
  };

  const cancelChange = () => {
    toggleActive();
    resetForm();
  };

  const out = () => {
    dispatch(signOut());
  };

  return (
    <CustomView>
      <CustomText style={styles.title} title="Settings" />
      <View style={styles.card}>
        <View style={styles.item}>
          {!isActive ? (
            <TouchableOpacity onPress={toggleActive}>
              <CustomText style={styles.text} title={`user name: ${login}`} />
            </TouchableOpacity>
          ) : (
            <View style={styles.active}>
              <MyInput
                style={styles.input}
                value={values.name}
                onChange={changeName}
              />
              <View style={styles.btnGroup}>
                <MyButton
                  style={styles.btnStyle}
                  title="confirm"
                  onPress={handleSubmit}
                />
                <MyButton
                  style={styles.btnStyle}
                  title="cancel"
                  onPress={cancelChange}
                />
              </View>
            </View>
          )}
        </View>
        <View style={styles.item}>
          <CustomText style={styles.text} title="Change theme: " />
        </View>
        <View style={styles.themeToggle}>
          <CustomText
            style={styles.text}
            title={dark ? 'Dark theme' : 'Light Theme'}
          />
          <Switch
            value={isOn}
            onValueChange={toggleSwitch}
            trackColor={{false: '#7d7c7c', true: '#9c9a9a'}}
            thumbColor={isOn ? colors.primary : colors.text}
            ios_backgroundColor={colors.background}
          />
        </View>
        <MyButton title="Sign out" onPress={out} />
      </View>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#47a3ff',
    borderColor: 'white',
    borderStyle: 'solid',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  themeToggle: {
    flexDirection: 'row',
    marginTop: 5,
  },
  title: {
    fontSize: 40,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
  },
  item: {
    margin: 10,
  },
  btnGroup: {
    flexDirection: 'row',
  },
  btnStyle: {
    padding: 0,
    width: '40%',
  },
  input: {
    width: '100%',
  },
  active: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SettingScreen;
