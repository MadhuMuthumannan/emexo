import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        [action.name]: state[action.name] + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        [action.name]: state[action.name] - 1,
      };
    default:
      return state;
  }
};

const useValue = () => useReducer(reducer, initialState);

const Context = createContext(null);

const useGlobalState = () => {
  const value = useContext(Context);
  if (value === null) throw new Error('Please add GlobalStateProvider');
  return value;
};

const GlobalStateProvider = ({ children }) => (
  <Context.Provider value={useValue()}>{children}</Context.Provider>
);

const Counter = ({ name }) => {
  const [state, dispatch] = useGlobalState();
  return (
    <div>
      {state['count']}
      <button onClick={() => dispatch({ type: 'INCREMENT', name })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT', name })}>-1</button>
    </div>
  );
};

const CounterReducer = () => (
  <GlobalStateProvider>
    <div className="container orangeContainer">
      <h1>Count1</h1>
      <Counter name="count" />
    </div>
  </GlobalStateProvider>
);

export default CounterReducer;
