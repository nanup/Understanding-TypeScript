const add = (n1: number, n2: number) => {
  return n1 + n2;
};

const printResult = (number: number) => {
  console.log("Result: " + number);
};

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8))