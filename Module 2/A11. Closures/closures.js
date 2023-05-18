function counter(){
    var count = 1

    function add(count){
        count += count
        return count
    }

    return {
        checkCount: count,
        addCount: add
    }
}

var count = counter()
console.log(`original count: ${count.checkCount}, new count: ${count.addCount(count.checkCount)} `)
