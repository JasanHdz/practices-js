// Transformar un array

// En esta clase veremos cómo transformar un array.El método map() itera sobre los elementos de un array
// en el orden de inserción y devuelve array nuevo con los elementos modificados.

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.86
}
var roberto = {
  nombre: 'Roberto',
  apellido: 'Gonzalez',
  altura: 1.66
}
var rodrigo = {
  nombre: 'Rodrigo',
  apellido: 'Calderon',
  altura: 1.76
}
var sara = {
  nombre: 'Sara',
  apellido: 'Elena',
  altura: 1.69
}
var andrea = {
  nombre: 'Andrea',
  apellido: 'Santos',
  altura: 1.89
}
var irma = {
  nombre: 'Irma',
  apellido: 'Pérez',
  altura: 1.60
}


var personas = [
  vicky,
  roberto,
  rodrigo,
  sara,
  andrea,
  irma
];

for (let i = 0; i < personas.length; i++) {
  console.log(`${personas[i].nombre} tiene una altura de: ${personas[i].altura}mts`);
}

// Transformar un array

// En esta clase veremos cómo transformar un array.El método map() itera sobre los elementos de un array
// en el orden de inserción y devuelve array nuevo con los elementos modificados.

const pasarAlturaACms = persona => {
  // persona.altura *= persona.altura * 100;
    return {
    ...persona,
    altura: persona.altura * 100
  }
}
let personasCms = personas.map(pasarAlturaACms)

console.log(personasCms);
