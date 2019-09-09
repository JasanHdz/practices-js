// Prototipo de Persona.
class Persona {
  constructor(name, lastName, altura) {
    this.name = name;
    this.lastName = lastName;
    this.altura = altura;
  }
  saludar(fn) {
    console.log(`Hola me llamó ${this.name} ${this.lastName} y mido ${this.altura}`);
    if (fn) fn(this.name, this.lastName, false);
  }
  soyAlto() {
    return this.altura > 1.8;
  }
}
class Desarrollador extends Persona {
  constructor(name, lastName) {
    super(name, lastName);
  }
  saludar(fn) {
    console.log(`Hola me llamó ${this.name} ${this.lastName} y son Desarrollador/a`);
    if(fn) fn(this.name, this.lastName, true);
  }
}

function responderSaludo(nombre, apellido, esDev) {
  setTimeout(() => { 
    console.log(`Buen día ${nombre} ${apellido}`);
  }, 1000);
  if (esDev)
    setTimeout(() => { 
      console.log(`Ah mirá, no sabía que eras desarrollador/a`);
    }, 2500);
}

let pedro = new Desarrollador('Pedro', 'Barruecos', 1.8);
let jasan = new Persona('Jasan', 'Hernández', 1.8);
jasan.saludar(responderSaludo);
pedro.saludar(responderSaludo);