import React from 'react';

export default function Controls({ query, setQuery, setLoading }) {
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
      <button onClick={() => setLoading(true)}>Seach</button>
    </div>
  );
}
