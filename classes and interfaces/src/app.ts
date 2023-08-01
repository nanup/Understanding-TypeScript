class Department {
  private employees: string[] = [];
  private lastReport: string;

  constructor(private name: string) {}

  get mostRecentReport() {
    return this.lastReport;
  }

  set mostRecentReport(report: string) {
    this.lastReport = report;
  }

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
