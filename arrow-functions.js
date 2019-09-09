var juan = {
  name: 'Juan',
  edad: 18
}
const MAYORIA_DE_EDAD = 18;

const esMayorDeEdad1 = function (persona) {
  return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad1 (persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} no es mayor de edad`);
  }
}

// Arrow functions
const esMayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD;

const imprimirSiEsMayorDeEdad = persona => {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`);
  } else {
    console.log(`${persona.nombre} no es mayor de edad`);
  }
}

// Destructurar párametros  ({  edad  })


