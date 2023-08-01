class Department {
  private employees: string[] = [];

  constructor(private name: string) {}

  describe(this: Department) {
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfomration() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDeaprtment extends Department {
  constructor(public admins: string[]) {
    super('IT');
  }
}

const accounting = new Department('Accounting');

accounting.addEmployee('Nanu');
accounting.addEmployee('Naruto');

accounting.printEmployeeInfomration();
