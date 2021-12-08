import React from 'react';

// function filterPokemon() {
//   return pokemon.filter((obj => {
//     return obj.pokemon.cinludes(query) && (obj.)
//   }))
// }

export default function PokeList({ pokemon }) {
  return (
    <div>
      {pokemon.map((poke) => (
        <p key={poke.id}>
          {poke.pokemon}
          <img alt={poke.pokemon} src={poke.url_image}></img>
        </p>
      ))}
      ;
    </div>
  );
}
