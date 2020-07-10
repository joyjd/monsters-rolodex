import React from 'react';
import './card-list.css';
import { Cards } from '../cards/cards.component';

export const CardList = (props) => {
  return (
    <div className='cardlist'>
      {props.monsters.map((monsters) => (
        <Cards key={monsters.id}>{monsters}</Cards>
      ))}
    </div>
  );
};
