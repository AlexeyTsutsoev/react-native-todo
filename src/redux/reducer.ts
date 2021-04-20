import {DarkTheme, DefaultTheme} from '@react-navigation/native';
import {combineReducers, createSlice} from '@reduxjs/toolkit';

export type todoType = {
  title: string;
  text: string;
  isComplite: boolean;
  isActive: boolean;
  key: string;
};

const getInitialState = {
  login: '',
  isAuth: false,
  // eslint-disable-next-line no-array-constructor
  todoList: new Array<todoType>(),
  theme: DefaultTheme,
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
      state.login = '';
    },
    changeLogin: (state, action) => {
      state.login = action.payload;
    },
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    removeTodo: (state, action) => {
      const newTodos = state.todoList.filter(
        todo => todo.key !== action.payload,
      );
      state.todoList = newTodos;
    },
    setActive: (state, action) => {
      state.todoList.forEach(todo => {
        if (todo.key === action.payload) {
          todo.isActive = !todo.isActive;
        }
      });
    },
    updateTodo: (state, action) => {
      state.todoList.forEach(todo => {
        if (todo.key === action.payload.key) {
          todo.title = action.payload.title;
          todo.text = action.payload.text;
        }
      });
    },
    toggleTheme: (state, action) => {
      state.theme = action.payload ? DarkTheme : DefaultTheme;
    },
    loadTheme: (state, action) => {
      state.theme = action.payload === 'dark' ? DarkTheme : DefaultTheme;
    },
  },
});

export const {
  signIn,
  signOut,
  changeLogin,
  addTodo,
  removeTodo,
  setActive,
  updateTodo,
  toggleTheme,
  loadTheme,
} = main.actions;

const rootReducer = combineReducers({
  main: main.reducer,
});

export default rootReducer;
