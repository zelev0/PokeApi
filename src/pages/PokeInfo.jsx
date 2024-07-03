import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './styles/pokeInfo.css';

const PokeInfo = () => {

  const [pokemon, getPokemon] = useFetch();

  const { id } = useParams();

  useEffect(() => {
     const url =`https://pokeapi.co/api/v2/pokemon/${id}`;
    getPokemon(url);
  }, []);
  
  console.log(pokemon);

  return (
    <section className='pokeinfo'>
      <div className='pokeinfo__cont'>       
        <figure className='pokeinfo__img'>
         <div className='pokeinfo__back'></div>
            <img className='pokeinfo__normal'src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon image" />
          </figure>
        <div className='pokeinfo__info'>
            <h3 className='pokeinfo__num' >#{pokemon?.id}</h3>
          <div className='pokeinfo__info1'>
            <hr className='pokeinfo__hr'/>
            <h3 className='pokeinfo__name' > {pokemon?.name}  </h3>
            <hr className='pokeinfo__hr' />
          </div>
          <div className='pokeinfo__fisic'>
            <div className='pokeinfo__height1'>
              <span className='pokeinfo__span'>height</span>
              <h2 className='pokeinfo__height'>{pokemon?.height}</h2>
            </div>
            <div className='pokeinfo__weight1'> 
              <span className='pokeinfo__span'>weight</span>
              <h2 className='pokeinfo__weight'>{pokemon?.weight}</h2>
            </div>
          </div>
          <div className='pokeinfo__other'>
            <div className='pokeinfo__type1'>
              <span className='pokeinfo__span'>Type:</span>
              <ul className='pokeinfo__types'>
                  {
                    pokemon?.types.map((type, index) => (
                    <li className={`slot__${type.slot} ${pokemon?.types[index]?.type.name}`} key={type.type.url}>
                      {type.type.name} 
                    </li>
                      ))
                  }
              </ul>
            </div>
            <div className='pokeinfo__ability1'>
              <span className='pokeinfo__span'>abilities:</span>
              <ul className='pokeinfo__abilities1'>
                {
                  pokemon?.abilities.map((ability, index) => (
                  <li className='pokeinfo__abilities' key={ability.ability.url}>
                    {ability.ability.name} 
                  </li>
                    ))
                }
              </ul>
            </div>

          </div>
        </div>
        <div className='pokeinfo__title'>
          <span>stats</span>
          <hr className='pokeinfo__hr hr2'/>

        </div>
        <ul className='pokeinfo__stats'>
        {
          pokemon?.stats.map(stat => (
            <li className='pokeinfo__stats-item' key={stat.stat.url}>
              <span>{stat.stat.name}</span><span>{stat.base_stat}/250</span>
              <div className='outbar'>
                <div className='inbar' style={{width: `${stat.base_stat/2.5}%`}}></div>
              </div>
            </li>
          ))
        }
        </ul>
      </div>
      <div className='pokeinfo__cont moves1'>
        <div className='pokeinfo__title'>
          <span>movements</span>
          <hr className='pokeinfo__hr hr2'/>
        </div>
          {
            pokemon?.moves.map(move => (
            <li className='pokeinfo__moves' key={move.move.url}>
              {move.move.name} 
            </li>
            ))
          }
      </div>
    </section>
  )
}

export default PokeInfo;