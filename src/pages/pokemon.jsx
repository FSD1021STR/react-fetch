import React, { useEffect, useState } from "react";
import PokemonCard from "../components/pokemonCard/pokemonCard";

const PokemonPage = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    
    fetch(
      "https://pokeapi.co/api/v2/pokemon/?limit=150",
      requestOptions
    )
      .then((response) => response.json())
      .then((json) => setPokemons(json.results));
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
      <h1> Pokemon List</h1>
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
