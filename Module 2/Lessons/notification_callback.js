// case - faceboook Notification
// message- notifcation device 
// if not screen, notify other device

function notify (cb, request, status){
    
    console.log("sending notification..")
    if(status){
        cb(request)
    }else{
        buffer(3, cb, request)
    }

}

function message({name, message}){
    console.log(`${name} messages you: ${message}`)
}

function tagging({name}){
    console.log(`${name} tags you!`)
}


function buffer(seconds, cb, request){
    const ms = seconds * 1000
    setTimeout(() => {
        console.log("sending notification to other device..")
        cb(request)
    }, ms)
}


notify(message, {name: "JV", message: "Hey whats up!"}, false) 