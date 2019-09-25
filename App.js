/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  View,
  Text
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import StacksOverTabs from './navigator'

import { Provider } from 'react-redux';
import createStore from './create';

const store = createStore();

const AppContainer = createAppContainer(StacksOverTabs);


class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <AppContainer />
      </Provider>  
      )
  }
}

export default App;
