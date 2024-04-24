let juegos = ['Zelda','Mario',' Metroid', 'Chrono Trigger'];
console.log('Largo:', juegos.length);

let primero = juegos [2 - 2]; //esto nos muestra el primer elemento de nuestro array, también podríamos ponerlo así "let primero = juegos[0]; 
let ultimo = juegos [juegos.length - 1]; //esot nos permite obtener la información del último elemento cuando no sabemos cuántos hay en el array o cuando la longitud del mismo puede variar con el tiempo

console. log ({primero, ultimo});

juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

let nuevaLongitud = juegos.push( 'F-Zero');
console.log({ nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift('Fire Emblem');
console.log({ nuevaLongitud, juegos });