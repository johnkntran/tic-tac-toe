import React from 'react';
import './App.css';
import Square from './Square';
import { calculateWinner } from './utils';

export default function Board() {
  const [xTurn, setXTurn] = React.useState(true);
  const [squares, setSquares] = React.useState(Array(9).fill(' '));

  const winner = calculateWinner(squares);
  const msg = winner ? `Winner: ${winner}` : `Next Player: ${xTurn ? 'X' : 'O'}`;

  function handleClick(i) {
    if (squares[i] !== ' ' || winner) return;
    const nextSquares = squares.slice();
    const nextVal = xTurn ? 'X' : 'O';
    nextSquares[i] = nextVal;
    setSquares(nextSquares);
    setXTurn(!xTurn);
  }

  return (
    <main>
      <aside className="status">{msg}</aside>
      <section className="board-row">
        <Square num={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square num={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square num={squares[2]} onSquareClick={() => handleClick(2)} />
      </section>
      <section className="board-row">
        <Square num={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square num={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square num={squares[5]} onSquareClick={() => handleClick(5)} />
      </section>
      <section className="board-row">
        <Square num={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square num={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square num={squares[8]} onSquareClick={() => handleClick(8)} />
      </section>
    </main>
  );
}


