const initAuthState = {
  user: {},
};

export const authReducer = (state = initAuthState, action) => {
  if (action.type === 'SET_USER') {
    return {
      ...state,
      user: action.value,
    };
  }
  return state;
};
