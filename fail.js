const API_BASE = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';

const opts = { crossDomain: true };

function obtenerPersonaje(id, callback) {
  const url = `${API_BASE}${PEOPLE_URL.replace(':id', id)}`;
  $.get(url, opts, callback)
    .fail(() => console.log(`Sucedio un error, no se pudo obtener el personaje ${id}`));
}

obtenerPersonaje(4, function (personaje) {
  console.log(`hola yo soy ${personaje.name}`);

  obtenerPersonaje(2, function (personaje) {
    console.log(`hola yo soy ${personaje.name}`);

    obtenerPersonaje(1, function (personaje) {
      console.log(`hola yo soy ${personaje.name}`);

      obtenerPersonaje(3, function (personaje) {
        console.log(`hola yo soy ${personaje.name}`);

        obtenerPersonaje(14, function (personaje) {
          console.log(`hola yo soy ${personaje.name}`);

          obtenerPersonaje(29, function (personaje) {
            console.log(`hola yo soy ${personaje.name}`);
          })
        })
      })
    })
  })
})