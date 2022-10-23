// Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

//Parameters - numbers whole numbers/integer, negative/positive, special character, length of new array am i awlays given a populated array
//Return - a new array based on the number given to me with only even numbers
//Example - given array of *2nd example* and the number two, im going to return [-8,26]
//P - pseudocode

function evenNums(arr, num){
    arr.filter(number => number % 2 === 0).slice(-num)
}

console.log(evenNums([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
console.log(evenNums([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2))
console.log(evenNums([6, -25, 3, 7, 5, 5, 7, -3, 23], 1))
