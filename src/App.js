import logo from './logo.svg';
import './App.css';
import { getPokemon } from './services/pokemon';
import { useEffect, useState } from 'react';
import PokeList from './Components/PokeList/PokeList';

function App() {
  const [pokemon, setPokemon] = useState('');
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query)
      setPokemon(data.results);
      setTimeout(() => {
        setLoading(false);
      } 2000);
    })
    };
    fetchData();
  }, [loading]);
  return () => {
    <div className="app">
      <PokeList pokemon={pokemon}/>
    </div>;
  };
}

export default App;
