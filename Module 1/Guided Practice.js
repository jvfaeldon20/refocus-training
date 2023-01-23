// 1. Calories Tracking App
// const caloriesPer30Mins = 500
// function getCalories(RunHourPerDay){
//    let totalRunMinutesPerDay = RunHourPerDay * 60
//    let totalCalorieBurnAWeek = (totalRunMinutesPerDay / 30 * caloriesPer30Mins) * 7
//    console.log(`Great work, Sam! If you run\nfor 60 minutes everyday\nfor a week, you will lose a total\nof ${totalCalorieBurnAWeek} calories.`)
// }
// getCalories(1.5)


// 2. Temperature converter app
// function convertToCelsius(tempFarenheit){
//    let tempCelsius = (tempFarenheit - 32)/1.8
//    return tempCelsius
// }
// console.log(convertToCelsius(84)) // 84F = 28.89C
// console.log(convertToCelsius(95)) // 95F = 35C


// 3. Old enough
// var age = 10
// function isAgeQualified(age){
//    if(age >= 65){
//       console.log(`You get your income from your pension!`)
//    }else if(age <65 && age >=18){
//       console.log(`Each month you get a salary.`)
//    }else if(age <18){
//       console.log(`You get an allowance.`)
//    }else{
//       console.log(`The value of the age variable is not numerical.`)
//    }
// }

// isAgeQualified(age)


// 4.) Check numbers visible by 3 and 5
// let start = 1
// let end = 100

// function getNumbersDivisibleBy35(start, end){
//    let countMultiples = 0
//    for(let i = start; i <= end; i++){
//       if(i % 3 === 0 && i % 5 === 0){
//          countMultiples += 1
//       }
//    }
//    return countMultiples
// }

// console.log(`The number of values that are divisible by 3 and 5 is ${getNumbersDivisibleBy35(start, end)}.`)


// 5. Accessing object values
// const player = {
//    "name": "Jermain",
//    "items": ["apple","orange","bannana"],
//    "isFilipino":true,
//    "age":27
// }

// // let whatToAccess = "items"
// // console.log(player[whatToAccess])

// // 6. Deleting values
// delete player.age
// console.log(player)



// 6. Clothing Store
// const shoppingList=['bag','newspaper']

// for(item in shoppingList){
//    console.log(shoppingList[item])
// }

// const clothingStore = {
//    store_name:"Clothing Store",
//    year_created: 1997,
//    arr_items: []
// }

// clothingStore["arr_items"] = ["Bluet T-shirt", "Pink shirt", "Slippers", "Rubber shoes", "Yellow shorts"]
// console.log(clothingStore)



// 7. Scanning Cargo trucks trips
// const CargoTruckTrips = {
//    cargo_name:"Land21 Cargo Truck",
//    capacity:18,
//    items:[
//       {item_name: "SUV", item_weight: 3000},
//       {item_name: "Audi A8", item_weight: 2000},
//       {item_name: "Nisaan Navara", item_weight: 2400},
//       {item_name: "Ford Mustang", item_weight: 1700}
//    ],
//    isOverloaded:function(){
//       let totalWeight = 0
//       let cargoStatus = {}

//       for(carObj of this.items){
//          totalWeight += carObj["item_weight"]
//       }
      
//       if(totalWeight > 5000){
//          cargoStatus['isOverload'] = true,
//          cargoStatus['cargoWeight'] = totalWeight
//       }

//       return cargoStatus
//    }
// }

// console.log(`Total cargo weight: ${CargoTruckTrips.isOverloaded().cargoWeight}.`)


// 8. Zoo object
// let zooObject = {
//    zoo_name: "Manila Zoo",
//    zoo_description: "Zoo description",
//    arr_animals:[
//       {animal_emoji: "🦁", animal_name: "Lion"},
//       {animal_emoji: "🐍", animal_name: "Snake"},
//       {animal_emoji: "🐟", animal_name: "Fish"},
//    ],
//    displayZooName: function(){
//       return this.zoo_name
//    },
//    diplayZooDescription: function(){
//       return this.zoo_description
//    },
//    enumerateAnimals: function(){
//       let animals = ""
//       for(animalObj of this.arr_animals){
//          animals += `Please welcome ${animalObj["animal_name"]}, a ${animalObj["animal_emoji"]}!\n`
//       }

//       return animals
//    },

// } 

// console.log(zooObject.displayZooName())
// console.log(zooObject.diplayZooDescription())
// console.log(zooObject.enumerateAnimals())



// 9. Inner outer js
// function makeBag(name){
//     function getNotebook(){
//         return "bag of " + name
//     }

//     return getNotebook
// }   

// const bagOfMarc = makeBag("Mark")
// console.log(typeof bagOfMarc)
// console.log(bagOfMarc())



// 10. Function inputs
// let yearExample = 2000

// // a. output the age of the user
// function calculateAge(year){
//     return 2022-year 
// }

// // b. check is user age is eligible to vote
// function checkIfEligibleToVote(year){
//     return (2022-year) >= 18 ? "ELIGIBLE":"NOT ELIGIBIBLE"
// }

// function varCalc(year, fn){
//     let newValue
//     newValue = fn(year) // callback function
//     return newValue
// }

// let age =  varCalc(yearExample, calculateAge)
// let isEligible = varCalc(yearExample, checkIfEligibleToVote)
// console.log(`User age is ${age}, and is ${isEligible} to vote!`)



// 11. Closures
// - means that you can create a function inside a function. that means that you can use inner function as an output.
// function packBox(item, name){
//     console.log(`Put the ${item} in the box.`)

//     function addressPackage(address){
//         console.log(`Addressed the box to ${address} and ready to send the ${item} gift to the ${name}`)
//     }
//     return addressPackage
// }

// packBox("shirt", "Dominic")



// 12 Callbacks
// function packBox(item, name, address, callback){
//     console.log(`Put the ${item} in the box.`)
//     callback(item, name, address)
// }

// function addressPackage(item, name, address){
//     console.log(`Addressed the box to ${address} and ready to send the ${item} gift to ${name}`)
// }

// packBox("shirt", "Dominic", "Philippines", addressPackage)


// 13 Oceanarium
// function startAnAcquarium(numFishes){
//     console.log(`There are ${numFishes} 🐟 in the aquarium.`)

//     function addFish(){
//         numFishes += 1
//         console.log(`One 🐟 added. Now, we have ${numFishes} 🐟 in the acquarium.`)
//     }
//     return addFish
// }

// const acquariumExample = startAnAcquarium(25)


// function learn(){
//     let object = 'lemon' // declare the local variable
        
//     // the inner function declared
//     function displayObject(){
//         return 'This is ' + object // ‘This is lemon’
//     }

//     return displayObject
// }

// const x = learn() // to call the function, put itinto a constant
// console.log(x)    // returns the inner function name
// console.log(x())  // returns the value‘This is lemon’



// 14 Factorial using recursive calls
// function Factorial(n){
//     if(n == 1 || n == 0){
//         return 1
//     }else{
//         return n * Factorial(n-1)
//     }
// }

// console.log(Factorial(5))


// 15 Array methods
// a. CONCAT METHOD - joins 2 arrays
// const fruit = ["apple", "banana", "mango"]
// const veggies = ["carrot", "celery", "eggplant"]
// console.log(fruit.concat(veggies))


// b. FILL METHOD - use to change several or even all values in an array
// const fruit = ["apple", "banana", "mango"]

// 1. change all elements 
// const strawberry = fruit.fill("strawberry")
// 2. change other elements
// const strawberry = fruit.fill("strawberry", 2,3) //("replaceVal", start index, end index)
// console.log(strawberry )


// c. FOREACH METHOD - use to loop array elements
// const fruit = ["apple", "banana", "mango"]
// fruit.forEach(function(value){
//     console.log(value)
//     if(value == "banana"){
//         console.log("Found a 🍌")
//     }
// })


// d. FILTER METHOD - use to filter elements
// const num = [1,2,3,4,5,6,7,8,9,10]
// const greaterThanFour = num.filter(function(value){
//     return value>4
// })
// console.log(greaterThanFour)


// e. SOME METHOD - check if one element is true, statement is true
// const fruit = ["apple", "banana", "mango", "orange"]
// const hasOrange = fruit.some(function(value){
//     return value === "orange"
// })
// console.log(hasOrange)


// f. EVERY METHOD - check if all element conditions is true, result is true, else it will return false
// const fruit = ["apple", "banana", "mango", "orange"]
// const hasOrange = fruit.every(function(value){
//     return value === "orange"
// })
// console.log(hasOrange)


// g. MAP METHOD = creates a new array transforming the old one
// const inventors = [
//     {firsName: "Thoms", lastName: "Edison"},
//     {firsName: "Benjamin", lastName: "Franklin"},
//     {firsName: "Leonardo", lastName: "da Vinci"},
// ]

// const fullName = inventors.map(function(value){
//     return [value.firsName, value.lastName].join(" ")
// })
// console.log(fullName)


// h. REDUCE METHOD - returns a new state of an element
// const num = [2,2]
// const sum = num.reduce(function(previous, current){
//     return previous + current
// })
// console.log(sum)

// i. UNSHIFT METHOD - adds new items to the beginning of an array
// const fruit = ["apple", "banana", "mango", "orange"]
// fruit.unshift("strawberry","pineapple")
// console.log(fruit)


// j. POP METHOD - use to remove the last element of an array
// const fruit = ["apple", "banana", "mango", "orange"]
// console.log(fruit.pop())


// 16 Student rankings
// let students = [
//     { 
//         firsName: "Albert", 
//         lastName: "Edison", 
//         subjects: [
//             {
//                 subjectName: "Math",
//                 grades:[
//                     {
//                         term: "First Term",
//                         grade: 3
//                     },
//                     {
//                         term: "Second Term",
//                         grade: 3.8
//                     }
//                 ]
//             },
//             {
//                 subjectName: "Science",
//                 grades:[
//                     {
//                         term: "First Term",
//                         grade: 3.5
//                     },
//                     {
//                         term: "Second Term",
//                         grade: 3.2
//                     }
//                 ]
//             }
//         ] 
//     },
//     { 
//         firsName: "Tony", 
//         lastName: "Doe", 
//         subjects: [
//             {
//                 subjectName: "Math",
//                 grades:[
//                     {
//                         term: "First Term",
//                         grade: 4
//                     },
//                     {
//                         term: "Second Term",
//                         grade: 3.7
//                     }
//                 ]
//             },
//             {
//                 subjectName: "Science",
//                 grades:[
//                     {
//                         term: "First Term",
//                         grade: 3.5
//                     },
//                     {
//                         term: "Second Term",
//                         grade: 3.6
//                     }
//                 ]
//             }
//         ] 
//     },
//     { 
//         firsName: "Leo", 
//         lastName: "Alonzo", 
//         subjects: [
//             {
//                 subjectName: "Math",
//                 grades:[
//                     {
//                         term: "First Term",
//                         grade: 4.6
//                     },
//                     {
//                         term: "Second Term",
//                         grade: 3.6
//                     }
//                 ]
//             },
//             {
//                 subjectName: "Science",
//                 grades:[
//                     {
//                         term: "First Term",
//                         grade: 4.2
//                     },
//                     {
//                         term: "Second Term",
//                         grade: 2.8
//                     }
//                 ]
//             }
//         ] 
//     },
// ]

// let passedStudents = []
// students.forEach((element) =>{
//     let gradesPerSubject = element.subjects.map((subject) => {
        
//         const totalGrades = subject.grades.reduce((prev, term) => prev.grade + term.grade)
//         return totalGrades
//     })
    
//     const overallGrades = gradesPerSubject.reduce((prev, current) => prev + current)
//     const averageGrade = overallGrades / (element.subjects.length * 2)
    
//     if(averageGrade >= 3.5){
//         passedStudents.push({...element, averageGrade: averageGrade.toFixed(2)})
//         // PASSED STUDENTS
//         // [
//         //     {
//         //       firsName: 'Tony',
//         //       lastName: 'Doe',
//         //       subjects: [ [Object], [Object] ],
//         //       averageGrade: '3.70'
//         //     },
//         //     {
//         //       firsName: 'Leo',
//         //       lastName: 'Alonzo',
//         //       subjects: [ [Object], [Object] ],
//         //       averageGrade: '3.80'
//         //     }
//         //   ]
//     }
// })

// const rankedStudents = passedStudents.sort((a, b) => a.averageGrade - b.averageGrade)
// console.log(rankedStudents.reverse())