const LETTER_POOL = {
  A: 9,
  B: 2,
  C: 2,
  D: 4,
  E: 12,
  F: 2,
  G: 3,
  H: 2,
  I: 9,
  J: 1,
  K: 1,
  L: 4,
  M: 2,
  N: 6,
  O: 8,
  P: 2,
  Q: 1,
  R: 6,
  S: 4,
  T: 6,
  U: 4,
  V: 2,
  W: 2,
  X: 1,
  Y: 2,
  Z: 1,
};

let LETTER_LIST = [];
for (const property in LETTER_POOL) {
  for (let i = 0; i < LETTER_POOL[property]; i++) {
    LETTER_LIST.push(property);
  } ;
}

export const drawLetters = () => {
  const LETTER_COPY = [...LETTER_LIST];
  let cards = [];

  for (let i = 0; i < 10; i++) {
    let letterIndex = Math.floor(Math.random() * LETTER_COPY.length);
      cards.push(LETTER_COPY[letterIndex]);
      LETTER_COPY.splice(letterIndex, 1)
  };
  return cards;
};

console.log(drawLetters());

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
