import { useState } from "react";
import Square from "./Square";
import { calculateWinner } from "../calculateWinner";

function Board() {
  const [inputValue, setinputValue] = useState("");
  const NUM_COLUMNS = inputValue;

  const WIDTH_CELL = 60;
  const [widthParent, setWidthParent] = useState("");

  const [xIsNext, setXIsNext] = useState(true);
  const [square, setSquare] = useState([]);
  // const [square, setSquare] = useState(new Array(NUM_CELL).fill(null));

  // quand inputValue cambia, num cell deve essere ricalcolato in square

  const handleButtonClick = () => {
    const NUM_CELL = Math.pow(inputValue, 2);
    setSquare(new Array(NUM_CELL).fill(null));
    setWidthParent(WIDTH_CELL * inputValue);
  };

  const handleClick = (i) => {
    if (square[i] || calculateWinner(square, NUM_COLUMNS)) {
      return;
    }
    const nextSquares = square.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquare(nextSquares);
    setXIsNext(!xIsNext);
  };

  let status = "Next player: " + (xIsNext ? "X" : "O");

  const winner = calculateWinner(square, NUM_COLUMNS);

  let score = winner ? "The Winner: " + winner : "No one wins";

  return (
    <>
      <div>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
        ></input>
        <button onClick={handleButtonClick}>Start</button>
      </div>

      <div className="status">{status}</div>
      <div className="board" style={{ width: widthParent }}>
        <div>
          {square.map((_, i) => {
            return (
              <Square
                value={square[i]}
                key={i}
                onSquareClick={() => handleClick(i)}
              />
            );
          })}
        </div>
      </div>
      <div className="status score">{score}</div>
    </>
  );
}

export default Board;

// function calculateWinner(square) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     console.log([a, b, c]);
//     if (square[a] && square[a] === square[b] && square[a] === square[c]) {
//       return square[a];
//     }
//   }
//   return null;
// }

// inpunt dsinamico all'inizio del gioco
// colori di verde le celle che hanno vinto
