import React from 'react';
import './App.css';
import Square from './Square';

export default function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(' '));

  function handleClick(i) {
    const nextSquares = squares.slice();
    nextSquares[i] = 'X';
    setSquares(nextSquares);
  }

  return (
    <main>
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


