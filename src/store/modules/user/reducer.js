const INITIAL_STATE = {
  userProfile: null,
  userLocation: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_PROFILE_SUCCESS':
      return {
        ...state,
        userProfile: action.payload,
      };
    case 'GET_USER_LOCATION_SUCCESS':
      return {
        ...state,
        userLocation: action.payload,
      };
    default:
      return state;
  }
};
