import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import './src/config/ReactotronConfig';
import {Provider} from 'react-redux';
import AppNavigator from './src/router/AppNavigator';
import store from './src/store';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
