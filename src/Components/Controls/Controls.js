import React from 'react';
import { Button, TextField, Select, MenuItem } from '@mui/material';
import './controls.css';

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
    <div className="working">
      <TextField
        style={{ backgroundColor: 'teal', color: 'white' }}
        type="text"
        placeholder="type a name"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <Select
        style={{ backgroundColor: 'teal', color: 'white' }}
        value={order}
        onChange={(e) => setOrder(e.target.value)}
      >
        <MenuItem value="asc">Ascending</MenuItem>
        <MenuItem value="desc">Descending</MenuItem>
      </Select>
      <Select
        style={{ backgroundColor: 'teal', color: 'white' }}
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        <MenuItem className="working" value="All">
          All
        </MenuItem>
        {types.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
      <Button style={{ backgroundColor: 'teal', color: 'white' }} onClick={() => setLoading(true)}>
        Find Pokemon
      </Button>
    </div>
  );
}
