import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {authorize} from 'react-native-app-auth';
import {useDispatch} from 'react-redux';

import config from '../../config';
import {FETCH_USER_DATA} from '../actions/types';
import ButtonComponent from '../components/Button';

const LoginScreen = ({navigation}) => {
  const [userData, setUserData] = useState({});
  const [token, setToken] = useState({});

  const dispatch = useDispatch();

  const githubLoginRequest = async () => {
    try {
      await authorize(config).then(r => {
        setToken(r.accessToken);
        fetch('https://api.github.com/user', {
          method: 'GET',
          headers: {
            Authorization: `token ${r.accessToken}`,
            'Content-Type': 'application/json',
          },
        }).then(r => {
          setUserData(JSON.parse(r._bodyText));
        });
      });
    } catch (error) {
      console.log('retorno do erro: ', error);
    }
  };

  const isEmpty = obj => Object.keys(obj).length !== 0;

  const storeUserData = user =>
    dispatch({type: FETCH_USER_DATA, userData: user});

  useEffect(() => {
    storeUserData(userData);
  });

  return (
    <View>
      <ButtonComponent title="Login" func={() => githubLoginRequest()} />
      {isEmpty(userData) ? (
        navigation.navigate('LogedUserScreen')
      ) : (
        <Text>Favor efetuar Login</Text>
      )}
    </View>
  );
};

export default LoginScreen;
