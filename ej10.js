const ns = [1, 2, 3, 4, 5, 6]; 
let sumaPares = 0;

for (let i = 0; i < ns.length; i++) {
  if (ns[i] % 2 === 0) { 
    sumaPares += ns[i]; 
  }
}

console.log("La suma de los elementos pares del array es: " + sumaPares);