import React, { useEffect, useState } from "react";
import { fetchPokemon } from "./utils";
import { Pokemon } from "./types";

import "./app.css";
import PokemonCard from "./components/PokemonCard";

const App = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    fetchPokemon("bulbasaur").then((res) => setPokemon(res));
  }, []);

  return (
    <div className="appRoot">
      {pokemon ? <PokemonCard pokemon={pokemon} /> : <div>Loading</div>}
    </div>
  );
};

export default App;
