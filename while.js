const jasan = {
  name: 'Jasan',
  lastName: 'Hernández',
  age: 18,
  peso: 75
}

const YEART_TO_DAYS = 365;
const INCREMENTO_PESO = 0.3;
const META = jasan.peso - 3;
const aumentarDePeso = (persona) => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

var dias = 1;
while (jasan.peso > META) {
  // debugger;
  if (comeMucho()) {
    //aumentar de peso
    aumentarDePeso(jasan);
  }
  if (realizaDeporte()) {
    //adelgazar
    adelgazar(jasan);
  }
    dias += 1;
}

console.log(`Pasaron ${dias} días hasta que ${jasan.name} ${jasan.lastName} adelgazó 3kg`);