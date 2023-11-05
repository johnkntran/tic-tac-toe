import React from 'react';
import './App.css';
import Board from './Board';

export default function Game() {
  const [history, setHistory] = React.useState([Array(9).fill(' ')]);
  const [currentMove, setCurrentMove] = React.useState(0);
  const xTurn = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function teleportTo(nextMove) {
    setCurrentMove(nextMove);
  }

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


