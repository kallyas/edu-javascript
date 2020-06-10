//strings
let firstName = "Kallyas";
let lastName = "Iden";

const fullName = `${firstName} ` + `${lastName}`;

//log to the console
console.log(`${firstName} ${lastName}`);

//toLowerCase
console.log(`${firstName} ${lastName}`.toLowerCase());

//toUpperCase
console.log(`${firstName} ${lastName}`.toUpperCase());

//split()
// creates an array from the strings
console.log(`${firstName} ${lastName}`.split(" ")); //strings array
console.log(`${firstName} ${lastName}`.split('')); //single character array

//fullName
console.log(fullName);

//Numbers
let num = 7.77;

//round off
console.log(num.toFixed(1));

//Arrays
let numbers = [5, 7, 6];

//add/append elemts to the array
numbers.push(9, 2, 4);
console.log(numbers);

//pop() removes the last element in an array and returns it
console.log(numbers.pop());

//iterate through an array forEach()
numbers.forEach((element) => {
    console.log(element);
})

//objects
let person = {
    firstName: 'Iden',
    lastName: 'Kallyas',
    address: {
        city: 'Austin',
        state: 'Texas'
    },
    age: 25,
    cats: ['Milo', 'Tito', 'Achiles']
};

console.log(person);
