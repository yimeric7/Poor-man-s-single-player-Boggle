import React, { useState, useEffect } from 'react';
import Board from '../components/Board';

const generateRandomBoard = (boardSize) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var randomBoard = [];
  for (var i = 0; i < boardSize; i++) {
    randomBoard.push([]);
  }

  for (var i = 0; i < boardSize; i++) {
    for (var j = 0; j < boardSize; j++) {
      randomBoard[i][j] = letters.charAt(
        Math.floor(Math.random() * letters.length)
      );
    }
  }

  return randomBoard;
};

export default function Game() {
  const boardSize = 4;
  const [randomBoard, setRandomBoard] = useState([[]]);

  // Generate 4x4 Board on load
  useEffect(() => {
    setRandomBoard(generateRandomBoard(boardSize));
  }, []);

  // Generate new 4x4 matrix of letters
  const handleClick = () => {
    setRandomBoard(generateRandomBoard(boardSize));
  };

  // Send this board off w/ API call to generate all possible words

  return (
    <>
      <h1>Game Page</h1>
      <Board boardSize={boardSize} board={randomBoard} />
      <button onClick={handleClick}>New Board</button>
    </>
  );
}
