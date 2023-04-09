import axios from "axios";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";
import Dentists from "./Dentists";

const DentistsContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);
  useEffect(() => {
    const getDentists = axios.get("https://jsonplaceholder.typicode.com/users");
    getDentists
      .then((res) => dispatch({ type: "GET_DENTISTS", payload: res.data }))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Dentists</h1>
      <Dentists odontologists={state.odontologists} dispatch={dispatch} favs={state.favs}/>
    </div>
  );
};

export default DentistsContainer;
