function main(status){
    if(status ==1){
        return 'found 1'
    }else{
        console.log(status)
        return main(status - 1)
    }
}

var result = main(10)
console.log(result)
