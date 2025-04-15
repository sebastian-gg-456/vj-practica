let palabra = "shiraori";  

let contador = {};

for (let letra of palabra) {

  if (contador[letra]) {
    contador[letra]++;
  } else {
    contador[letra] = 1;
  }
}

console.log("Letras y sus repeticiones:");
for (let letra in contador) {
  console.log(`${letra} = ${contador[letra]}`);
}
