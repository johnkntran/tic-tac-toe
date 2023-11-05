

export default function Square(props) {
  function handleClick(n) {
    window.alert(`Clicked ${n}!`);
  }

  return (
    <button
      className="square"
      onClick={() => handleClick(props.num)}
    >
      {props.num}
    </button>
  );
}
