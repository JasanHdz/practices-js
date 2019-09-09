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