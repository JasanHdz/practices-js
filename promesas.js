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
  })
  .catch(onError);
