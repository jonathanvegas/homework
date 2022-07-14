// 1. Write a function that adds two numbers together.

function addNums(num1, num2){
    return num1 + num2
}
console.log(addNums(10,20))

// 2. Write a car object that has a modal and color.  Create a property called year then 
//    console.log all of the objects properties individually.

let car = {
    model: 'Sienna',
    color: 'Brown'
}
car.year = 2021
car["Title Owner"] = "Jonathan" //Bracket notation to add a propertie to an object

console.log(`Car Model: ${car.model}\n` + 
            `Car Color: ${car.color}\n` + 
            `Car Year: ${car.year}\n` + 
            `Title Owner: ${car["Title Owner"]}`) 

//console.log(car.model + '\n' + car.color + '\n' + car.year + '\n' + car["Title Owner"]) 
//console.log(car)

// 3. Write a function to get the first element in an array.

function elementArray(array, i){
    return array[i]
}
console.log(elementArray(['A','B','C','D'], 0))