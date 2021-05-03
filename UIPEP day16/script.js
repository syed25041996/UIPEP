// Scope
function x(){
    var a = 7
    function y(){
        console.log(a)
    }
    return y
}

let z = x()
console.log(z)
z()


// Iterators and generators
let fruits = ["apple", "mango", "pear"]


function* doIt(){
    for(let i = 0; i < fruits.length; i++){
        yield fruits[i]
    }
}


let iter = doIt()
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())

const myIterable = {
    *[Symbol.iterator]() {
        yield 1;
        yield 2;
        yield 3;
    }
}

for (let value of myIterable) {
    console.log(value);
}

let starwars8 = {
    title: 'The Last Jedi',
    director: 'Rian Johnson',
    year: 2017,
    boxOffice: '1.3B'
}


let count = -1;
let SW8 = {
    [Symbol.iterator]: function(obj){
        return {
            next: ()=>{
                count++;
                switch(count) {
                    case 0:
                        return {
                            value: obj.title, 
                            done: false}
                    case 1:
                        return {
                            value: obj.year,
                            done: false
                        }
                    case 2:
                        return {
                            value: obj.director,
                            done: false
                        }
                    case 3 :
                        return { value: undefined, done: true}
                    default:
                        return { value: undefined, done: true}
                }
            }
        }
    }
}

let data = SW8[Symbol.iterator](starwars8);
console.log( data.next() );
console.log( data.next() );
console.log( data.next() );
console.log( data.next() );
console.log( data.next() );

console.log(Array.prototype)