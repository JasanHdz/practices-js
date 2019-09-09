var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.86,
  cantidadDeLibros: 120,
}
var roberto = {
  nombre: 'Roberto',
  apellido: 'Gonzalez',
  altura: 1.66,
  cantidadDeLibros: 80,
}
var rodrigo = {
  nombre: 'Rodrigo',
  apellido: 'Calderon',
  altura: 1.76,
  cantidadDeLibros: 190,
}
var sara = {
  nombre: 'Sara',
  apellido: 'Elena',
  altura: 1.69,
  cantidadDeLibros: 220,
}
var andrea = {
  nombre: 'Andrea',
  apellido: 'Santos',
  altura: 1.89,
  cantidadDeLibros: 250,
}
var irma = {
  nombre: 'Irma',
  apellido: 'Pérez',
  altura: 1.60,
  cantidadDeLibros: 210,
}

var personas = [
  vicky,
  roberto,
  rodrigo,
  sara,
  andrea,
  irma
];

// by Jasan Hernández
// Usando un acumulador global 
let acum = 0;
for (let i = 0; i < personas.length; i++) {
  acum += personas[i].cantidadDeLibros;
}
console.log(`En total todos tienen ${acum} libros`);
/* El método reduce() nos permite reducir, mediante una función 
que se aplica a cada uno de los elemento del array, 
todos los elementos de dicho array, a un valor único.
*/
var totalLibros = personas.reduce((acum, persona) => {
  return acum += persona.cantidadDeLibros
}, 0);

console.log(`En total todos tienen ${totalLibros} libros`);