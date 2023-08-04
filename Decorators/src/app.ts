function Logger(constructor: Function) {
  console.log('logging...');
  console.log(constructor);
}

@Logger
class Person {
  name = 'Nanu';

  constructor() {
    console.log('Creating a new person...');
  }
}

const pers = new Person();

console.log(pers);
