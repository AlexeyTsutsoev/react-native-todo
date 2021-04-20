import React, {FC} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {removeTodo, setActive} from '../../redux/reducer';
import {RootState} from '../../redux/store';
import TodoItem from './components/TodoItem';
import CustomText from '../../components/containers/CustomText/CustomText';
import CustomView from '../../components/containers/CustomView/CustomView';

const MainScreen: FC = () => {
  const todos = useSelector((state: RootState) => state.main.todoList);
  const dispatch = useDispatch();

  const removeHandler = (id: any) => {
    Alert.alert('confirm action', 'remove todo?', [
      {
        text: 'Ok',
        onPress: () => dispatch(removeTodo(id)),
        style: 'default',
      },
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
    ]);
  };

  const activeHandler = (id: any) => {
    dispatch(setActive(id));
  };

  const renderItem = (props: any) => {
    return (
      <TodoItem
        todo={props.item}
        pressHandler={activeHandler}
        longPressHandler={removeHandler}
      />
    );
  };

  return (
    <CustomView>
      {!todos.length ? (
        <CustomText style={styles.emptyTitle} title={'Do you have todos?'} />
      ) : (
        <CustomText style={styles.title} title="Your todo list:" />
      )}
      <FlatList
        style={styles.list}
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  emptyTitle: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
  },
  list: {
    width: '100%',
  },
});

export default MainScreen;
