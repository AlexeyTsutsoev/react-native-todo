import {useFormik} from 'formik';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import * as yup from 'yup';
import CustomText from '../../../components/containers/CustomText/CustomText';
import MyButton from '../../../components/UI/MyButton/MyButton';
import MyInput from '../../../components/UI/MyInput/MyInput';
import {setActive, todoType, updateTodo} from '../../../redux/reducer';

type Props = {
  todo: todoType;
  pressHandler: (id: string) => void;
  longPressHandler: (id: string) => void;
};

const validation = yup.object().shape({
  title: yup.string().required('Enter title'),
  text: yup.string().required('Enter text'),
});

const TodoItem = (props: Props) => {
  const [selected, setSelected] = useState<boolean>(false);
  const dispatch = useDispatch();

  const initialValues = {
    title: props.todo.title,
    text: props.todo.text,
  };

  const {values, errors, handleChange, handleSubmit} = useFormik({
    initialValues,
    validationSchema: validation,
    onSubmit: () => {
      dispatch(
        updateTodo({
          key: props.todo.key,
          title: values.title,
          text: values.text,
        }),
      );
      closeInputs();
    },
  });

  const closeInputs = () => {
    dispatch(setActive(props.todo.key));
  };

  const handleTitle = (text: string) => {
    handleChange({target: {value: text, name: 'title'}});
  };

  const handleText = (text: string) => {
    handleChange({target: {value: text, name: 'text'}});
  };

  return !props.todo.isActive ? (
    <TouchableOpacity
      style={styles.button}
      onPress={() => props.pressHandler(props.todo.key)}
      onLongPress={() => props.longPressHandler(props.todo.key)}>
      <View>
        <CustomText
          title={props.todo.title}
          style={selected ? styles.completed : styles.title}
        />
        <CustomText
          title={props.todo.text}
          style={selected ? styles.completed : {}}
        />
      </View>
      <View>
        <CheckBox checked={selected} onPress={() => setSelected(!selected)} />
      </View>
    </TouchableOpacity>
  ) : (
    <View>
      <View>
        <CustomText
          style={errors.text ? styles.error : {}}
          title={errors.title ? errors.title : 'Enter your changes'}
        />
        <MyInput
          style={styles.input}
          value={values.title}
          onChange={handleTitle}
        />
        <CustomText
          style={errors.text ? styles.error : {}}
          title={errors.text ? errors.text : 'Enter your changes'}
        />
        <MyInput
          style={styles.input}
          value={values.text}
          onChange={handleText}
        />
      </View>
      <View style={styles.activeBtn}>
        <MyButton
          style={styles.btnStyle}
          textStyle={styles.btnTextStyle}
          title="Confirm changes"
          onPress={handleSubmit}
        />
        <MyButton
          style={styles.btnStyle}
          textStyle={styles.btnTextStyle}
          title="Cancel changes"
          onPress={closeInputs}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#7d7c7c',
    padding: 10,
    borderColor: '#ffffff',
    borderStyle: 'solid',
    borderRadius: 5,
    margin: 5,
  },
  title: {
    fontSize: 20,
    opacity: 0.6,
  },
  input: {
    width: '100%',
  },
  activeBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnStyle: {
    padding: 0,
    width: '40%',
  },
  btnTextStyle: {
    fontSize: 15,
  },
  error: {
    color: '#a80000',
  },
  completed: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: 'black',
    opacity: 0.6,
  },
});

export default TodoItem;
