const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Escribe una palabra: ', (palabra) => {
  console.log(`"${palabra}" tiene ${palabra.length} letras.`);
  rl.close();
});

