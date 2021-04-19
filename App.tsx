/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import MainNavigator from './src/navigation/MainNavigator';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
