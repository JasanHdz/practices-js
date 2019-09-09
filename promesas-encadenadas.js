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