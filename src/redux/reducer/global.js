const initGlobalState = {
  isLoading: false,
  isLoadingAlert: false,
};

export const globalReducer = (state = initGlobalState, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      isLoading: action.value,
    };
  }
  if (action.type === 'SET_LOADING_ALERT') {
    return {
      ...state,
      isLoadingAlert: action.value,
    };
  }
  return state;
};
