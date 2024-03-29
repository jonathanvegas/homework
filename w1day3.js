// 1. Write a function named assignGrade that takes one argument, a number score.
// Returns a grade for the score, either “A,” “B,” “C,” “D,” or “F.” Call that function for a 
// few different scores and log the result to ensure it works.

function assignGrade(score){
    switch (score) {
        case 5:
            return "A"
            break;
        case 4:
            return "B"
            break;
        case 3:
            return "C"
            break;
        case 2:
            return "D"
            break;
        case 1:
            return "F"
            break;
        default:
            return "No Grade"
            break;
    }
}
console.log("Grade: " + assignGrade(5))

// 2. Create a function that returns the number of true values in an array.
// const testArray = [ true, false, false, true, false, false, false, true, true, true, false ]

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

// 3. Create a function that converts a string to all uppercase letters and console.log the result 
// (hint: string methods): let str = “WHAT a TIME to BE ALIVE!”

let str = "WHAT a TIME to BE ALIVE!"
function allUppercase(str){
    return(str.toUpperCase())
}
console.log(allUppercase(str))

// 4. Create a function that takes in a number of two-points and three-points made and returns a 
// basketball team’s total score?
let num2Points = 25
let num3Points = 12
function totalScore(num2Points, num3Points){
    return (num2Points * 2) + (num3Points * 3)
}
console.log("Total Score: " + totalScore(num2Points,num3Points))

// Extra for experts:
// 5. Create a function that takes an array of numbers & returns both min and max in that order. (use a loop)
let arrayNum = [6,2,3,1,-3,9,4,-2,8,5,-5,10,-1,7,15,0,11]
//let arrayNum = ['FA','J','B','A','AV','N', 'AA','BI', 'BA', 'Z', 'FX', 'ZZ']
function minmaxValue(arrayNum){
    for (let i = 0; i < arrayNum.length; i++) {
        for (let j = i + 1; j < arrayNum.length; j++) {
            if (arrayNum[j] < arrayNum[i]) {
                const temp = arrayNum[i];
                arrayNum[i] = arrayNum[j];
                arrayNum[j] = temp;
            }
        }
    }
    console.log(`Min value: ${arrayNum[0]}\n` + `Max value: ${arrayNum[arrayNum.length-1]}`)
    console.log(arrayNum)
}
minmaxValue(arrayNum)

//OTHER SOLUTION
let arrayNum2 = [6,2,3,1,-3,9,4,-2,8,5,-5,10,-1,7,15,0,11]
function minmaxValue2(arrayNum2){
    let valMin = arrayNum2[0]
    let valMax = arrayNum2[0]
    for (let i = 1; i < arrayNum2.length; i++) {
        if (arrayNum2[i] < valMin) {
            valMin = arrayNum2[i]
        }
        if (arrayNum2[i] > valMax) {
            valMax = arrayNum2[i]
        }
    }
    console.log(`Min value: ${valMin}`)
    console.log(`Max value: ${valMax}`)
}
minmaxValue2(arrayNum2)