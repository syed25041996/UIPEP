var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//Basic types
var names = "Syed";
names = "Rahul";
var allNames = function (firstname, lastname) {
    return firstname + " " + lastname;
};
console.log(allNames("Syed", "Hussaini"));
var heroes = {
    strength: "Flying",
    weakness: "Krypton",
    getPowers: function () {
        return this.strength + this.weakness;
    }
};
var heroes2 = {
    strength: "Running",
    getPowers: function () {
        return "Hello";
    }
};
var strength = heroes.strength, weakness = heroes.weakness;
console.log(heroes);
console.log(heroes2.strength);
var pageNumbers = 12;
var myFavBook = ['Mystety', 'Thriller'];
var student = "Syed";
var IStudent = student;
var students = function () {
    return;
};
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
var User = /** @class */ (function () {
    function User(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    User.prototype.getFullName = function () {
        return this.firstname + " " + this.lastname;
    };
    User.age = 449;
    return User;
}());
var user = new User("Syed", "HUssaini");
console.log(user.firstname);
console.log(User.age);
//Generic types
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign({ id: id }, obj);
};
var users = {
    fullname: "Bob",
    data: {
        meta: "23/123"
    },
    meta: "hello"
};
var users2 = {
    fullname: "Bob",
    data: ["apples", "woranges"]
};
console.log(addId(users));
console.log(addId(users2));
var StatusEnum;
(function (StatusEnum) {
    StatusEnum[StatusEnum["seen"] = 0] = "seen";
    StatusEnum[StatusEnum["notSeen"] = 1] = "notSeen";
    StatusEnum["notSent"] = "Network issues";
})(StatusEnum || (StatusEnum = {}));
var newStatus = StatusEnum.notSent;
console.log(newStatus);
console.log(StatusEnum.seen);
