class AboutMe{
    constructor(){}

    mySound(){
        let soundRef = [
            { animal: "cat", sound: "Meow" },
            { animal: "dog", sound: "Arf" },
            { animal: "bird", sound: "Tweet" },
            { animal: "tiger", sound: "Rawr" }
        ]

        const animalData = soundRef.find(({animal}) => animal === this.animal);
        console.log(`${animalData.sound}! I am a ${this.animal}.`)
    }
    
    myCurrentDuty(){
        let str = this.animal.toLowerCase()
        str = str.charAt(0).toUpperCase() + str.slice(1)
        console.log(`${str} is currently eating..`)
    }

}

class Animal extends AboutMe{
    constructor(){
        super();
    }

    setAnimal(animal){
        this.animal = animal
    }

    sayHi(){
        this.mySound()
    }
}

const pet = new Animal('')
pet.setAnimal('cat')
pet.sayHi()
pet.myCurrentDuty()
pet.setAnimal('dog')
pet.sayHi()
pet.myCurrentDuty()
pet.setAnimal('bird')
pet.sayHi()
pet.myCurrentDuty()
pet.setAnimal('tiger')
pet.sayHi()
pet.myCurrentDuty()