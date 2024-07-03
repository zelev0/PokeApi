import React, { useEffect } from 'react'
import useFetch from '../../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import './styles/pokeCard.css';

const PokeCard = ({url}) => {

    const [pokemon, getPokemon] = useFetch();

    const navigate = useNavigate();

    useEffect(() => {
      getPokemon(url)
    }, []);

    const handleClick = () => {
      navigate(`/pokedex/${pokemon.id}`);
    }

  return (
    <article className={`pokecard ${pokemon?.types[0].type.name}`} onClick={handleClick}>
      <div className={`pokecard__back ${pokemon?.types[0].type.name}`}></div>
        <figure className='pokecard__img'>
            <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon image" />
        </figure>
        <h3 className='pokecard__name'>{pokemon?.name}</h3>
        <span className='pokecard__span'>Type :</span>
        <ul className='pokecard__types'>
            {
                pokemon?.types.map((type, index) => (
                  <li className={`slot__${type.slot} ${pokemon?.types[index]?.type.name}`} key={type.type.url}>
                    {type.type.name}
                  </li>
                ))
            }
        </ul>
        <hr className='pokecard__hr' />
        <div>
          <ul className='pokecard__stats'>
            {
              pokemon?.stats.map(stat => (
                !stat.stat.name.includes('special') && 
                <li key={stat.stat.url}>
                  <span className='pokecard__stats1'>{stat.stat.name}</span>
                  <span className='pokecard__stats2' >{stat.base_stat}</span>
                </li>
              ))
            }
          </ul>
        </div>
    </article>
  )
}

export default PokeCard;