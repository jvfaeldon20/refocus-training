// Grading system

// var a = 9
// var res = false
// res = (a >10) ? res=true: res
// console.log(res)

/*
Grading
    90 above - excellent grade (A+)
    89 - 85  - great gradem (A)
    84 - 80  - good grade (B+)
    79 - 75  - passed grade (B)
    74 below - low grade (F)
*/

var grade = 91
var result = "Invalid Grade"

if(grade > 90){
    result = "Excellent Grade (A+)"
}else if(grade => 85 && grade <= 89){
    result = "Great Grade (A)"
}else if(grade => 80 && grade <= 84){
    result = "Good Grade (B+)"
}else if(grade => 75 && grade <= 79){
    result = "Good Grade (B+)"
}else if(grade < 75){
    result = "Low Grade (F)"
}

console.log(result)