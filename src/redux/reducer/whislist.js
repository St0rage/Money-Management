const initWhislistState = {
  whislistDetail: {},
  whislistTransactions: [],
};

export const whislistReducer = (state = initWhislistState, action) => {
  if (action.type === 'SET_WHISLIST_DETAIL') {
    return {
      ...state,
      whislistDetail: action.value,
    };
  }
  if (action.type === 'SET_WHISLIST_TRANSACTIONS') {
    return {
      ...state,
      whislistTransactions: action.value,
    };
  }
  if (action.type === 'SET_WHISLIST_TRANSACTIONS_PUSH') {
    return {
      ...state,
      whislistTransactions: [...state.whislistTransactions, ...action.value],
    };
  }
  return state;
};
