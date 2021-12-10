import React from 'react';
import './PokeList.css';
import { Button } from '@mui/material';

export default function PokeList({ pokemon, setLoading, setPage }) {
  const handleClick = () => {
    setLoading(true);
    setPage((prevState) => ++prevState);
  };

  return (
    <div>
      {/* <button className="nextPage" onClick={handleClick}>
        Next
      </button> */}
      <div className="table">
        {pokemon.map((poke) => (
          <p key={poke.id} className="pokeCard">
            <img alt={poke.id} src={poke.url_image} />
            <span className="nameUpper">{poke.pokemon}</span>
            <span>HP: {poke.hp}</span>
            <span>Attack: {poke.attack}</span>
            <span>Defense: {poke.attack}</span>
            <span>Type: {poke.type_1}</span>
          </p>
        ))}
      </div>
      <Button
        style={{ backgroundColor: 'teal', color: 'white' }}
        className="nextPage"
        onClick={handleClick}
      >
        Next Page
      </Button>
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
