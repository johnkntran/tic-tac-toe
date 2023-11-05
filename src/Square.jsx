import React from 'react';

export default function Square() {
  const [num, setNum] = React.useState(' ');

  function handleClick() {
    setNum('X');
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {num}
    </button>
  );
}
