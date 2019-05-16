import React, { useReducer } from 'react';
import cartReducer from 'reducers';

export const initialState = [];
export const Store = React.createContext();

export function Provider(props) {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>
}
