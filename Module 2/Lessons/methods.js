var obj = {
    items: [
        "Apple",
        "Banana",
        "Mango"
    ],
    log: function() {
        console.log("Hello")
    },
    showName: function(name){
        console.log(this.items)
    }
}

// obj.showName()

// 1. slice - returns a substring based on the start and end index
// var status = "world"
// console.log(status.slice(1))  // equivalent to "orld"
// console.log(status.slice(0,1))  // equivalent to "w"


// 2. substring - returns a substring based on the start and end index
// var status = "world"
// console.log(status.substring(1)) //orld


// 3. replace -replace  a part of the string with the new one
// var status = "I am happy"
// console.log(status.replace("I am", "We are"))


// 4. concat - joins multiple string
// var str1 = 'hey'
// var str2 = "JV"
// console.log(str1.concat(" ",str2))


// 5. toUpperCase, toLowerCase - manipulate text case 
// var text = "Hello"
// console.log(text.toUpperCase())


const arr = ["i", "love", "web", "development"]

function stringify(prev, cur){
    return prev.concat(cur)
}

console.log(arr.reduce(stringify))