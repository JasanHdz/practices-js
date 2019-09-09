function heredaDe(protipoHijo, protipoPadre) {
  // Creamos una nueva función que será el intermediario para conectar los 2 prototipos
  var fn = function () {}
  // Al prototype de Fn lo estamos igualando al prototype del prototipoPadre
  fn.prototype = protipoPadre.prototype
  // El prototipoHijo tendra un nuevo Objeto dentro de su prototype con los valores del prototipo FN el cual contiene todas las propiedades de prototipoPadre
  protipoHijo.prototype = new fn;
  // Al protoipoHijo dentro de su constructor le estamos añadiendo las nuevas propiedades de el protipoHijo modificado es decir con los nuevos valores.
  protipoHijo.prototype.constructor = protipoHijo;
}

// Prototipo de Persona.
function Persona(name, lastName, altura) {
  this.name = name;
  this.lastName = lastName;
  this.altura = altura;
}
Persona.prototype.saludar = function () {
  console.log(`Hola me llamó ${this.name} ${this.lastName} y mido ${this.altura}`);
}
Persona.prototype.soyAlto = function () {
  return this.altura > 1.8;
}

heredaDe(Desarrollador, Persona);

function Desarrollador(name, apellido) {
  this.name = name;
  this.lastName = apellido
}
Desarrollador.prototype.saludar = function () {
  console.log(`Hola me llamó ${this.name} ${this.lastName} y son Desarrollador/a`);
}

