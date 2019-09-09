// Prototipo de Persona.
class Persona {
  constructor(name, lastName, altura) {
    this.name = name;
    this.lastName = lastName;
    this.altura = altura;
  }
  saludar() {
    console.log(`Hola me llamó ${this.name} ${this.lastName} y mido ${this.altura}`);
  }
  soyAlto() {
    return this.altura > 1.8;
  }
}

let jasan = new Persona('Jasan', 'Hernández', 1.8);

class Desarrollador extends Persona {
  constructor(name, lastName) {
    super(name, lastName);
  }
  saludar() {
    console.log(`Hola me llamó ${this.name} ${this.lastName} y son Desarrollador/a`);
  }
}

let pedro = new Desarrollador('Pedro', 'Barruecos', 1.8);