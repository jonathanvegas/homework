let value =  82929

function isNumber(value){ 
    if (isNaN(value)) {
        return `${value} is not a number`
    } else {
        return `${value} is a number`
    }
}

console.log(isNumber(value))