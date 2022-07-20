//1. What are the seven paradigms of the database?
// console.log('Database Paradigms')
// console.log('1. Key Value')
// console.log('2. Wide Column')
// console.log('3. Document')
// console.log('4. Relational')
// console.log('5. Graph')
// console.log('6. Search')
// console.log('7. Multi-model')

//2. Create a function that takes a base number and an exponent number and returns the calculation.
let baseNumber = 5
let expNumber = 5

function baseExp (baseNumber, expNumber){
    return Math.pow(baseNumber, expNumber)
}
console.log(`${baseNumber}^${expNumber} = ${baseExp(baseNumber, expNumber)}`)

//3. Create a function that takes an array and a string as arguments and returns the index of the string.
let arrF1 = ['Ferrari', 'Red Bull', 'Mecedes', 'Alpine', 'Mc Laren']
let strIndex = 'Alpine'

function stringIndex (arrF1, strIndex){
    return arrF1.indexOf(strIndex)
}
console.log(`Index of the string: ${stringIndex(arrF1,strIndex)}`)

//4. Create a function that takes an array and returns the types of values (data types) in a new array.
let array = [true, 'Jonathan', 42, false, 1, 'Vegas']
let arrayTypes = []

function returnTypes (array, arrayTypes){
    for (value of array){
        arrayTypes.push(typeof(value))
    }
    return arrayTypes
}
console.log(array)
console.log(returnTypes(array,arrayTypes))