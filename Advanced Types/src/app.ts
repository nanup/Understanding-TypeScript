type Admin = {
  name: string;
  priveleges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployeed = Admin & Employee;

const e1: ElevatedEmployeed = {
  name: 'Nanu',
  priveleges: ['create server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' && typeof b === 'string') {
    return a.toString() + b.toString();
  } else if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
}

const userInputElement = document.getElementById(
  'user-input'
)! as HTMLInputElement;

userInputElement.value = 'hi there!';

interface ErrorContainer {
  [prop: string]: string;
}
