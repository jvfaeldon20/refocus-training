// callbacks - functions that are passed as an argument to another function

function showMessage(callback, data = {}){
    var result = callback(data)
    console.log(result)
}

// a callback function since it is passed as an argument
function addition({ num1, num2 }){
    return num1 + num2
}


showMessage(addition, {
    num1: 5,
    num2: 10
})