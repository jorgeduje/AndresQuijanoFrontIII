import React, { createContext, useReducer } from "react";

export const GlobalContext = createContext();
const initialState = {
  odontologists: [],
  odontologist: {},
  favs: JSON.parse(localStorage.getItem("favs")) || [],
  dark: false,
};

const remFav = (id, state)=>{
  const newArr = state.favs.filter((fav) => fav.id !== id)
  localStorage.setItem("favs", JSON.stringify(newArr))
  return newArr
}

const globalReducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, odontologists: action.payload };
    case "GET_DENTIST":
      return { ...state, odontologist: action.payload };
    case "FAVORITES":
      const isFav = state.favs.some(fav => fav.id === action.payload.id)
      isFav ? remFav(action.payload.id, state) : localStorage.setItem("favs" , JSON.stringify([...state.favs, action.payload]))
      return isFav ? {...state, favs: remFav(action.payload.id, state)} : { ...state, favs: [...state.favs, action.payload] };
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
