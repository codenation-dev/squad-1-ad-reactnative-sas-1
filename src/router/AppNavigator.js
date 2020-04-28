import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import LogedUserScreen from '../screens/LogedUserScreen';
import userAroundMapScreen from '../screens/userAroundMapScreen.js';
import userAroundScreen from '../screens/userAroundScreen.js';
import userSearchDataScreen from '../screens/userSearchedDataScreen.js';
import mapsScreen from '../screens/mapsScreen.js';

const AppNavigator = ({token}) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {token == null ? (
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
      ) : (
        <>
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
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
