// const names = ['Max', 'Manuel'];
// const places: Array<string> = [];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000);
// });

function merge<T extends Object, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Nanu', hobbies: 'cinema' }, { age: 25 });
console.log(mergedObj.name);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length > 0) {
    descriptionText = 'Got ' + element.length + 'elements.';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there!'));
