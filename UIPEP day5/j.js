// let occupation = {
//     Name : 'Syed',
//     age : 23,
//     place: 'Sultanpalya'
// }

// console.log(occupation.age)

// occupation.email = "me@awesome.com"

// console.log(occupation)


// let boys = [
//     {
//         sid: '12',
//         power: 'run'
//     },
//     {
//         sid: '22',
//         power: 'fly'
//     },
//     {
//         sid: '32',
//         power: 'swim'
//     }
// ]

// console.log(boys[1].power)

// boys.forEach(function(b){
//     console.log(b)
// })

// let news = boys.filter(function(b){
//     return b.sid === '22' 
// }).map(function(b){
//     return b.power
// })

// console.log(news)


// const x = 11

// const color = x > 12 ? 'wow' : 'bleh'

// switch(color){
//     case 'wow':
//         console.log('good')
//         break;
//     case 'bleh':
//         console.log('okay')
//         break;
//     default:
//         console.log('okay nor good')
//         break;
// }

// let books = (book1=1, book=2) => book1 + book

// console.log(books(23,12))

// boys.forEach((b) => console.log(b))


// // function bio(firstname, lastname, dob){
// //     this.firstname = firstname
// //     this.lastname = lastname
// //     this.dob = new Date(dob)
// // }

// // bio.prototype.fulldob = () => {return this.dob.getFullYear()}
// // bio.prototype.fullname = () => {return `${this.firstname} ${this.lastname}`}

// class bio{
//     constructor(firstname, lastname, dob){
//         this.firstname = firstname
//         this.lastname = lastname
//         this.dob = new Date(dob)
//     }

//     fulldob(){
//         return this.dob.getFullYear()}
//     fullname = () =>  `${this.firstname} ${this.lastname}`

// }

// p1 = new bio("Syed", "HUssaini", "3-3-1987")

// console.log(p1.fulldob())
// console.log(p1.fullname())
// console.log(p1)


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('p');

    // Add text node with input values
    li.appendChild(document.createTextNode(` name :${nameInput.value}   email: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}