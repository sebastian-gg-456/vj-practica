let num1 = 5;
let num2 = 25;

  let start = Math.min(num1, num2) + 1;
  let end = Math.max(num1, num2) - 1;

  console.log(`Múltiplos de 3 entre ${num1} y ${num2}:`);
  for (let i = start; i <= end; i++) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
