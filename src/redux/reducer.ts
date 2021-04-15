import {DarkTheme, DefaultTheme, Theme} from '@react-navigation/native';
import {combineReducers, createSlice} from '@reduxjs/toolkit';

const getInitialState = () => {
  return {
    theme: DefaultTheme,
    login: '',
    isAuth: false,
  };
};

export type RootState = {
  theme: Theme;
  login: string;
  isAuth: boolean;
};

const main = createSlice({
  name: 'main',
  initialState: getInitialState(),
  reducers: {
    signIn: (state, action) => {
      state.isAuth = true;
      state.login = action.payload;
    },
    signOut: state => {
      state.isAuth = false;
      state.login = '';
    },
    changeTheme: (state, action) => {
      state.theme = action.payload === 'dark' ? DarkTheme : DefaultTheme;
    },
  },
});

export const {signIn, signOut, changeTheme} = main.actions;

const rootReducer = combineReducers({
  main: main.reducer,
});

export default rootReducer;
