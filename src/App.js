import './App.css';
import { getPokemon, getType } from './services/pokemon';
import { useEffect, useState } from 'react';
import PokeList from './Components/PokeList/PokeList';
import Controls from './Components/Controls/Controls';

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [order, setOrder] = useState('asc');
  const [page, setPage] = useState(1);
  const [types, setType] = useState([]);
  const [selectedType, setSelectedType] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemon(query, order, page, selectedType);
      setPokemon(data.results);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, query, order, page, selectedType]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getType();
      setType(data);
    };
    fetchData();
  }, []);

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
            order={order}
            // setPokemon={setPokemon}
            setOrder={setOrder}
            types={types}
            // setType={setType}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
          <PokeList pokemon={pokemon} setPage={setPage} setLoading={setLoading} />
        </>
      )}
    </div>
  );
}

export default App;
