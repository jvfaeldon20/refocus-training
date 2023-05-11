// TASK 1: Create the Necessary Variables
const letters = ["E", "D" , "L", "T" , "E", "P", "B", "N", "M", "E", "E", "W" , "V" , "O", " "]
const order = [11, 4, 6, 14, 1, 9, 12, 0, 2, 13, 5, 8, 10, 7, 3]

// TASK 2: Prepare to Decrypt
let hiddenWord = ""
for(i = 0; i < order.length; i++ ){
    // TASK 3: Decrypt the Code
    hiddenWord += letters[order[i]]
    console.log(hiddenWord);
}


