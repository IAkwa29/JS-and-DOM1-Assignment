// QUESTION 1 : Design a for loop that returns an array of even numbers from 1-100

let array1 = [];


for (let i = 1; i < 100; i++) {

    x = i % 2;
    if (x <= 0) {
        array1.push(i)
    }
}
console.log(array1)

// QUESTION 2 : Create a function that returns even numbers between two numbers 28 and 50

function evenNumbers() {
    let arr = [];
    for (let i = 28; i <= 50; i++) {

        x = i % 2;
        if (x <= 0) {
            arr.push(i)
        }
    }
    return arr
}
evenNumbers()

// QUESTION 3 : When would you use a conditional statement?

// Ans: when you want your code to choose between multiple numbers 

// QUESTION 4 : Create a function with a function name firstFunction( ) and return the sum of two integers(numbers)
function firstFunction(a, b) {
    return a + b;
}

// QUESTION 5 : Create a function with a function name printSum( ) and print the sum of two numbers.
function printSum(a, b) {
    sum = a + b;

    document.write(sum)
}

// QUESTION 5 : Add an element to the end of this array [1,2,4]

let array2 = [1, 2, 4];

array2.push(5)
console.log(array2)

// QUESTION 6 : Remove the last element in this array [1,2,3,8]
let array3 = [1, 2, 3, 8];

array3.pop()
console.log(array3)
// QUESTION 7 :  Remove the first element in this array [23.77,80,45]
let array4 = [23.77, 80, 45];
array4.shift()
console.log(array4)

// QUESTION 7 : Add an element to the beginning of the array [[20,30,80],[10,50,55]]

let array5 = [[20, 30, 80], [10, 50, 55]];

array5.unshift([34, 90, 89])
console.log(array5)
