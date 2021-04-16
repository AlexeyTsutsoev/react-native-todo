import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import rootReducer from './reducer';

const middleware = getDefaultMiddleware({
  thunk: true,
  serializableCheck: false,
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
