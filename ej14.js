function obtenerDivisores(minimo, maximo, divisor) {
    let divisores = [];
  
    for (let i = minimo; i <= maximo; i++) {
      if (i % divisor === 0) {
        divisores.push(i); 
      }
    }
  
    return divisores; 
  }
  
  let minimo = 10;
  let maximo = 50;
  let divisor = 5;
  
  let resultado = obtenerDivisores(minimo, maximo, divisor);
  console.log(`Divisores de los números entre ${minimo} y ${maximo} que son divisibles por ${divisor}:`, resultado);