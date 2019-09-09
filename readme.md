## Como funcionan las clases en JavaScript

Cuando hablamos de Objetos en JavaScript estamos hablando de **Prototipos** y no tanto de clases. Si bien en las nuevas versiones de JavaScript, existe lo que son clases, no son clases como tales, como las podríamos conocer de otros lenguajes de programación, no existe la herencia, pero sí existen prototipos y si vamos a ver que esas clases de javascript terminan siendo nadamas y nada menos que prototipos. Para entender bien de que se trata estó empezaremos a crear prototipos y vamos ir llegando a lo que son las clases de Javascript.

La palabra new seguida del prototipo, lo que hace es que cree un nuevo objeto, como los objetos que venimos trabajando, otra cosa que podemos empezar a hacer es pasarle párametros a nuestro prototipo y asignarle los valores al prototipo. Implicitamente Javascript retorna this cuando invocamos a esta función.

```js
// Prototipo de Persona.
function Persona(name, lastName) {
  this.name = name;
  this.lastName = lastName;
  console.log('Me ejecutaron');
  // Implicitamente Javascript retorna this cuando invocamos a esta función.
}

Persona.prototype.saludar = function () {
  console.log(`Hola me llamó ${this.name} ${this.lastName}`);
}

let jasan = new Persona('Jasan', 'Hernández');
jasan.saludar();
```

```js
// Prototipo de Persona.
function Persona(name, lastName) {
  this.name = name;
  this.lastName = lastName;
  console.log('Me ejecutaron');
  // Implicitamente Javascript retorna this cuando invocamos a esta función.
  // return this
}
let jasan = new Persona('Jasan', 'Hernández');
```

Si no estamos utilizando la palabra new y esto es algo que no se hace, pero si no utilizamos la palabra new y esto es algo que no se hace. Lo que va a suceder es lo equivalente a hacer los siguiente.

```js
// Prototipo de Persona.
function Persona(name, lastName) {
  var obj = {}
  obj.name = name;
  obj.lastName = lastName;
  return obj;
}
let jasan = new Persona('Jasan', 'Hernández');
```

Si nosotros quisieramos que la Persona tnega una función para saludar. Lo que podemos hacer es decirle al prototipo de persona que exista esa función de saludar. Para hacer eso lo haremos de la siguiente manera

```js
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
```

## Modificación de un Prototipo

Lo que tenemos que entender básicamente es que el prototipo es un Objeto más de Javascript entonces si nosotros lo modificamos en una cierta altura del código, apartir de ahí va a quedar modificado, que significa esto.  

## El contexto de las funciones: ¿quién es this?

En la clase soyAlto cuando usamos un arrow function nos marcá un error pues dice que altura no esta definida y es que las arrow function tienen el método bind(this) internamente, y lo que hace bind(this) es apuntar al objeto global que es window y no el protoipo al que deseamos hacer referencia dentro de nuestro prototype.

```js
Persona.prototype.soyAlto = () => this.altura > 1.8;
```
Es lo mismo que:
```js
Persona.Protoype.soyAlto = (function () {
  return this.altura > 1.8;
}).bind(this);
```

## La verdad oculta sobre las clases en Javascript

Si conoces algún otro lenguaje de programación que soporte la herencia entre clases, tal vez te estes preguntando ¿Como hagó para que un prototipo herede de otro? Asi como tal Javascript no soporta la herencia porque no soporta las clases, no hay clases hay prototipos que son objetos que les vamos agregando métodos que reciben funciones, saben quien es this y saben como ejecutarlas pero no existe un sistema como tál donde yo diga esté protipo va a heredar de otro. Lo que si existe es la herencia prototipal. 

**¿Como funciona la herencia prototipal en JavaScript?** 

Los objetos en JavaScript son "contenedores" dinámicos de propiedades. Estos objetos poseen un enlace a un objeto prototipo. Cuando intentamos acceder a la propiedad de un objeto, la propiedad no sólo se busca en el propio objeto sino también en el prototipo del objeto, en el prototipo del prototipo, y así sucesivamente hasta que se encuentre una propiedad que coincida con el nombre o se alcance el final de la cadena de prototipos.

Ya vimos que creamos prototipos y lo que podemos hacer ahora es crear un prototipo hijo que va a ser un subtipo de persona digamos un Desarrollador. Lo que va a decir es que este tipo de desarrollador va a ver si sabe responder al método que queremos llamar, si no sabe como responder a ese método. Lo que va a hacer es buscar en el prototype padre si lo encuentra. Si no lo encuentra va a seguir esa cadena de buscar todos los protipos arriba de el es decir los prototipos Padres hasta llegar prototipo base de Todos los objetos que es Object. Si object no conoce ese mensaje recien ahí va a lanzar el error de que no se puede ejecutar ese método, veamos como funciona esto en la práctica.

```js
// Funcion que recibe los 2 prototipos
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
```

## Clases en JavaScript 

Apartir del año 2015 lo que sucede es que esté lenguaje de Javascript se fue actualizando por eso es que vamos a encontrar distintas versiones con los nombres de EcmaScript 2015, Ecmascript 2016, Ecamascript 2017, y próximamente EcmaScript 2018.

Ecmascript es el estandart donde se basa Javascript para conformarce como lenguaje quiere decir que son todas las funcionalidades que trae el lenguaje, entonces está nueva actualización del lenguaje, lo que trae es una facilidad para lograr lo mismo que estabamos haciendo con los prototipos pero de una manera mucho más sencilla. Lo que no tenemos que olvidarnos es que por debajo siguen siendo todos prototipos por más que vamos a utilizar la palabra class que hace referencia a clase por debajo todo es un prototipo. 

Las clases de JavaScript son introducidas en el ECMAScript 2015 y son una mejora en la sintaxis sobre la herencia basada en prototipos de JavaScript.

La palabra clave extends se usa en declaraciones de clase o expresiones de clase para crear una clase que es hija de otra clase.

El método constructor es un método especial para crear e inicializar un objeto creado a partir de una clase.

```js
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
```

# Asincronismo

## Como funciona el asincronismo en JavaScript

Resulta que Javascript solo puede hacer una cosa a la vez, si, no importa cuantos nucleos tenga tu computadora o tu server, Javascript solo va a poder ejecutar una tarea a la vez. Lo importante es entender que aunque Javascript no es multitarea, puede delegar la ejecución de ciertas funciones a otros procesos, esté modelo de concurrencia se llamá *_Event Loop_*. 
Veamoslo con un ejemplo de compra y venta de bitcoins:

Javascript tiene algo llamdo Pila de ejecución o callstack donde va poniendo llamadas a funciones segun el orden de ejecución de nuestro programa, si una función llamá a otra entonces está se agrega a la pila, cuando termina de ejecutar una función la saca de la pila y la bota, en algún momento de nuestro programa necesita saber el precio del bitcoin porque un usuario compro bitcoins con pesos mexicanos, diciendole que datos tiene que ejecutar cuando esos datos esten listos.

El callback es una función que javascript ejecutará cuando regrese la respuesta del servidor, mientras tanto Javascript seguirá ejecutando nuestro programa principal y cuando llegue la respuesta, la ejecución a ejecutar va a ir a parar a otro lado, a la cola de tareas. Aquí las tareas se encolan según el orden en que van llegando, ¿que tareas van a parar a está cola?.

- Las peticiones a servidores 
- Las intereacciones visuales
- La navegación client side
- Eventos que se realizan cada cierto tiempo.

Solo hasta que el programa se quede sin funciones en la pila de ejecución es que va a ir a buscar las funciones de la cola de tareas, por eso es que es necesario no generar un cuello de botella en la pila de ejecución. Si Javascript se queda ejecutando funciones muy pesadas, las funciones de la cola de tareas van a tardar mucho tiempo en ejecutarse.

Por eso recuerda estás palabras y recuerdales antes de irte a dormir:
**"No voy a bloquear el EventLoop"**

## Como funciona el tiempo en Javascript

En principio, cualquier tarea que se haya delegado al navegador a través de un callback, deberá esperar hasta que todas las instrucciones del programa principal se hayan ejecutado. Por esta razón el tiempo de espera definido en funciones como setTimeout, no garantizan que el callback se ejcute en ese tiempo exactamente, sino en cualquier momento a partir de allí, sólo cuando la cola de tareas se haya vaciado.

## Callbacks

Una función de callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

Ejemplo:
```js
function saludar(nombre) {
  alert('Hola ' + nombre);
}

function procesarEntradaUsuario(callback) {
  var nombre = prompt('Por favor ingresa tu nombre.');
  callback(nombre);
}

procesarEntradaUsuario(saludar);
```
El ejemplo anterior es una callback sincrónica, ya que se ejecuta inmediatamente.

Sin embargo, tenga en cuenta que las callbacks a menudo se utilizan para continuar con la ejecución del código después de que se haya completado una operación a sincrónica  — estas se denominan devoluciones de llamada asincrónicas. Por ejemplo, nuestro sencillo ejemplo de maps-example.html (ver en vivo) utiliza la API de Google Maps y la API de geolocalización para mostrar un mapa de la ubicación actual de su dispositivo.

Como obtener las coordenadas del dispositivo de su GPS es asíncrono (no sabemos exactamente cuándo se devolverán los datos), el método Geolocation.getCurrentPosition() toma una función de devolución de llamada anónima como parámetro, que a su vez toma los datos de coordenadas devueltos como un parámetro. Esta función solo se ejecuta cuando se devuelven los datos de coordenadas.


## Manejando el Orden y el Asincronismo en Javascript

Una manera de asegurar que se respete la secuencia en que hemos realizado múltiples tareas es utilizando callbacks, con lo que se ejecutará luego, en cada llamada. Lo importante es que el llamado al callback se haga a través de una función anónima. Sin embargo, al hacerlo de esta manera generamos una situación poco deseada llamada CallbackHell.

## Manejo de errores con callbacks

Para solucionar el problema de quedarnos sin conexión, u otro error similar, en medio de una sucesión de callbacks utilizamos el método fail().

## Promesas

Vimos que con los callbacks tenemos un problema, y es que cuando llamabamos un callback dentro de otro callback, y eso callback llamá a otro y así sucesivamente, nuestro código se vuelve bastante ilegible, lo cual no es lo que queremos tener en nuestro programa, es por eso que surguen las promesas que se incorporan al lenguaje de Javascript, antes necesitabamos usar una librería externa como bluer, en su epoca de las más famosas, pero ahora ya la mayoría de los browsers soportan las promesas. De igualmente si nos queremos asegurar de que las promesas corran en nuestro programa, podemos usar lo que se llamá un pollifyl que detecta si el navegador en el que está corriendo nuestro código, no tiene el soporte para promesas, va a crear las clases de las promesas por nosotros, y así nosotros podriamos seguir utilizando y sería transparente para nuestro código.

## ¿Qué son las promesas?

Tenemos que pensar en las promesas como valores que aún no conocemos, la promesa de que ahí va a ver un valor cuando una acción asincrona suceda y se resuelva. **Las promesas tienen 3 estados** y son como **cualquier objeto de javascript**. Estados:

1. Pending
2. Fulfilled      ---> llama a la función ---->  .then()
3. Rejected      ---> llama a la función ---->  .catch()

- Cuando creamos una promesa, la promesa va a estar en estado *pending*, si la promesa se resulve pasará al estado de *fulfilled* y si ocurre algún error en la acción asincrona que está resolviendo va a pasar al estado de *rejected*

Ahora bien estamos diciendo que las promesas funcionan de manera asincrona pero no siempre es así, las promesas pueden resolverse de manera asincrona, es decir resolver una promesa que resuelva un número, sin realizar niguna tarea asincrona también es algo posible.

- Para obtener el valor de la *resolución* de la promesa podemos llamar a la función *.then(val =>)* y ahí le vamos a pasar como párametro otra función la cuál en el primer párametro que va a recibir esa función es el valor que nosotros esperabamos.
-  En cambio si sucede algún error, al resolver una promesa es decir si nunca se llega a reslver la promesa y se rechaza, entonces podemos llamar a la función *.catch(err =>)* en la cual vamos a obtener como párametro el error que sucedio.

Así es como se crea un promesa:

```js
new Promise(function (resolve, reject) {
  // ...
}).then(valor => {
  // ...
}).catch(err => {
  // ...
})
```

Modificando el ejercicio anterior quedaría de la siguiente manera:

```js
const API_BASE = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_BASE}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, data => resolve(data))
    .fail(() => reject(id));
  });
}
obtenerPersonaje(1)
  .then(function (personaje) {
    console.log(`El personaje 1 es ${personaje.name}`)
  })
  .catch(id => console.log(`sucedio un error al obtener el personaje con el id ${id}`))
```

## Promesas encadenadas.

                  |--> **Fulfilled**   ---> Promise(Pending) ---->  (resolve)Fulfilled
**Pending** {                                              ↓ (reject)
                  |-->  **Rejected**   ---> llama a la función ---->  .catch(err =>...)

Algó más acerca de las promesas es que luego de llegar al estado de **fulfilled** podemos retornar otra promesa y de esa manera ir encadenandolas en sucesivas funciones asincronas y cada una de ellas puede ser rechazada o resuelta en una nueva promesa que terminará en el estado de **fulfilled**.

Los callbacks se anidan, las promesas también pero su razón de ser es que las promesas se pueden encadenar.

```js
const API_BASE = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_BASE}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, data => resolve(data))
    .fail(() => reject(id));
  });
}

function onError(id) {
  console.log(`sucedio un error al obtener el personaje con el id ${id}`)
}

obtenerPersonaje(1)
  .then(function (personaje) {
    console.log(`El personaje 1 es ${personaje.name}`)
    return obtenerPersonaje(2);
  })
  .then(function (personaje) {
    console.log(`El personaje 2 es ${personaje.name}`)
    return obtenerPersonaje(3);
  })
  .then(function (personaje) {
    console.log(`El personaje 3 es ${personaje.name}`)
    return obtenerPersonaje(4);
  })
  .then(function (personaje) {
    console.log(`El personaje 4 es ${personaje.name}`)
    return obtenerPersonaje(5);
  })
  .then(function (personaje) {
    console.log(`El personaje 5 es ${personaje.name}`)
    return obtenerPersonaje(22);
  })
  .then(function (personaje) {
    console.log(`El personaje 22 es ${personaje.name}`)
    return obtenerPersonaje(29);
  })
  .catch(onError);
```

## Múltiples Promesas en Paralelo.

Para hacer el llamado a múltiples promesas, nos apoyamos en un array de ids con el que luego construimos otro arreglo de Promesas, que pasaremos como parámetro a Promise.all( arregloDePromesas ), con las promesas podemos encadenar llamadas en paralelo, algo que no es posible usando callbacks.

```js
const API_BASE = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true };

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_BASE}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, data => resolve(data))
    .fail(() => reject(id));
  });
}
function onError(id) {
  console.log(`sucedio un error al obtener el personaje con el id ${id}`)
}

var ids = [11, 22, 13, 15, 1, 28, 45];
var promesas = ids.map(id => obtenerPersonaje(id));
Promise
  .all(promesas)
  .then(personaje => console.log(personaje))
  .catch(onError);
```

## Async-await: lo último en asincronismo

Async-await es la manera más simple y clara de realizar tareas asíncronas. Await detiene la ejecución del programa hasta que todas las promesas sean resueltas. Para poder utilizar esta forma, hay que colocar async antes de la definición de la función, y encerrar el llamado a Promises.all() dentro de un bloque try … catch.

```js
const API_BASE = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true };

function obtenerPersonaje(id) {
  return new Promise((resolve, reject) => {
    const url = `${API_BASE}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, opts, data => resolve(data))
    .fail(() => reject(id));
  });
}
function onError(id) {
  console.log(`sucedio un error al obtener el personaje con el id ${id}`);
}

async function obtenerPersonajes() {
  var ids = [11, 22, 13, 15, 1, 28, 45];
  var promesas = ids.map(id => obtenerPersonaje(id));
  try {
    personajes = await Promise.all(promesas);
    console.log(personajes);
  } catch (id) {
    onError(id);
  }
}
```
