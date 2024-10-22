import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';
import { useEffect } from 'react';

export const PokemonApp = () => {
  const dispatch = useDispatch();
  const { pokemons, isLoading, page } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <div>PokemonApp</div>
      <hr />
      <span>Loading: {isLoading ? 'True' : 'False'}</span>

      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button disabled={isLoading} onClick={() => dispatch(getPokemons(page))}>
        Next
      </button>
    </>
  );
};
