import React, { createContext, useReducer } from "react";

export const GlobalContext = createContext();
const initialState = {
  odontologist: {},
  odontologists: [],
  favs: [],
  dark: false,
};
const globalReducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTIST":
      return { ...state, odontologists: action.payload };
    case "DARK_MODE":
        return {...state, dark: !state.dark}
    default:
      state;
  }
};

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);
  
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
