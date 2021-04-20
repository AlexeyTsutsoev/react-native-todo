import React, {useState} from 'react';
import {Modal} from 'react-native';
import * as yup from 'yup';
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import {signIn} from '../../redux/reducer';
import MyButton from '../../components/UI/MyButton/MyButton';
import CustomView from '../../components/containers/CustomView/CustomView';
import MyInput from '../../components/UI/MyInput/MyInput';

const validation = yup.object().shape({
  name: yup.string().required('Please, enter your name'),
});

const StartScreen = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useDispatch();

  const {values, handleSubmit, handleChange} = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: validation,
    onSubmit: async () => {
      dispatch(signIn(values.name));
    },
  });

  const onChangeName = (text: string) => {
    handleChange({
      target: {value: text, name: 'name'},
    });
  };

  return (
    <CustomView>
      <Modal animationType="fade" visible={showModal}>
        <CustomView>
          <MyInput
            placeholder="Enter your name"
            onChange={onChangeName}
            value={values.name}
          />
          <MyButton onPress={handleSubmit} title="Sign In" />
          <MyButton onPress={() => setShowModal(false)} title="Cancel" />
        </CustomView>
      </Modal>
      <MyButton onPress={() => setShowModal(true)} title="Login" />
    </CustomView>
  );
};

export default StartScreen;
