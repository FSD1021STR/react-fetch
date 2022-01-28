import React from "react";
import { Route, Routes } from "react-router";
import PokemonPage from "./pages/pokemon";
import PokemonView from "./pages/pokemon.view";
import PokemonTypes from "./pages/pokemon.types";

const Navigator = () => {
  return (
    <Routes>
      <Route path="/" element={<PokemonPage />} />
      <Route path="/home" element={<PokemonPage />} />
      <Route path="/pokemon" element={<PokemonPage />} />
      <Route path="/pokemon/:name" element={<PokemonView />} />
      <Route path="/types" element={<PokemonTypes />} />
    </Routes>
  );
};
export default Navigator;
