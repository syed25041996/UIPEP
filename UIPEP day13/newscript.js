function Brands(name, year, rating){
    this.name = name;
    this.year = year;
    this.rating = rating;
}

Brands.prototype.getYear = function(){
    const years =  new Date().getFullYear() - this.year
    return `The book is ${years} years old`
}

Brands.prototype.revise = function(newYear) {
    this.year = newYear
    this.reviseup = true
}

//Inhertiance using prototype
function Magazine(name, year, rating, month){
    Brands.call(this, name, year, rating)
    this.month = month
}

Magazine.prototype = Object.create(Brands.prototype)

const mob = new Magazine("Syed", 1998, "4.5", 'Jan')
console.log(mob)


function sentence(line){
    return `My name is ${this.type} and my age is ${this.age}, ${line}`
}

let boy = {type:"boy", sentence}
let girl = {type:"girl", sentence}

boy.sentence("I am a web developer")
girl.sentence("I am a web developer backend")

const ages = [12,34,51,13,11,56,75,33,10,56]

let names = ages.forEach(n => {
    console.log(n)
})
