import React from 'react';
import Row from './Row'

export default function Board({ boardSize, board }) {

  return (
    <>
      <h1>The board:</h1>
      <br></br>
      <div>
        {board.map(board => { return <Row boardRow = {...board}/> })}
      </div>
    </>
  );
}
