import React, {FC, useState} from 'react';
import {Modal, StyleSheet} from 'react-native';
import * as yup from 'yup';
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import {addTodo, todoType} from '../../redux/reducer';
import CustomView from '../../components/containers/CustomView/CustomView';
import MyInput from '../../components/UI/MyInput/MyInput';
import MyButton from '../../components/UI/MyButton/MyButton';
import CustomText from '../../components/containers/CustomText/CustomText';

const validation = yup.object().shape({
  title: yup.string().required('Enter title'),
  text: yup.string().required('Enter text'),
});

const AddToDo: FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const dispatch = useDispatch();

  const {values, handleChange, handleSubmit, resetForm} = useFormik({
    initialValues: {
      title: '',
      text: '',
    },
    validationSchema: validation,
    onSubmit: () => {
      const newTodo: todoType = {
        title: values.title,
        text: values.text,
        isActive: false,
        isComplite: false,
        key: Date.now().toString(),
      };
      dispatch(addTodo(newTodo));
      setIsShow(true);
      resetForm();
    },
  });

  const closeWithDelay = (delay: number) => {
    setTimeout(() => setIsShow(false), delay);
  };

  const handleTitle = (text: string) => {
    handleChange({target: {value: text, name: 'title'}});
  };

  const handleText = (text: string) => {
    handleChange({target: {value: text, name: 'text'}});
  };

  return (
    <CustomView>
      <Modal
        visible={isShow}
        animationType="fade"
        transparent={true}
        style={styles.modalView}
        onShow={() => closeWithDelay(1000)}>
        <CustomView>
          <CustomText title="To Do added" />
          <MyButton
            style={styles.modalBtn}
            onPress={() => setIsShow(false)}
            title="Ok"
          />
        </CustomView>
      </Modal>
      <MyInput
        placeholder="Title"
        value={values.title}
        onChange={handleTitle}
      />
      <MyInput
        placeholder="Text of TODO"
        value={values.text}
        onChange={handleText}
        multiLine={true}
        numberOfLines={3}
      />
      <MyButton onPress={handleSubmit} title="Add task to your TODO-list" />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalBtn: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: 100,
  },
});

export default AddToDo;
