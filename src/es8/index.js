const data = {
    frontend: 'Luis',
    backend: 'Raul',
    designer: 'Ana'
}

const entries = Object.entries(data);

console.log(entries);
console.log(entries.length);


//Values

const data = {
    frontend: 'Luis',
    backend: 'Raul',
    designer: 'Ana',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

//Padstart

const string = 'Hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '  -----'));
console.log('food'.padEnd(12, '  -----'));

//Comas


//Async Await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
            ? setTimeout(() => resolve('Hello World!'), 3000)
            : reject(new Error('Test Error'))
          })
};

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();


const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();

