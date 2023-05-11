//  conditional branching

var a = "aasd";
var b = 50;
var output = "Everything is false"

// 1.) IF-ELSE statement
if(a && b >= 50){
    // body statement
    output = "A is TRUE";
}else if(b == 30) {
    output = "A is TRUE";
}




// 2. SWITCH
switch (a) {
    case true:
        output = "correct"
        break;
    case false:
        output = "incorrect"
        break;
    default:
}

console.log(output)