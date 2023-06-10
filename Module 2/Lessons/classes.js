// CLASS DECLARATION
// class Person {
//     name = "Default"
//     constructor(name, gender){
//         this.name = name
//         this.gender = gender
//     }

//     greet(){
//         console.log(`Hi ${this.name}`)
//     }
// }

// const person = new Person('JV', 'male')
// person.greet()


// CLASS INHERITANCE
// creating a new class based on the previous one through extend
// this new class is able to access the methods in previous class set in public

class Dog{ // 1. class instance
    name; // 2. class field
    #gender = 'Male' // set as private property

    constructor(){ // 3. constructor

    }

    bark(){ // 4. class method
        console.log(`arf! arf`)
    }

    whatIam(){
        console.log(`I am ${this.#gender}`)
    }

    #myFavoriteFood(){ //private method
        console.log('abobo')
    }
}

class Pet extends Dog{
    constructor(){
        super(); // special keyword for the constructor to initialize the constructor of the parent class
    }

    setName(name){
        this.name = name
    }

    greet(){
        this.bark()
    }
}

const pet = new Pet('')
pet.setName('doggy')
pet.greet()
pet.whatIam()
// pet.#myFavoriteFood()
