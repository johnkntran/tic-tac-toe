import './App.css';
import Square from './Square';

export default function Board() {
  return (
    <main>
      <section className="board-row">
        <Square num="1" />
        <Square num="2" />
        <Square num="3" />
      </section>
      <section className="board-row">
        <Square num="4" />
        <Square num="5" />
        <Square num="6" />
      </section>
      <section className="board-row">
        <Square num="7" />
        <Square num="8" />
        <Square num="9" />
      </section>
    </main>
  );
}


