let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);

numbers.push(6);   
console.log(numbers);


let empIds: (number | string)[] = [101, 102, "103"];
console.log(empIds);    


//tuple type
let employeeList: [number, string][] = [
    [101, "Ram"],
    [102, "Shyam"],
    [103, "Mohan"]
];
console.log(employeeList[1]);

//for each loop to iterate over array
let scores: number[] = [85, 90, 78, 92];

scores.forEach((score, index) => {
    console.log(`Score ${index + 1}: ${score}`);
});

scores.forEach((score) => {
    console.log(score);
});

//for loop to iterate over array
for (let i=0; i < scores.length; i=i+2) {
    console.log(`Score ${i}: ${scores[i]}`);
}

//some method to check if any score is above 90
var hasHighScore = scores.some(score => score > 90);
console.log(`Has high score above 90: ${hasHighScore}`);

let x1: number = 10, y1: number = 20;

//while loop to compare x1 and y1
while (x1 < y1) {
    console.log("while loop : " +x1 + " is less than " + y1);
    x1++;
}

do {
    console.log("do while :" +x1 + " is less than " + y1);
    x1++;
} while (x1 < y1);

let str1: string = "hello", str2: string = "world";

if(str1 === str2) {
    console.log("str1 and str2 are equal");
} else {
    console.log("str1 and str2 are not equal");
}