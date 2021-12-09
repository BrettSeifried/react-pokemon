import React from 'react';

export default function PokeList({ pokemon, setLoading, setPage }) {
  const handleClick = () => {
    setLoading(true);
    setPage((prevState) => ++prevState);
  };

  return (
    <div className="table">
      <div>
        <button className="nextPage" onClick={handleClick}>
          Next
        </button>
        {pokemon.map((poke) => (
          <p key={poke.id} className="pokeCard">
            <img alt={poke.id} src={poke.url_image} />
            <span>name: {poke.pokemon}</span>
            <span>HP: {poke.hp}</span>
            <span>Attack: {poke.attack}</span>
            <span>Defense: {poke.attack}</span>
            <span>Type: {poke.type_1}</span>
          </p>
        ))}
        <button className="next" onClick={handleClick}>
          Next Page
        </button>
      </div>
    </div>
  );
}

{
  /* {pokemon.map((poke) => (
  <p key={poke.id}>
    {poke.pokemon}
    <img alt={poke.pokemon} src={poke.url_image}></img>
  </p>
))}
; */
}
