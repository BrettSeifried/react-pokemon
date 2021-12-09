export async function getPokemon(query, order, page) {
  const params = new URLSearchParams();
  params.set('pokemon', query);
  params.set('sort', 'pokemon');
  params.set('direction', order);
  params.set('page', page);
  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}?perPage=20`
  );
  const data = await resp.json();
  return data;
}
