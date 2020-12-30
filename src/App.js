/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import shoppysColors from './assets/theme/theme';
import HomePage from './layout/home/home.page';
import configureStore from './redux/configure_store';

let store = configureStore();

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar
          barStyle="default"
          backgroundColor={shoppysColors.primary.neutral}
        />
        <HomePage />
      </Provider>
    </>
  );
};

export default App;
