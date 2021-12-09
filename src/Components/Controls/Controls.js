import React from 'react';

export default function Controls({ query, setQuery, setLoading, order, setOrder }) {
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
      <button onClick={() => setLoading(true)}>Find Pokemon</button>
    </div>
  );
}
