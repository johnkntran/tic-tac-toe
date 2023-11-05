import Square from './Square';
import { calculateWinner } from './utils';

export default function Board(props) {

  const winner = calculateWinner(props.squares);
  const msg = winner ? `Winner: ${winner}` : `Next Player: ${props.xTurn ? 'X' : 'O'}`;

  function handleClick(i) {
    if (props.squares[i] !== ' ' || winner) return;
    const nextSquares = props.squares.slice();
    const nextVal = props.xTurn ? 'X' : 'O';
    nextSquares[i] = nextVal;
    props.onPlay(nextSquares);
  }

  return (
    <article>
      <aside className="status">{msg}</aside>
      <section className="board-row">
        <Square num={props.squares[0]} onSquareClick={() => handleClick(0)} />
        <Square num={props.squares[1]} onSquareClick={() => handleClick(1)} />
        <Square num={props.squares[2]} onSquareClick={() => handleClick(2)} />
      </section>
      <section className="board-row">
        <Square num={props.squares[3]} onSquareClick={() => handleClick(3)} />
        <Square num={props.squares[4]} onSquareClick={() => handleClick(4)} />
        <Square num={props.squares[5]} onSquareClick={() => handleClick(5)} />
      </section>
      <section className="board-row">
        <Square num={props.squares[6]} onSquareClick={() => handleClick(6)} />
        <Square num={props.squares[7]} onSquareClick={() => handleClick(7)} />
        <Square num={props.squares[8]} onSquareClick={() => handleClick(8)} />
      </section>
    </article>
  );
}


