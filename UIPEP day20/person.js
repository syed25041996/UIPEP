class Person{
    constructor(names,age){
        this.names = names
        this.age = age
    }

    greetUs(){
        console.log(`My name is ${this.names} and my age is ${this.age}`)
    }
}

module.exports = Person