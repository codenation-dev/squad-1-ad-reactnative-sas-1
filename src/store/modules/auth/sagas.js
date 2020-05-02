import {put, all, takeLatest} from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';
import {signInSuccess, signFailure} from './actions';
import {authorize} from 'react-native-app-auth';
import config from '../../../../config';
import api from '../../../services/api';

function* getToken() {
  const response = yield AsyncStorage.getItem('token');

  if (response) {
    yield put(signInSuccess(response));
  } else {
    yield put(signFailure());
  }
}

function* login() {
  const authState = yield authorize(config);

  if (authState && authState.accessToken) {
    yield AsyncStorage.setItem('token', authState.accessToken);
    yield put(signInSuccess(authState.accessToken));
  } else {
    yield put(signFailure());
  }
}

function setToken({payload}) {
  api.defaults.headers.common.Authorization = `Bearer ${payload}`;
}

function* removeToken() {
  yield AsyncStorage.removeItem('token');
}

export default all([
  takeLatest('GET_AUTH_TOKEN', getToken),
  takeLatest('SIGN_IN_REQUEST', login),
  takeLatest('SIGN_IN_SUCCESS', setToken),
  takeLatest('SIGN_OUT', removeToken),
]);
