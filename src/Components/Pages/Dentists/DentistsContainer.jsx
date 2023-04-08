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
      <Dentists odontologists={state.odontologists}/>
    </div>
  );
};

export default DentistsContainer;
