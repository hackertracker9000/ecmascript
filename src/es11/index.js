//Dinamic import

const button = document.getElementById("btn");

button.addEventListener("click", async function() {
    const module = await import("./file.js");
    module.hello();
})

//Big int

const bigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(bigNumber);
console.log(anotherBigNumber);

//Promise all

const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));

//Globalthis

console.log(window);
console.log(globalThis);

// Operador Nullish Coalescing

const foo = null ?? 'default string';
console.log(foo);

const foo2 = 'viper' ?? 'default string';
console.log(foo2);

//Encadenamiento opcional

const user = {};

console.log(user?.profile?.email);

if(user?. profile?. email) {
    console.log('email');
} else {
    console.log('Exit Error Code 0')
}

//