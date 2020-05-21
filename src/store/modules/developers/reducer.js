const INITIAL_STATE = {
  devs: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_DEVELOPERS':
      return {
        devs: action.payload,
      };
    default:
      return state;
  }
};
