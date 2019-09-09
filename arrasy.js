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

const esAlta = persona => persona.altura > 1.75;
const esBaja = persona => persona.altura < 1.75;

var personasAltas = personas.filter(persona => persona.altura > 1.75);
var personasBajas = personas.filter(esBaja);

console.log('Personas Altas', personasAltas);
console.log('Peronsas Bjas', personasBajas);