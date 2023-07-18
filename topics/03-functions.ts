function addNumber(a: number, b: number) {
  return a + b;
}

/* Funciones de flecha */

const AddNumberArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

function multiply(firts: number, second?: number, base: number = 2) {
  return firts * base;
}

const result: number = addNumber(12, 2);
const result2: number = AddNumberArrow(1, 3);
// console.log({ result, result2 });
// console.log(multiply(3));

const healCharacter = (character, amount) => {};
