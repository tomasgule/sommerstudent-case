import { Pokemon } from "../types";
import "./pokemonCard.css";
import PokemonImage from "./PokemonImage";
import PokemonStat from "./PokemonStat";
import Type from "./Type";

type PokemonCardProps = {
  pokemon: Pokemon;
};

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  console.log(pokemon);
  return (
    <div className="pokemon-card">
      <div className="image-and-info">
        <PokemonImage
          src={pokemon.sprites.other.dream_world.front_default}
          name={pokemon.name}
          types={pokemon.types}
        />
        <div className="image-info">
          <p>{`Id: ${pokemon.id} Weight: ${pokemon.weight} hg  Height: ${pokemon.height} dm`}</p>
        </div>
      </div>
      <h1>{pokemon.name.toUpperCase()}</h1>
      <div className="types">
        {pokemon.types.map((type) => {
          return <Type key={type.type.name} type={type.type.name} />;
        })}
      </div>
      <div className="stats">
        {pokemon.stats.map((stat) => {
          return <PokemonStat key={stat.stat.name} stat={stat} />;
        })}
      </div>
    </div>
  );
};

export default PokemonCard;
