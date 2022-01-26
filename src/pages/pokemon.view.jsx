import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

const PokemonView = (props) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
      //url https://pokeapi.co/api/v2/pokemon/

  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: "50px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={pokemon?.sprites?.front_default} alt="pokemon" />
      <h1>{pokemon?.name}</h1>
      <button onClick={() =>(-1)}>Back</button>
    </div>
  );
};
export default PokemonView;
