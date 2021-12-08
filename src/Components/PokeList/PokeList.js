import React from 'react';

export default function PokeList({ pokemon }) {
  return (
    <div>
      {pokemon.map((poke) => (
        <p key={poke.id}>
          {poke.pokemon}
          {/* <img
            alt={poke.pokemon}
            src={`http://assets.pokemon.com/assets/cms2/img/pokedex/full/${poke.species_id}.png`}
          ></img> */}
        </p>
      ))}
      ;
    </div>
  );
}
