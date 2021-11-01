import React from "react";
import { typeToColor } from "../constats";
import { TypeOfPokemon } from "../types";
import "./pokemonImage.css";

type PokemonImageProps = {
  src: string;
  name: string;
  types: TypeOfPokemon[];
};

const PokemonImage = ({ src, name, types }: PokemonImageProps) => {
  return (
    <div
      className="image-container"
      style={{
        background: `linear-gradient(${typeToColor[types[0].type.name]}, ${
          types[1]
            ? typeToColor[types[1].type.name]
            : typeToColor[types[0].type.name]
        }`,
      }}
    >
      <img src={src} alt={name} />
    </div>
  );
};

export default PokemonImage;
