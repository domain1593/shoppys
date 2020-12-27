/** 
 * @format
 * @flow strict-local
 */


import React from 'react';
import {
  StatusBar
} from 'react-native';
import shoppysColors from '../assets/theme/theme';
import HomePage from './home/home.page';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="default" backgroundColor={shoppysColors.primary.neutral} />
      <HomePage/>
    </>
  );
};

export default App;
