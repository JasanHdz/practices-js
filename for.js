const jasan = {
  name: 'Jasan',
  lastName: 'Hernández',
  age: 18,
  peso: 75
}
console.log(`Al inicio del año ${jasan.name} pesaba ${jasan.peso}Kg`);

const YEART_TO_DAYS = 365;
const INCREMENTO_PESO = 0.2;

const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;


for (let i = 1; i < YEART_TO_DAYS; i++) {
  var random = Math.random();

  if (random < 0.25) {
   aumentarDePeso(jasan)
  }
  else if (random < 0.50) {
    adelgazar(jasan)
  } 
}

console.log(`Al final del año ${jasan.name} pesa ${jasan.peso.toFixed(1)}Kg`);