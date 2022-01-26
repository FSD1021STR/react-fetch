import React, { useEffect, useState } from "react";
import PokemonCard from "../components/pokemonCard/pokemonCard";

const PokemonPage = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
      //url "https://pokeapi.co/api/v2/pokemon/?limit=100&offset=200"

  }, []);

  return (
    <div
      style={{
        width: "100%",
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Pokemon List</h1>
      <div
        style={{
          marginLeft: "20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {pokemons.map((pokemon) => (
          <PokemonCard name={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    </div>
  );
};
export default PokemonPage;
