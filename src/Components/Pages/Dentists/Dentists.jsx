import React from "react";
import CardDentist from "../../Common/CardDentist/CardDentist";


const Dentists = ({ odontologists, dispatch, favs }) => {
  return (
    <div>
      <h1>Dentists</h1>
      
      {odontologists.map((odontologist) => {
        return (
          <CardDentist key={odontologist.id} dispatch={dispatch} odontologist={odontologist} favs={favs}/>
        );
      })}
    </div>
  );
};

export default Dentists;
