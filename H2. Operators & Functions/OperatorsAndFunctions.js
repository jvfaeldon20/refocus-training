// NOTE: For temperature converter, please enable 1 converter only as they uses the same function name (as what was instructed in task)
// Task1: Temperature converter
// 1. Converts Celsius to Kelvin
function convertToKelvin(tempCelsius){
    let tempKelvin = tempCelsius + 273.15
    return tempKelvin
}
console.log(convertToKelvin(27)) // 27C = 300.15K

// // 2. Converts Fahrenheit to Kelvin
// function convertToKelvin(tempFahrenheit){
//     let tempKelvin = (tempFahrenheit - 32) * 5/9 + 273.15 
//     return tempKelvin
// }
// console.log(convertToKelvin(80)) // 80F = 299.87K



// Task2: Tip Calculator
// 1. Computation of total bill
function computeTotalBill(orderedMealPrices){
    let totalMealCosts = 0
    for(i=0; i < orderedMealPrices.length; i++){
        totalMealCosts += orderedMealPrices[i]
    }

    return totalMealCosts
}

// 2. Calculate Tip
function calculateTip(totalBill){
    let tip = totalBill * 0.10
    return tip
}

// Ordered meals
let orderedMealPrices = [85.00, 50.00, 120.00]
let totalBill = computeTotalBill(orderedMealPrices)

console.log(`Hi, your total bill is P${computeTotalBill(orderedMealPrices)}`) // totalBill = 255.00
console.log(`Tip amount: P${calculateTip(totalBill)}`) // 25.50