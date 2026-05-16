class Employee {
empID: number;
empName: string;
dept: string = "IT";

constructor(empID: number, empName: string) {
    this.empID = empID;
    this.empName = empName;
}

display() {
    console.log(`Employee ID: ${this.empID}, Employee Name: ${this.empName}, Department: ${this.dept}`);            
}

}

const emp1 = new Employee(101, "John Doe");
emp1.display();

const emp2 = new Employee(102, "Jane Smith");
emp2.display();


// class EmployeeDetails extends Employee {
//     constructor(empID: number, empName: string, dept: string) {
//         super(empID, empName);
//         this.dept = dept;
//     }
// }