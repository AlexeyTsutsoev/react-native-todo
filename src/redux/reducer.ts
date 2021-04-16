import {combineReducers, createSlice} from '@reduxjs/toolkit';

export type todoType = {
  title: string;
  text: string;
  isComplite: boolean;
  isActive: boolean;
  key: Date;
};

export type RootState = {
  login: string;
  isAuth: boolean;
  todoList: Array<todoType>;
};

const getInitialState = {
  login: null,
  isAuth: false,
  // eslint-disable-next-line no-array-constructor
  todoList: new Array<todoType>(),
};

const main = createSlice({
  name: 'main',
  initialState: getInitialState,
  reducers: {
    signIn: (state, action) => {
      state.isAuth = true;
      state.login = action.payload;
    },
    signOut: state => {
      state.isAuth = false;
      state.login = null;
    },
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    removeTodo: (state, action) => {
      const newTodo = state.todoList.filter(
        todo => todo.key !== action.payload,
      );
      state.todoList = newTodo;
    },
  },
});

export const {signIn, signOut} = main.actions;

const rootReducer = combineReducers({
  main: main.reducer,
});

export default rootReducer;
