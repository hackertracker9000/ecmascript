//Metodo flat

let array = [1,2,3, [1,2,3,[1,2,3]]];

console.log(array.flat(2));

//Metodo flat map

let array1 = [1,2,3,4,5];

console.log(array1.flatMap(value => [value, value * 2]));

//Eliminar espacios en blanco de un string

let hello = '       Hola';
console.log(hello);
console.log(hello.trimStart());

let hola = ' Hola Mundo         ';
console.log(hola);
console.log(hola.trimEnd());

//Parámetro opcional de catch
//El parámetro opcional de catch permite omitir el error si es necesario, 
//para que esté obligatorio.

try {
    // Manejar el código
  } catch (err) {
    // Se utiliza el parámetro `err`
  }
  
  try {
    // Manejar el código
  } catch {
    // Manejar el error sin el parámetro.
  }

  //Cómo transformar un array de arrays en un objeto

  let entries = [["name", "oscar", ], ["age", 33]];

  console.log(Object.fromEntries(entries));

  let entries2 = [["name", "oscar", ], ["age", "33"]];

  console.log(Object.fromEntries(entries2));

  //Propiedad description de los tipos symbol

  let mySymbol = 'Symbol';

  let symbol = Symbol(mySymbol);

  console.log(symbol.description);