// Variável
var devMaisLindo = 'Kevin';

console.log(devMaisLindo); // O dev mais lindo é o Kevin

// Condição
var devMaisLindo = 'Kevin';

if (devMaisLindo == 'Kevin') {
  console.log('Apenas a verdade...');
} else {
  console.log('Tem algo errado aí!');
}

// Loop
var devMaisLindo = 'Fran';

var listaDevs = ['Kevin', 'Togo', 'Fran'];

while (devMaisLindo != 'Kevin') {
  console.log('Esse não é o dev mais lindo, tentando novamente.');

  devMaisLindo = listaDevs[Math.floor(Math.random() * listaDevs.length)];
}