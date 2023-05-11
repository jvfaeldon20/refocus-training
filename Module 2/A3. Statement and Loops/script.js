let birth_month    = 2
let current_month  =  new Date().getMonth()
const birthyear    = 1993
let   current_year = new Date().getFullYear()
let   age          = current_year - birthyear

accurate_age = age
if(birth_month <= current_month){
    accurate_age ++
}

console.log(`Patient Age: ${age}`);
console.log(`Patient Accurate Age: ${accurate_age}`);
