//Funciones
function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 45;
    var country = country || 'MX';
    console.log(name, age, country);
}

//Es6

function newFunction2(name = 'oscar', age = 45, country = 'MX') {
    console.log(name, age, country);

}

newFunction2();
newFunction2('Ricardo','23','CO');

/// Template Literals

let hello = 'Hello';
let world = 'World';

let epicPhrase = hello + ' ' + world;

//console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//Concat New Line

let lorem = 'Lorem Ipsum a dummy text of the printing and typesetting industry.\n'
+ 'Otra frase epica.';

// ES 6
let lorem2 = `Frase epica que necesitamos
Ahora es otra frase epica!
`;

console.log(lorem);
console.log(lorem2);


// Destructuring

let person = {
    'name': 'Gab',
    'age' : 50,
    'country': 'MX'
}

console.log(person.name, person.age, person.country);

let {name,country} = person;
console.log(name,country);

/// Spread Operator

let team1 = ['Pepe','Juan','Pedro'];
let team2 = ['Raul','Esperanza','Sandra'];

let team3 = ['David', ...team1, ...team2];

console.log(team3);

// Let Var Const

var hola = hola;
// disponible de forma global

{
    var globalVar = 'global var';

}

{
    let globalLet = 'global Let';
    console.log(globalLet);
}

console.log(globalVar);

const a = 'b';

a = 'a';

//////Arrow Functions, Promesas y Parámetros en objetos

let name = 'Gab';
let age = 43;

// Es 5
obj = {
    name:name,
    age: age
};

// Es 6
obj2 = {
    name,
    age
};

console.log(obj2);

// Arrow functions

const names = [

    { name: 'Gab', age: 50, country: 'MX', income: 1000 },

    { name: 'Teresa', age: 90, country: 'US', income: 7000 }

]

let listOfNames = names.map(function (item) {
console.log(item.name);
})

//Arrow functions

let listOfNames2 = names.map(items => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    ...
}

const listOfNames4 = name => {
    ...
}

const square = num => num * num;

//Promises

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey Resuelto!')
        } else {
            reject('Ups Error!')
        }

    });
}

helloPromise()

  .then(response => console.log(response))
  .then(()=> console.log('hola!'))
  .then(()=> console.log('hola esto es una prueba!'))
  .catch(error => console.log(error));

//Clases, Módulos y Generadores

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;


    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }

}

const calc = new calculator();
console.log(calc.sum(2, 2));

///Modules
import { hello } from './module';

hello();

//Generators

function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World!';
    }

};

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


//Es 7



