function getFirstUpperCase(str){
    arrData        = str.split("")                                  // convert string into array
    strData        = arrData.filter((el) => { return el != !el})    // remove false data
    upperCaseChars = []                                             // create array for upper case chars
    for(i = 0; i < strData.length; i++){
        if(strData[i] == strData[i].toUpperCase()){
            upperCaseChars.push(strData[i])
        }
    }

    return (upperCaseChars.length > 0)?upperCaseChars[0]:"No UPPERCASED character found."
}


console.log(getFirstUpperCase('there is a storm coming to the East of the Philippines'))