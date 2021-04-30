//Assertions

let sentence = `My name is Syed and I am very happy to be here on this joyous occasion`
let char = new RegExp(/\ba(n|m)+(\w|\b)/gim)
let result = sentence.match(char)
console.log(result)

//Look ahead assertion
let games = "Ludo is more fun than snake and ladders"
let check = new RegExp(/as(?= fun)/g)
console.log(games.match(check))

//Negative lookahead assertion

console.log(/\d+(?!\.)/g.exec('3.141'));


//Groups and ranges

const imageDescription = 'This image has a resolution of 2489×1280 pixels.';
const regexpSize = /([0-9]+)×([0-9]+)/;
const matchit = imageDescription.match(regexpSize);
console.log(`Width: ${matchit[1]} ,Height: ${matchit[2]}.`);


let newsentence = "The lazy brown fox jumped over the fence"
let vowel = new RegExp(/[aeiou]/gi)
console.log("The number of vowels are :" + newsentence.match(vowel).length)


let personList = `First_Name: Syed, Last_Name: Hussaini
First_Name: Jane, Last_Name: Smith`;
let regexpNames =  /First_Name: (\w+), Last_Name: (\w+)/mg;
let matchs = regexpNames.exec(personList);
do {
    console.log(`Hello ${matchs[1]} ${matchs[2]}`);
  } while((matchs = regexpNames.exec(personList)) !== null);


//Quantifiers

const speak = 'abbbbbbbbbbaaaaaaaccccddddaaa abcbacbcdabcbcbca';
const regexspeak = /b{1,2}cb/;
const regexspeaker = /b{2,}a/
console.log(speak.match(regexspeak)[0]);
console.log(speak.match(regexspeaker)[0]);


//Replace and check
let garbage = "I eat an apole iveryday"
let res = garbage.replace(/\bi/, 'e')
let res2 = garbage.replace(/\Bo/, 'p')
console.log(1, res)
console.log(2, res2)
