// functions using return
// var a = 50
// function calculate(num1){
//     let result = num1 * a 
//     return result // return makes result available outside the function scope

// }

// var output = calculate(5)
// console.log(output)


// function with algorithim
function showName(status, name, message){
    if(status){
        return(`Hi ${name}!`)
    }else{
        return(`Your message is: ${message} to: ${name}`)
    }
}

var output = showName(true, "Tony Stark", "I love you!")
console.log(output)