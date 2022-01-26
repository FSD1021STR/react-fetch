import React from "react";
import { useNavigate } from "react-router";
import "./pokemonCard.css";

const PokemonCard = (props) => {
  return (
    <div
      className="_container"
      onClick={() => }
    >
      <img
        src="https://i.ebayimg.com/images/g/foMAAOxyA4ZRU1C2/s-l300.jpg"
        width="150px"
        height="150px"
      />
      <div>
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
