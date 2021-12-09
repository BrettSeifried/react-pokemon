import './App.css';
import { getPokemon } from './services/pokemon';
import { useEffect, useState } from 'react';
import PokeList from './Components/PokeList/PokeList';
import Controls from './Components/Controls/Controls';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [order, setOrder] = useState('asc');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, order, page);
      setPokemon(data.results);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query, order, page]);

  return (
    <div className="App">
      <h1>Pokedex</h1>
      {loading && <span className="loader"></span>}
      {!loading && (
        <>
          <Controls
            query={query}
            setQuery={setQuery}
            setLoading={setLoading}
            // order={order}
            setPokemon={setPokemon}
            setOrder={setOrder}
          />
          <PokeList pokemon={pokemon} setPage={setPage} setLoading={setLoading} />
        </>
      )}
    </div>
  );
}

export default App;
