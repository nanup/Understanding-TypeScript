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
