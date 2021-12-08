import './App.css';
import { getPokemon } from './services/pokemon';
import { useEffect, useState } from 'react';
import PokeList from './Components/PokeList/PokeList';
import Controls from './Components/Controls/Controls';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query);
      setPokemon(data.results);
      setLoading(false);
      console.log(data);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query]);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      {loading && <span className="load"></span>}
      {!loading && (
        <>
          <Controls query={query} setQuery={setQuery} setLoading={setLoading} />
          <PokeList pokemon={pokemon} />
        </>
      )}
    </div>
  );
}

export default App;
