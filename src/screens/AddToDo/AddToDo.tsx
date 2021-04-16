import {useFormik} from 'formik';
import React from 'react';
import CustomView from '../../components/containers/CustomView/CustomView';
import MyInput from '../../components/UI/MyInput/MyInput';
import * as yup from 'yup';
import MyButton from '../../components/UI/MyButton/MyButton';

const validation = yup.object().shape({
  title: yup.string().required('Enter title'),
  text: yup.string().required('Enter text'),
});

const AddToDo = () => {
  const {values, handleChange, handleSubmit} = useFormik({
    initialValues: {
      title: '',
      text: '',
    },
    validationSchema: validation,
    onSubmit: async () => null,
  });

  const handleTitle = (text: string) => {
    handleChange({target: {value: text, name: 'title'}});
  };

  const handleText = (text: string) => {
    handleChange({target: {value: text, name: 'text'}});
  };
  return (
    <CustomView>
      <MyInput placeholder="Title" value={values.title} onChange={handleTitle} />
      <MyInput placeholder="Text of TODO" value={values.text} onChange={handleText} multiLine={true} numberOfLines={3} />
      <MyButton onPress={handleSubmit} title="Add task to your TODO-list" />
    </CustomView>
  );
};

export default AddToDo;