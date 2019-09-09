var contador = 0;
const llueve = () => Math.random() < 0.25;

var vez = 'vez';
do {
  contador > 1 ? vez = 'veces' :  
  contador++;
} while(!llueve())
console.log(`Fui a ver si llovía ${contador} ${vez}`);

do {
  contador++;
} while(!llueve())

contador === 1 ? console.log(`Fui a ver si llovía ${contador} vez`)
: console.log(`Fui a ver si llovía ${contador} veces`)