import {
  GITHUB_LOGIN,
  FETCH_USER_DATA,
  FETCH_DEVS_AROUND,
  OBTAIN_USER_LOCATION,
} from './actions/types';

const initialState = {
  token: '',
  userData: {},
  developersAround: {},
  userLocation: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GITHUB_LOGIN:
      return {
        ...state,
        token: action.token,
      };
    case FETCH_USER_DATA:
      return {
        ...state,
        userData: action.userData,
      };
    case FETCH_DEVS_AROUND:
      return {
        ...state,
        developersAround: action.developersAround,
      };
    case OBTAIN_USER_LOCATION:
      return {
        ...state,
        userLocation: action.userLocation,
      };
    default:
      return state;
  }
};
