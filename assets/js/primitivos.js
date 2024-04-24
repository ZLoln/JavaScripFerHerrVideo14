
let nombre = 'Peter Parker'; //esto es un string
console.log (nombre);

nombre = 'Ben Parker';
console.log (nombre);

nombre = "Tía May";
nombre = `Tía May`;

console.log (typeof nombre);

nombre = 1234;
console.log (typeof nombre);


let esMarvel = true; //esto es un boleano
console.log (typeof esMarvel);


let edad = 33; //esto es un número
console.log (typeof edad);

edad = 33.001; //esto también es un número, JS no hace distinciones entre enteros o decimales
console.log (typeof edad);


let superPoder; //aparece en consola como undefined porque la variable no se ha inicializado con un valor
console.log (typeof superPoder); 

let soyNull = null; //esto es un null, en la consola aparece reconocido como si fuese un objeto
console.log (typeof soyNull);

let symbol1 = Symbol ('a');
let symbol2 = Symbol ('a');//aunque aparentemente ambos son el mismo símbolo, JS lo interpreta como dos completamente diferentes.

console.log (typeof symbol1);

console.log (symbol1 === symbol2); // esto nos permite comprobar que JS no considera ambos símbolos como exactamente el mismo

