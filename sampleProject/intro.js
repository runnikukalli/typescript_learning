"use strict";
let msg = "Hello World";
console.log(msg);
let age = 30;
let empName = "Tom Cruise";
let isMarried = true;
//object type literal
let employee;
employee = {
    empId: 101,
    firstName: "Ram",
    dept: "IT"
};
console.log(employee.firstName);
console.log(employee.empId);
//void return type 
function greet(msg) {
    console.log("Welcome to TypeScript");
}
greet("Hello, TypeScript!");
let employeeDesc = employee.firstName + " works in " + employee.dept + " department.";
console.log(employeeDesc);
//template string
let employeeDesc2 = `${employee.firstName} works in ${employee.dept} department.`;
console.log(employeeDesc2);
