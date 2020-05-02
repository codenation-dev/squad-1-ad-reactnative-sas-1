const INITIAL_STATE = {
  token: null,
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_AUTH_TOKEN':
      return {
        token: null,
        isLoading: true,
      };
    case 'SIGN_IN_SUCCESS':
      return {
        token: action.payload,
        isLoading: false,
      };
    case 'SIGN_FAILURE':
      return {
        token: null,
        isLoading: false,
      };
    case 'SIGN_OUT':
      return {
        token: null,
        isLoading: false,
      };
    default:
      return state;
  }
};
