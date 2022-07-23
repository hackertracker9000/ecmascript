//Replace All
const string = 'Con JavaScript creo el futuro de la web, JavaScript es maravilloso!';

const replaceString = string.replace("JavaScript", "Python");



const replaceString2 = string.replaceAll("JavaScript", "Python");

console.log(replaceString);
console.log(replaceString2);

//Métodos privados de clases

class Mensaje {
    #show(val) {
        console.log(val);
    };
    get #add(val) {
        ...
    }

}

const mensaje = new Mensaje();
mensaje.show('Hola Mundo!');

//Promise.any

const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1,promise2,promise3])
.then(response =>console.log(response));

//Referencias débiles Weak Ref

class anyClass {
    constructor(element) {
        this.ref = new WeakRef(element)
    }
    {...}
}

//Nuevos operadores de asignación

let isTrue = true;
let isFalse = false;

console.log(isTrue &&= isFalse);

let isTrue1 = true;
let isFalse1 = false;

console.log(isTrue1 ||= isFalse1);

let isTrue2 = undefined;
let isFalse2 = false;

console.log(isTrue2 ??= isFalse2);