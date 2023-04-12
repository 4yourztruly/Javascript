/* Introduction */ 

// Hello World!
console.log('Hello, world');

// Variables

let greeting = 'Hej från en variabel';
console.log(greeting);
greeting = 3;
console.log(greeting);

greeting = "Hello";
const PI = 3.1415;

// Printing
// Concatenation
console.log(greeting + ' PI is: ' +PI);

// Interpolation and templating literals
console.log(` ${greeting}, PI is: ${PI} `);

// Be careful with floats

console.log(0.1 + 0.2);

// Equality

console.log(1 == 1); //true
console.log(1 == '1'); //true - will convert to same type
console.log(1 === '1');//false

// Loose typing and conversation

let myNumber = 5;
console.log(myNumber);
console.log(typeof myNumber);
console.log(myNumber + 5); // 10

myNumber = '5';
console.log(myNumber);
console.log(typeof myNumber);
console.log(myNumber + 5); //'55'


/* Control flows */
//if

let myAge =38;

if(myAge >= 40) {

    console.log('You are getting old');
}

else{

    console.log('You\'re still young');
}

// ternary operation

myAge === 38 ?
        console.log('38'):
        console.log('not 38');

        //Boolean statement ? true : false
        
/*
camelCase // praxis in 35 functions, vars
PascalCase// classes
snake_case// often not used
*/

//loops
// for

for(let i = 0; i < 5; i++) {

    console.log(i);
}

let persons = [

    'Mike',
    'Emma',
    'Ally',
    'Lizzie'
];

//log entire array

console.log(persons);

//length of array 

console.log(persons.length);

// get the first person 
console.log(persons [0]);

// get the last person

console.log(persons[persons.length - 1]);

// get a slice of the array

let newPersons = persons.slice(0, 2); // first 2

console.log(newPersons);

// add to the start of array
persons.unshift('Acke');

// add to the end of array
persons.push('lotta');

console.log(persons);

// remove from start of array
persons.shift();

// remove from the end of array
persons.pop();

console.log(persons);

// loop arrays

for(let person of persons) {

    console.log(person);
}


// older but still works
for(let i = 0; i < persons.length; i++) {

    console.log(persons[i]);
}

//lambda loop
persons.forEach(x => console.log(x));

//objects

let mike = {

    firstName: 'Mike',
    lastName: 'Bäck',
    age: 38,
    hobby: 'music'
};

console.log(mike);

console.log(`first name: ${mike.firstName}`); 
let mikeStr = `${mike.firstName} ${mike.lastName}, age: ${mike.age}`;
console.log(mikeStr);


