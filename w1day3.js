// 1. Write a function named assignGrade that takes one argument, a number score.
// Returns a grade for the score, either “A,” “B,” “C,” “D,” or “F.” Call that function for a 
// few different scores and log the result to ensure it works.
// 2. Create a function that returns the number of true values in an array.
// const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]
// 3. Create a function that converts a string to all uppercase letters and console.log the result 
// (hint: string methods):
// let str = “WHAT a TIME to BE ALIVE!”
// 4. Create a function that takes in a number of two-pointers and three-pointers made and returns a 
// basketball team’s total score?
// Extra for experts:
// 5. Create a function that takes an array of numbers & returns both min and max in that order. (use a loop)

// 1.
// function assignGrade(score){

// }

//2.
const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]
let sum = 0;
function trueValues(testArray){
    for (const value of testArray){
        if (value == true){
            sum++
        }
    } 
    return sum
}
console.log("True Values: " + trueValues(testArray))

//3.
let str = "WHAT a TIME to BE ALIVE!"
function allUppercase(str){
    return(str.toUpperCase())
}
console.log(allUppercase(str))