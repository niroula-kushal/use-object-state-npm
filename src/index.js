import { useState } from 'react'

const useObjectState = (initialState = {}) => {
  if(typeof initialState !== "object") {
    const msg = "Initial state must be object for useObjectState";
    console.error(msg);
    throw new Error(msg);
  }
  const [state, setState] = useState(initialState);
  const updateState = (newState) => {
    setState({
      ...state,
      ...newState
    });
  };
  return [state, updateState];
}


export {
  useObjectState
};