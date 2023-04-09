import React from "react";
import CardDentist from "../../Common/CardDentist/CardDentist";
import stylesDentists from "./Dentists.module.css";

const Dentists = ({ odontologists, dispatch, favs }) => {
  return (
    <div className={stylesDentists.container }>
      
      
      {odontologists.map((odontologist) => {
        return (
          <div className={stylesDentists.tarjeta }>

            <CardDentist key={odontologist.id} dispatch={dispatch} odontologist={odontologist} favs={favs}/>
          </div>
        );
      })}
    </div>
  );
};

export default Dentists;
