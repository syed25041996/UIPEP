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
