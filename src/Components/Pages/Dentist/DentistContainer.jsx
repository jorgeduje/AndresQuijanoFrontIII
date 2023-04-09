import React, { useContext, useEffect } from "react";
import Dentist from "./Dentist";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GlobalContext } from "../../../Context/GlobalContext";

const DentistContainer = () => {
  const { dispatch, state } = useContext(GlobalContext);
  const { id } = useParams();
  useEffect(() => {
    const getDentist = axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    getDentist
      .then((res) => dispatch({ type: "GET_DENTIST", payload: res.data }))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Dentist odontologist={state.odontologist}/>
    </div>
  );
};

export default DentistContainer;
