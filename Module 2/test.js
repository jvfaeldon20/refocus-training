// // let x ={}, y={name:"Ronny"}, z={name:"John"};
// // x[y] = {name:"Vivek"};
// // x[z] = {name: "Akki"};
// // console.log(x)


// // // WAP - 321
// // function print(x=0){
// //     let response = {}
// //     if(x == 1){
// //         return 1
// //     }else{
// //         console.log(x)
// //         return print(x-1)
// //     }
// // }

// // let x = 'WAP'
// // xlet result = print(x.length)



// // function func2() {
// //    for(let i= 0; i <3 ; i++){
// //     setTimeout(() => {
// //         console.log(i)
// //     }, 2000);
// //    } 
// // }

// // func2()


// // reverse characters
// // function reverse(data){
// //     let newString = ''
// //     for(let i = data.length - 1; i >= 0; i--){
// //         newString += data[i]
// //     }

// //     return newString
// // }


// // const result = reverse("ABCDEF")
// // console.log(result)



// // let x={}, y={name:"Ronny"}, z={name:"John"}
// // x[y] = {name:"Vivek"}
// // x[z] = {name:"Akki"}
// // console.log(x)




// var x = 23
// (function(){
//     var x = 43
//     (function random(){
//         x++
//         console.log(x)
//         var x=21
//     })()
// })()


// // // function func2(){
// // //     for(var i = 0; i < 3; i++){
// // //       setTimeout(()=> console.log(i), 3000);
// // //    }
// // // }

// // // func2()

// // let array1 = [1,3,4,2,1,4,7,5,1,4,1,2,8,5]
// // // Output = {
// // //     1: 4,
// // //     2: 2,
// // //     3: 1,
// // //     4: 3,
// // //     5: 2,
// // //     7: 1,
// // //     8: 1
// // // }

// // // count element 
// // function test(){
// //     for(let x=0; x< array1.length; x++){
        
// //         console.log(array1[x])        
// //     }
// // }

// // test(array1)


// // function test(){


// // }


// // function test2(){

// // }


// let arr = [1, 2, 3, 4,5]
// arr.splice(2, 0)
// console.log(arr)

// // console.log(arr)

// // const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
// // const counts = {};

// // for (const num of arr) {
// //   counts[num] = counts[num] ? counts[num] + 1 : 1;
// // }

// // console.log(counts);

// const inventory = [
//     { name: "apples", quantity: 2 },
//     { name: "bananas", quantity: 0 },
//     { name: "cherries", quantity: 5 },
//   ];
  
//   const result = inventory.find(({ name }) => name === "cherries");
  
//   console.log(result.quantity); // { name: 'cherries', quantity: 5 }


function getTwoFactors(arrNum, targetSum) {
    const numMap = {}; 
    for (let i = 0; i < arrNum.length; i++) {
     // getting complement factor
      const factor = targetSum - arrNum[i];
    
      // getting other complement  
      if (numMap[factor] !== undefined) {
        return [arrNum[i], factor];
      }

      numMap[arrNum[i]] = i;
    }
    return [];

  }
  
  // Test
  const arrNum = [2, 4, 6, 8, 10];
  const targetSum = 8;
  const result = getTwoFactors(arrNum, targetSum);
//   console.log(result);
  