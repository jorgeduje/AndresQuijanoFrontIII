import React, { createContext, useReducer } from "react";

export const GlobalContext = createContext();
const initialState = {
  odontologists: [],
  odontologist: {},
  favs: [],
  dark: false,
};
const globalReducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, odontologists: action.payload };
    case "GET_DENTIST":
      return { ...state, odontologist: action.payload };
    case "FAVORITES":
      return { ...state, favs: [...state.favs, action.payload] };
    case "DARK_MODE":
      return { ...state, dark: !state.dark };
    default:
      state;
  }
};

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <div className={state.dark ? "light" : "dark"}>{children}</div>
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
