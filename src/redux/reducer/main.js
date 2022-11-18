const initMainState = {
  balance: {},
  piggyBanks: [],
  whislist: [],
};

export const mainReducer = (state = initMainState, action) => {
  if (action.type === 'SET_BALANCE') {
    return {
      ...state,
      balance: action.value,
    };
  }
  if (action.type === 'SET_PIGGYBANKS') {
    return {
      ...state,
      piggyBanks: action.value,
    };
  }
  if (action.type === 'SET_WHISLISTS') {
    return {
      ...state,
      whislists: action.value,
    };
  }
  return state;
};
