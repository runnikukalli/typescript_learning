let msg = "Hello World";
console.log(msg);

let age: number = 30;
let empName: string = "Tom Cruise";
let isMarried: boolean = true;

//object type literal

let employee: {
    empId: number,
//    empId: any, allows any type of value
//    empId: string | number, allows either string or number type of value union type
    firstName: string
    dept: string
} 

employee = {
    empId: 101,
    firstName: "Ram",
    dept: "IT"
}

console.log(employee.firstName);
console.log(employee.empId);

//void return type 
function greet(msg: string): void {
    console.log("Welcome to TypeScript");
}
greet("Hello, TypeScript!");

//pre ES6 way of concatenating string
let employeeDesc: string = employee.firstName + " works in " + employee.dept + " department.";
console.log(employeeDesc);

//template string ES6 feature
let employeeDesc2: string = `${employee.firstName} works in ${employee.dept} department.`;
console.log(employeeDesc2);

