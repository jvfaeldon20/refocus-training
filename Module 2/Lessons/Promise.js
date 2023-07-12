// Case - singer 
// about song release  
// if song release - notify subscribe parties
// not notify subscribe parties that song release will be delay


// Promise for song status
// @params - delay (settimeout) - buffer time for sending
// @params - status (boolean) - status of the song: true - song is released, false - the has delays

// Resolve - success promise (if song is released)
// Reject - failed promise (if the song has its dealy on release)
// then method - will run if success
// catch method - will run if failed promise
//  finally method - will run either
function songStatus(delay, status){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(status){
                // resolve("The song Viva La vide is released!")
                resolve([
                    {name: "joey", age: 16},
                    {name: "james", age: 21},
                ])
            }else{
                reject(new Error("The song Viva La Vida has delays!"))
            }
        }, delay * 1000)
    })
}


songStatus(3, true)
    .then((response) => {
        response.map((data) => {
            console.log(data.name);
        })
    })
    .catch((error) => console.log(error))
    .finally(() => {
        console.log("sending to the subscribed parties..");
    })