abstract class Department {
  private employees: string[] = [];
  name: string;
  private lastReport: string;

  constructor(name: string) {
    this.name = name;
  }

  get mostRecentReport() {
    return this.lastReport;
  }

  set mostRecentReport(report: string) {
    this.lastReport = report;
  }

  abstract describe(this: Department): void;

  static createEmployee(name: string) {
    return { name: name };
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfomration() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(public admins: string[]) {
    super('IT');
  }

  describe(this: Department): void {
    console.log(this.name);
  }
}

const employeeNew = Department.createEmployee('Jax');

const accounting = new ITDepartment([]);

accounting.addEmployee('Nanu');
accounting.addEmployee('Naruto');

accounting.printEmployeeInfomration();
