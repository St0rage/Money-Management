const initPiggyBankState = {
  piggyBankDetail: {},
  piggyBankTransactions: [],
  refreshPiggyBank: 0,
};

export const piggyBankReducer = (state = initPiggyBankState, action) => {
  if (action.type === 'SET_PIGGYBANK_DETAIL') {
    return {
      ...state,
      piggyBankDetail: action.value,
    };
  }
  if (action.type === 'SET_PIGGYBANK_TRANSACTIONS') {
    return {
      ...state,
      piggyBankTransactions: action.value,
    };
  }
  if (action.type === 'SET_PIGGYBANK_TRANSACTIONS_PUSH') {
    return {
      ...state,
      piggyBankTransactions: [...state.piggyBankTransactions, ...action.value],
    };
  }
  if (action.type === 'SET_REFRESH_PIGGYBANK') {
    return {
      ...state,
      refreshPiggyBank: state.refreshPiggyBank + 1,
    };
  }

  return state;
};
