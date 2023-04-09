import React, { useContext } from "react";
import Favs from "./Favs";
import { GlobalContext } from "../../../Context/GlobalContext";

const FavsContainer = () => {
  const {state} = useContext(GlobalContext)
  return (
    <div>
      <Favs favs={state.favs}/>
      
    </div>
  );
};

export default FavsContainer;
