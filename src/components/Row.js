import React from 'react';
import Letter from './Letter';
import '../styles/board';

export default function Board({ boardRow }) {
  
  return (
    <div class="row">
      {boardRow.map((board, i) => {
            return <Letter boardLetter ={...board}/>
        })}
    </div>
  );
}