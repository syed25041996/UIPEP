//Basic types
let names : string = "Syed"
names = "Rahul"

const allNames = (firstname : string,  lastname: string) : string => {
    return firstname + " " + lastname
}

console.log(allNames("Syed","Hussaini"))


//Interfaces and functions
interface HerosInterface{
    strength: string;
    weakness? : string;
    getPowers() : string;
}

const heroes: HerosInterface ={
    strength: "Flying",
    weakness : "Krypton",
    getPowers(){
        return this.strength + this.weakness
    }
}

const heroes2: HerosInterface ={
    strength: "Running",
    getPowers(){
        return "Hello"
    }
}


const {strength, weakness} = heroes
console.log(heroes)
console.log(heroes2.strength)

// Aliases and Unions
type ID = string
type noOfPages = number
type genre = string[]

interface BooksInterface{
    id : ID
    nameOfBook : string;
}

let pageNumbers : string | number = 12

const myFavBook : number | genre = ['Mystety', 'Thriller']

let student : unknown = "Syed"
let IStudent = student as string

const students = (): void => {
    return 
}


//Password checker
// var password : string = "wordpass";
// var response: string;
// var entryCount: number = 0;
// var entryLimit : number = 3;
// var error: boolean = false;

// while(response != password && !error){
//      if(entryCount < entryLimit){
//           response = window.prompt("Enter Password");
//      } else {
//           error = true;
//      }
//      entryCount++
// }


// if(error){
//      alert("Too many entries");
// } else {
//      alert("Success, the password is " + password);
// }

//quiz app

// var questions :  Array<{prompt : string, answer: string}> = [
//     {
//           prompt: "What color are apples?\n(a) Red/Green\n\ (b) Purple\n(c) Orange",
//           answer: "a"
//     },
//     {
//          prompt: "What color are Bananas?\n(a) Teal\n\ (b) Magenta\n(c) Yellow",
//          answer: "c"
//     },
//     {
//          prompt: "What color are strawberries?\n(a) Yellow\n\ (b) Red\n(c) Blue",
//          answer: "a"
//     }
// ];
// var score : number = 0;

// for(var i = 0; i < questions.length; i++){
//     var response = window.prompt(questions[i].prompt);
//     if(response == questions[i].answer){
//          score++;
//          alert("Correct!");
//     } else {
//          alert("WRONG!");
//     }
// }
// alert("you got " + score + "/" + questions.length);

//Classes
class User {
    firstname: string
    lastname : string
    static readonly age : number = 449

    constructor(firstname, lastname){
        this.firstname = firstname
        this. lastname = lastname
    }

    getFullName() : string{
        return this.firstname + " " + this.lastname
    }
}

const user = new User("Syed", "HUssaini")
console.log(user.firstname)
console.log(User.age)


//Generic types
const addId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16)
    return {id, ...obj}
}


interface UsersInterface<T, V>{
    fullname: string
    data : T
    meta?: V
}

const users : UsersInterface<{meta: string}, string> = {
    fullname: "Bob",
    data:{
        meta:"23/123"
    },
    meta: "hello"
}

const users2 : UsersInterface<string[],string> = {
    fullname: "Bob",
    data : ["apples","woranges"]
}

console.log(addId(users))
console.log(addId(users2))


interface IStatus{
    id: string
    status: StatusEnum
}

enum StatusEnum{
    seen,
    notSeen,
    notSent = "Network issues",
}

let newStatus : StatusEnum = StatusEnum.notSent

console.log(newStatus)
console.log(StatusEnum.seen)