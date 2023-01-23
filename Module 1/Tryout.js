// console.log("Hello, World!");
// console.log("I am gonna be an awesome web developer");
// console.log("I am gonna be earning 6 digit salary soon!");

// BREAK
// let sum = 0;
// while(true){
//     let value = +prompt("Enter a number","");
//     if(!value) break; //(*)
//     sum += value
// }
// console.log('Sum:'+sum)


// CONTINUE
// for(let i=0;i<10;i++){
//     //if true, skip the remaining part of the body
//     if(i%2==0) continue;
//     console.log(i)
// }

// var i = 4;
// do{
//     document.write("i value is:"+i)
// }while(i>5)

// let x =0
// let y =5
// let z=y/x
// console.log(z)


// const product = {
//     name:"sweater",
//     quantityStock:18,
//     isBestSeller:true,
//     restock:function(){
//         if((this.isBestSeller == true) && (this.quantityStock<20)){
//             this.quantityStock += 20
//         }
//     }
// }

// product.restock()
// console.log(product)


// let age =10
// if(age <18){
//     let adult = true
//     console.log(adult)
// }


// function solution(N){
//     // create array from a number
//     let numArr = (""+N).split("")
    
//     // create family array from a number
//     let familyArr = []
//     familyArr.push(numArr)
//     for(x = 0; x < numArr.length; x++){
//         fashuffle(numArr)      
//     //     familyArr.push(x)

//     }

//     return familyArr

// }

// console.log(solution(567))


const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']