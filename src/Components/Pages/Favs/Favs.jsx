import React from "react";
import CardFav from "../../Common/CardFav/CardFav";


const Favs = ({ favs }) => {
  return (
    <div>
      <h1>Favoritos</h1>
      {favs.map((favs) => {
        return (
        <CardFav key={favs.id} favs={favs}/>
      )})}
    </div>
  );
};

export default Favs;
