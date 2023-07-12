const message = ({name, message}) => {
    console.log(`${name} messages you: ${message}`)
}

const tagging = ({name}) => {
    console.log(`${name} tags you!`)
}

const buffer = (seconds, cb, request, status) => {
    return new Promise((resolve, reject) => {
        const ms = seconds * 1000
        if(status){
            setTimeout(() => {
                cb(request)
                resolve(true)
            }, ms)
        }else{
            reject(new Error("Action is unseuccessful"))
        }
    }) 
}

const mainAction = async() => {
    await buffer(2,tagging, {name:"JV"}, true)
    await buffer(1,tagging, {name:"Alvin"}, true)
    console.log('All notifications sent successfully!')
}

mainAction()