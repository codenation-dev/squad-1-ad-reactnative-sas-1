export function getAuthToken() {
  return {
    type: 'GET_AUTH_TOKEN',
  };
}

export function signInRequest() {
  return {
    type: 'SIGN_IN_REQUEST',
  };
}

export function signInSuccess(token) {
  return {
    type: 'SIGN_IN_SUCCESS',
    payload: token,
  };
}

export function signFailure() {
  return {
    type: 'SIGN_FAILURE',
  };
}

export function signOut() {
  return {
    type: 'SIGN_OUT',
  };
}
