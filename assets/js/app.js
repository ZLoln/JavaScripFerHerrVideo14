

//alert('Hola desde app.js');


//console.log('Hola Mundo');

let a = 10,
    b = 20,
    c = 'Hola ', //JS percibe el espacio detras del string así que al concatenar dos string no los mostrará pegados.
    d = 'Spiderman',
    x = a + b;

const saludo = c + d;


//console.log('%c Mis variables', 'color:red; font-weight: bold'); // '%c' sirve para indicar que el texto que vamos a introducir es CSS, en el segundo argumento indicamos la propiedades del CSS.*/

/*console.log ( {a} ); //las llaves indican que "c" es un objeto, cuando comprovemos la consola, nos aparecerá impreso {b: 20}
console.log ({b}); 
console.log ( {c} );*/


c = 'Hola de nuevo ';

//console.table({a, b, c, d, x }); //nos muestra este objeto en forma de tabla con  un index y el valor correspondiente de cada una de las propiedades.

let miNuevoNombre = 'Lola Navarro';

console.log (miNuevoNombre + ' López');

let outerWidth = 1000000;

const outerHeight = 790;

//console.log ('a', a); //las comillas simples nos permiten mostrar en consola un texto, en este caso el nombre de la variable


//console.warn (a); nos permite imprime un mensaje de consola que parece una advertencia, mostrando el icono naranja de warning 
//console.error (c); nos permite imprime un mensaje de consola que parece un error, mostrando el icono rojo de error


/* esta es una forma bastante extendida de declarar un conjunto de variables
let a = 10;
let b = 20;
let c = 30;
let d = 40;
let x = a + b;

console.log (x);*/



/* let e = 20, f = 30, g = 21, h = 12, z = e + h; 
Podemos declarar las variables en una sola línea escribiendo el "let" junto a la primera variable y añadiendo las demás sepárandolas con una coma, detrás de la última variable usamos el ";".*/ 


/*let e = 20,  
    f = 30, 
    g = 21, 
    h = 12, 
    z = e + h; esta forma de declarar un conjunto de variables es la más adecuada, puesto que el códico se ejecuta en una sola línea, es más fácil de leer para los programadores y es más rápida de escribir

console.log (h);*/




/* var b = 10; actualmente esta forma de declarar variables se considera mala práctica

const c = 10;


a = 20;

b = 30;

c = 15; no se puede asignar un nuevo valor a una constante */