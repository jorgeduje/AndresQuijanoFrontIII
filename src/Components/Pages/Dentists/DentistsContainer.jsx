import axios from "axios";
import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../Context/GlobalContext";

const DentistsContainer = () => {
  const { state, dispatch } = useContext(GlobalContext);
  useEffect(() => {
    const getDentists = axios.get("https://jsonplaceholder.typicode.com/users");
    getDentists
      .then((res) => dispatch({ type: "GET_DENTIST", payload: res.data }))
      .catch((err) => console.log(err));
  }, []);
  console.log(state.odontologists);
  return (
    <div>
      <h1>Hola Profesionales</h1>
    </div>
  );
};

export default DentistsContainer;
