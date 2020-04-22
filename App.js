import React from 'react';
import {NavigationContainer, useLinking} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import {reducer} from './src/redux';
import LoginScreen from './src/screens/LoginScreen';
import LogedUserScreen from './src/screens/LogedUserScreen';
import userAroundMapScreen from './src/screens/userAroundMapScreen.js';
import userAroundScreen from './src/screens/userAroundScreen.js';
import userSearchDataScreen from './src/screens/userSearchedDataScreen.js';
import mapsScreen from './src/screens/mapsScreen.js';

const Stack = createStackNavigator();

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{title: 'Login'}}
          />
          <Stack.Screen
            name="LogedUserScreen"
            component={LogedUserScreen}
            options={{title: 'Loged Area'}}
          />
          <Stack.Screen
            name="userAroundScreen"
            component={userAroundScreen}
            options={{title: 'Users Around Your Location'}}
          />
          <Stack.Screen
            name="userAroundMapScreen"
            component={userAroundMapScreen}
            options={{title: 'Users Around Your location Map'}}
          />
          <Stack.Screen
            name="userSearchDataScreen"
            component={userSearchDataScreen}
            options={{title: 'User Selected Data'}}
          />
          <Stack.Screen
            name="mapsScreen"
            component={mapsScreen}
            options={{title: 'Map Screen Location'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
