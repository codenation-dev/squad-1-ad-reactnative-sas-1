import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {authorize} from 'react-native-app-auth';
import AsyncStorage from '@react-native-community/async-storage';
import config from '../../../config';
import ButtonComponent from '../../components/Button';
import api from '../../services/api';
import {useDispatch} from 'react-redux';
import {FETCH_USER_DATA, GITHUB_LOGIN} from '../../store/actions/types';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const githubLoginRequest = async () => {
    try {
      const authState = await authorize(config);
      await setToken(authState.accessToken);
    } catch (error) {
      return error;
    }
  };

  const getUserData = async () => {
    try {
      const response = await api.get('/user');
      dispatch({
        type: FETCH_USER_DATA,
        userData: JSON.parse(response._bodyText),
      });
    } catch (error) {
      return error;
    }
  };

  const setToken = async authToken => {
    api.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    dispatch({
      type: GITHUB_LOGIN,
      token: authToken,
    });
    try {
      await AsyncStorage.setItem('token', authToken);
      getUserData();
    } catch (error) {
      return error;
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <ButtonComponent
        title="Login with Github"
        onPress={() => githubLoginRequest()}
        icon={faGithub}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#006099',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 305,
    marginBottom: 100,
  },
});
