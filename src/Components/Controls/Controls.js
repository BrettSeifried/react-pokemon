import React from 'react';

export default function Controls({
  query,
  setQuery,
  setLoading,
  order,
  setOrder,
  types,
  setSelectedType,
  selectedType,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="type a name"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <select value={order} onChange={(e) => setOrder(e.target.value)}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
        <option value="">All</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
        {/* <option value="all">All</option>
        <option value="Bug">Bug</option>
        <option value="Fairy">Fairy</option>
        <option value="Ghost">Ghost</option>
        <option value="Normal">Normal</option>
        <option value="Steel">Steel</option>
        <option value="Dark">Dark</option>
        <option value="Fighting">Fighting</option>
        <option value="Grass">Grass</option>
        <option value="Poison">Poison</option>
        <option value="Water">Water</option>
        <option value="Dragon">Dragon</option>
        <option value="Fire">Fire</option>
        <option value="Ground">Ground</option>
        <option value="Psychic">Psychic</option>
        <option value="Electric">Electric</option>
        <option value="Flying">Flying</option>
        <option value="Ice">Ice</option>
        <option value="Rock">Rock</option> */}
      </select>
      <button onClick={() => setLoading(true)}>Find Pokemon</button>
    </div>
  );
}
