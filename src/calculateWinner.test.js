/* eslint-disable no-undef */
import { calculateWinner } from "./calculateWinner";

// test("example 2*2", () => {
//   expect(calculateWinner(["O", "X", null, "O"])).toBe("O");
//   expect(calculateWinner(["X", "O", "X", null])).toBe("X");
// });

describe("example 3*3", () => {
  test("test righe", () => {
    expect(
      calculateWinner(["X", "X", "X", null, "O", "O", "O", null, "O"], 3)
    ).toBe("X");

    expect(
      calculateWinner([null, "O", "O", "O", null, "O", "X", "X", "X"], 3)
    ).toBe("X");
  });

  test("test colonne", () => {
    expect(
      calculateWinner(["X", "O", "O", "X", null, "O", "X", "X", "X"], 3)
    ).toBe("X");

    expect(
      calculateWinner(["O", "O", "X", "O", null, "X", "X", "X", "X"], 3)
    ).toBe("X");
  });

  test("test diagonale dx", () => {
    expect(
      calculateWinner(["X", "O", "O", "O", "X", "O", null, "X", "X"], 3)
    ).toBe("X");
  });

  test("test diagonale sx", () => {
    expect(
      calculateWinner(["O", "O", "X", "O", "X", "O", "X", "X", null], 3)
    ).toBe("X");

    expect(
      calculateWinner(["X", null, null, null, "O", null, null, null, "X"], 3)
    ).toBe(undefined);
  });

  // Non vince nessuno
  expect(
    calculateWinner(["O", "O", "X", "O", null, null, "X", "X", "O"], 3)
  ).toBe(undefined);
});
