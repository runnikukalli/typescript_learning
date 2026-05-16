function add(x: number, y: number): number {
    return x + y;
}
console.log(add(5, 10));

//Ananymous function
let multiply = function(a: number, b: number) {
    if (a > 0 && b > 0) {
        return a * b;
    }
}
console.log("The multiplication of a and b is: " + multiply(5, 10));

//ES6 arrow function
let divide = (a: number, b: number) => {
    if (b !== 0) {
        return a / b;
    }
}
console.log("The division of a and b is: " + divide(10, 5));

//two types of functions - optional parameters and default parameters
//optional parameters
let mult = function(a: number, b: number, c?: number) {
    if (c == undefined) {
        return a * b;
    }
    else {
        return a * b * c;
    }
}
console.log("The multiplication of a and b is: " + mult(5, 10, 15));

//default parameters
let multThreeNumbs = function(a: number, b: number, c: number = 0) {
        return a * b * c;
}
console.log("The multiplication of three numbers a, b and c is: " + multThreeNumbs(5, 10));

//callback function
//A callback function is a function that is passed as an argument to another function and is executed after some operation is completed.
//by default js is asynronous

//task 1 - produce text
//task 2 - print text
// only after task 1 is completed, task 2 should be executed, so we can use callback function to achieve this`
function executeCallBack(callback: (text: string) => void) {
    console.log("Executing callback function...");
    callback("This is a callback function");
}

//callback function
function printText(text: string) {
    console.log("Callback text: " + text);
}

//calling the executeCallBack function and passing printText as a callback
executeCallBack(printText);