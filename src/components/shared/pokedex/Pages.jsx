import React from 'react';
import './styles/pokePages.css';

const Pages = ({paginate, setPaginate, total}) => {

  const handleLess = (num) => {
    if (paginate > num) {
      setPaginate(paginate - num);
    } else {
      setPaginate(total);
    }
  }

  const handlePlus = (num) => {
    if (paginate <= total - num) {
      setPaginate(paginate + num);
    } else {
      setPaginate(1);
    }
  }

  return (
    <div className='pokepages'>
      <button onClick={() => {handleLess(55)}}>{'<<<'}</button>
      <button onClick={() => {handleLess(8)}}>{'<<'}</button>
      <button onClick={() => {handleLess(1)}}>{'<'}</button>
      <span>{paginate} / {total}</span>
      <button onClick={() => {handlePlus(1)} }>{'>'}</button>
      <button onClick={() => {handleLess(8)}}>{'>>'}</button>
      <button onClick={() => {handleLess(55)}}>{'>>>'}</button>
    </div>
  )
}

export default Pages;