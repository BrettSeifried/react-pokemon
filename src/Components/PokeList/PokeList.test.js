import { render } from '@testing-library/react';
import PokeList from './PokeList';

test('Renders Pokemon Name', () => {
  const pokeName = render(<PokeList pokemon={['pikachu']} />);
  expect(pokeName).toMatchSnapshot();
});
