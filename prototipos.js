// Prototipo de Persona.
function Persona(name, lastName, sexo, altura) {
  this.name = name;
  this.lastName = lastName;
  this.ALTURAMAX = 1.8;
  this.sexo = sexo;
  this.altura = altura;
  console.log('Me ejecutaron');
  // Implicitamente Javascript retorna this cuando invocamos a esta función.
}

Persona.prototype.saludar = function () {
  console.log(`Hola me llamó ${this.name} ${this.lastName} soy ${this.sexo} y mido ${this.altura}`);
}
Persona.prototype.soyAlto = function () {
  if (this.altura >= this.ALTURAMAX) {
    console.log(`Soy ${this.name} y Soy Alto`);
  } else {
    console.log(`Soy ${this.name} y No soy alto`);
  }
}

let jasan = new Persona('Jasan', 'Hernández', 'masculino', 1.72);
let santiago = new Persona('Santiago', 'Cordoba', 'masculino', 1.82);
jasan.saludar();
santiago.saludar();
jasan.soyAlto();
santiago.soyAlto();