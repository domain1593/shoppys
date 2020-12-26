/** 
 * @format
 * @flow strict-local
 */


import React from 'react';
import {
  StatusBar
} from 'react-native';
import HomePage from './home/home.page';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <HomePage/>
    </>
  );
};

export default App;
