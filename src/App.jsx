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

  function teleportTo(nextMove) {}

  const moves = history.map((squares, move) => {
    const description = move === 0 ? 'Go to game start' : `Go to Move #${move}`;
    return (
      <li key={move}>
        <button onClick={() => teleportTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <main className="game">
      <div className="game-board">
        <Board xTurn={xTurn} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </main>
  );
}


