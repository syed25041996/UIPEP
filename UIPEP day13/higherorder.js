// Higher order functions

let persons = [
    {
        profession : "Doctor",
        location : "Bengaluru",
        age : 35,
        pincode : 12345
    },
    {
        profession : "Lawyer",
        location : "Assam",
        age : 40,
        pincode : 90877
    },
    {
        profession : "Engineer",
        location : "Chennai",
        age : 20,
        pincode : 12315
    },
    {
        profession : "Manager",
        location : "Mumbai",
        age : 35,
        pincode : 12345
    }   
]

const peoples =  persons.forEach(people =>{
    // console.log(people)
})

const ages = persons.map(double => double.age*2).sort((a,b) => a-b )

const place = persons.sort((l1, l2) => l1.location > l2.location ? 1 : -1)

const remove =  persons.filter(people => people.profession !== "Manager"  )

console.log(remove)

//Classes


class Name{
    constructor(name,age,height){
        this.name = name
        this.age = age
        this.height = height
    }

    getSummary(){
        return `My name is ${this.name} is and my age is ${this.age}`
    }
}

class Country extends Name{
    constructor(name,age,height,country){
        super(name,age,height)
        this.country = country
    }
}

let name1 = new Country("Syed" ,21, 178, "Bengaluru")
// console.log(name1.getSummary())


//Encapsulation
let employee = {
    wages: 20000,
    hike: 10,
    getSalary(){
        return `The salary is ${this.wages} + ${this.hike}` 
    }
}

let emp1 = Object.create(employee)
// console.log(emp1.getSalary())