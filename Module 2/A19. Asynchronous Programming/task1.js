const ageChecker = (seconds, age) => {
    const ms = seconds * 1000
    return new Promise((resolve, reject) => {
        console.log("CHECKING AGE...")
        setTimeout(() => {
            age >= 18 ? 
            resolve("The customer is on the right age, he/she can buy the liquor") : 
            reject(new Error("Age is not legal"))
        }, ms)
    })
}


ageChecker(2, 17)
    .then((response) => console.log(response))
    .catch((error) => console.log(error))
    .finally(() => console.log("Age checking completed!"))
