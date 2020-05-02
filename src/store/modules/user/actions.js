export function getProfileRequest() {
  return {
    type: 'GET_PROFILE_REQUEST',
  };
}

export function getProfileSuccess(profile) {
  return {
    type: 'GET_PROFILE_SUCCESS',
    payload: profile,
  };
}

export function getProfileFailure() {
  return {
    type: 'GET_PROFILE_FAILURE',
  };
}

export function getUserLocationRequest() {
  return {
    type: 'GET_USER_LOCATION_REQUEST',
  };
}

export function getUserLocationFailure() {
  return {
    type: 'GET_USER_LOCATION_FAILURE',
  };
}

export function getUserLocationSuccess(location) {
  return {
    type: 'GET_USER_LOCATION_SUCCESS',
    payload: location,
  };
}
