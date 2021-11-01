import React from "react";
import { Stat } from "../types";
import "./pokemonStat.css";

type PokemonStatProps = {
  stat: Stat;
};

const PokemonStat = ({ stat }: PokemonStatProps) => {
  return (
    <div className="stat-container">
      <div className="stat-name">{stat.stat.name}</div>
      <div className="stat">{stat.base_stat}</div>
    </div>
  );
};

export default PokemonStat;
