interface Person {
  readonly name: string;
  age: number;

  greet(phrase: string): void;
}

class User implements Person {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase);
  }
}

let user1: Person;

user1 = {
  name: 'Nanu',
  age: 25,
  greet(phrase: string) {
    console.log(phrase);
  },
};
