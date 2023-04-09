import React from "react";
import CardDentist from "../../Common/CardDentist/CardDentist";


const Dentists = ({ odontologists }) => {
  return (
    <div>
      <h1>Dentists</h1>
      
      {odontologists.map((odontologist) => {
        return (
          <CardDentist key={odontologist.id} numberid={odontologist.id} name={odontologist.name} website={odontologist.website} mail={odontologist.email} phone={odontologist.phone}/>
        );
      })}
    </div>
  );
};

export default Dentists;
