import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Main from '../screens/Main';
import UserInfo from '../screens/UserInfo';
import DevelopersAround from '../screens/DevelopersAround';
import DeveloperAroundDetail from '../screens/DeveloperAroundDetail';
// import userAroundMapScreen from '../screens/userAroundMapScreen.js';
// import userAroundScreen from '../screens/userAroundScreen.js';
// import userSearchDataScreen from '../screens/userSearchedDataScreen.js';
import SplashScreen from '../screens/SplashScreen';
// import mapsScreen from '../screens/mapsScreen.js';
import {useDispatch, useSelector} from 'react-redux';
import {getAuthToken} from '../store/modules/auth/actions';

const AppNavigator = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const Stack = createStackNavigator();

  React.useEffect(() => {
    dispatch(getAuthToken());
  }, [dispatch]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {auth.isLoading ? (
        <Stack.Screen name="Loading" component={SplashScreen} />
      ) : auth.token == null ? (
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
      ) : (
        <>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{title: 'Map View'}}
          />
          <Stack.Screen
            name="userInfo"
            component={UserInfo}
            options={{title: 'Info User'}}
          />
          <Stack.Screen
            name="DevelopersAround"
            component={DevelopersAround}
            options={{title: 'Developers Around'}}
          />
          <Stack.Screen
            name="DeveloperAroundDetail"
            component={DeveloperAroundDetail}
            options={{title: 'Developer Around Detail'}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AppNavigator;
