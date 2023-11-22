interface AppState {
  balance: number;
}

type AppAction = { type: 'deposit' | 'withdraw'; payload: number };

const reducer = (state: AppState = { balance: 1000 }, action: AppAction): AppState => {
  switch (action.type) {
    case 'deposit':
      return { ...state, balance: state.balance + action.payload };
    case 'withdraw':
      return { ...state, balance: state.balance - action.payload };
    default:
      return state;
  }
};

export default reducer;
