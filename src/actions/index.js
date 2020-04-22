import {useDispatch} from 'react-redux';

import {
  GITHUB_LOGIN,
  FETCH_USER_DATA,
  FETCH_DEVS_AROUND,
  OBTAIN_USER_LOCATION,
} from './types';

const dispatch = useDispatch();

export const githubLogin = token =>
  dispatch({
    type: GITHUB_LOGIN,
    payload: token,
  });

export const fetchUserData = userData =>
  dispatch({
    type: FETCH_USER_DATA,
    payload: userData,
  });

export const fetchDevsAround = devsAround =>
  dispatch({
    type: FETCH_DEVS_AROUND,
    payload: devsAround,
  });

export const obtainUserLocation = userLocation =>
  dispatch({
    type: OBTAIN_USER_LOCATION,
    payload: userLocation,
  });
