import React from 'react';
import './App.css';
import Board from './Board';

export default function Game() {
  const [xTurn, setXTurn] = React.useState(true);
  const [history, setHistory] = React.useState([Array(9).fill(' ')]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXTurn(!xTurn);
  }

  return (
    <main className="game">
      <div className="game-board">
        <Board xTurn={xTurn} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </main>
  );
}


