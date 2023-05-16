// Task 1: Create an Object Variable
let obj = {
    num1: 100,
    num2: 50,
    sum: 150,
    difference: 50,
    product: 500,
    quotient: 20
}


// Task 2: Print the Object Data
function showData(obj){
    console.log("===========================")
    console.log(`First Number: ${obj.num1}`)
    console.log(`Second Number: ${obj.num2}`)
    console.log(`The sum is: ${obj.sum}`)
    console.log(`The difference is: ${obj.difference}`)
    console.log(`The product is: ${obj.product}`)
    console.log(`The quotient is: ${obj.quotient}`)
}


// Task 3: Create Functions for Calculations
function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}


// Task 4: Update the Object Data
function newSetOfNumbers(num1, num2){
    obj.num1        = num1
    obj.num2        = num2
    obj.sum         = add(num1, num2)
    obj.difference  = subtract(num1, num2)
    obj.product     = multiply(num1, num2)
    obj.divide      = divide(num1, num2)
}

showData(obj)
newSetOfNumbers(200, 10)
showData(obj)
newSetOfNumbers(500, 20)
showData(obj)


// Task 5: Call the Functions
