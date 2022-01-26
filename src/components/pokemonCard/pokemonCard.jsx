import React from "react";
import { useNavigate } from "react-router";
import "./pokemonCard.css";

const PokemonCard = (props) => {
  const navigate = useNavigate();
  return (
    <div
      className="_container"
      onClick={() => navigate(`/pokemon/${props.name}`)}
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
