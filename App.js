import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from './src/store';
import AppNavigator from './src/router/AppNavigator';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from './src/screens/SplashScreen';

const store = createStore(reducer);

const App = () => {
  const [token, setToken] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const getToken = async () => {
      try {
        const value = await AsyncStorage.getItem('token');
        setToken(value);
        setLoading(false);
      } catch (e) {
        setToken(null);
        setLoading(false);
      }
    };

    getToken();
  }, []);

  return loading ? (
    <SplashScreen />
  ) : (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator token={token} />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
