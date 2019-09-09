const API_BASE = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const lukeUrl = `${API_BASE}${PEOPLE_URL.replace(':id', 1)}`;
const opts = { crossDomain: true };

function obtenerPersonaje(id, callback) {
  const url = `${API_BASE}${PEOPLE_URL.replace(':id', id)}`;
  $.get(url, opts, function (personaje) {
    console.log(`hola yo soy ${personaje.name}`);
  });
  if (callback) {
    callback();
  }
}

obtenerPersonaje(4, function () {
  obtenerPersonaje(1, function () {
    obtenerPersonaje(18, function () {
      obtenerPersonaje(12, function () {
        obtenerPersonaje(23, function () {
          obtenerPersonaje(34), function () {
            obtenerPersonaje(53);
          }
        })
      })
    })
  })
})