export function calculateWinner(square, numColumns) {
  const symbols = ["X", "O"];

  for (let s = 0; s < symbols.length; s++) {
    const symbol = symbols[s];

    // controllo righe
    for (let j = 0; j < numColumns; j++) {
      let t = 0;
      for (let i = 0; i < numColumns; i++) {
        if (square[j * numColumns + i] === symbol) {
          t++;
        } else {
          break;
        }
      }
      if (t === numColumns) {
        return symbol;
      }
    }

    //controllo colonne
    for (let j = 0; j < numColumns; j++) {
      let t = 0;
      for (let i = 0; i < numColumns; i++) {
        if (square[j + i * numColumns] === symbol) {
          t++;
        } else {
          break;
        }
      }
      if (t === numColumns) {
        return symbol;
      }
    }

    //controllo diagolane da i = 0
    let t = 0;
    for (let i = 0; i < numColumns; i++) {
      if (square[i * numColumns + i] === symbol) {
        t++;
      } else {
        break;
      }
    }
    if (t === numColumns) {
      return symbol;
    }

    //controllo diagolane da i = 2
    let x = 0;
    for (let i = 0; i < numColumns; i++) {
      if (square[numColumns * (i + 1) - (i + 1)] === symbol) {
        x++;
      } else {
        break;
      }
    }
    if (x === numColumns) {
      return symbol;
    }
  }
}
