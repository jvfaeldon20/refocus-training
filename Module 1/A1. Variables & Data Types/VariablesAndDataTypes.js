// Task 1: Calorie tracking app
let runHourPerDay = 0.5
let runCycleDaysSamDecides = 15
let calorieBurnPerDay = (runHourPerDay * 60 / 30) * 225
let averageCalorieBurn = calorieBurnPerDay * runCycleDaysSamDecides

console.log(`Great work, Sam! After ${runHourPerDay}hours of running everyday for ${runCycleDaysSamDecides} days, you may lose a total of ${averageCalorieBurn} calories.`)




// Task 2: Saving app
let targetSavings = 10000 
const currentSavings = 7500
let remaingTargetBalance = targetSavings - currentSavings
let remainingTargetPercentage = (remaingTargetBalance / targetSavings) * 100
console.log(`Thank you for your discipline and hardwork, Sam! You are now ${remainingTargetPercentage}% away from your goal of saving ${targetSavings}.`); 