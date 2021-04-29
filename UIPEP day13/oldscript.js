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


let lappy = new Brands("HP", 2016, "5/5")
let desktop = new Brands("Dell", 2004, "3/5")

console.log(desktop)
console.log(desktop.revise(2014))
console.log(desktop)
