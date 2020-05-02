import {call, put, all, takeLatest} from 'redux-saga/effects';
import {PermissionsAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import api from '../../../services/api';
import {getProfileSuccess, getUserLocationSuccess, getUserLocationFailure} from './actions';

function* getUser() {
  const response = yield call(api.get, '/user');

  if (response && response.data) {
    yield put(getProfileSuccess(response.data));
  }
}

function* getUserLocation() {
  const granted = yield PermissionsAndroid.request({
    title: 'Get current location of user',
    message: 'Hi! To use this app you need to provide your current location.',
    buttonNeutral: 'Ask Me Later',
    buttonNegative: 'Cancel',
    buttonPositive: 'OK',
  });

  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    let location;
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        location = {
          latitude: latitude,
          longitude: longitude,
        };
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );

    if (location) {
      yield put(getUserLocationSuccess(location));
    }
  } else {
    console.log('falha');
  }
}

export default all([
  takeLatest('GET_PROFILE_REQUEST', getUser),
  takeLatest('GET_USER_LOCATION_REQUEST', getUserLocation),
]);
