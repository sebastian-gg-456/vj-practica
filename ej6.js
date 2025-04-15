let num1 = 100;
let num2 = 700;

  let start = Math.min(num1, num2) + 1;
  let end = Math.max(num1, num2) - 1;
  
    console.log(`Los números que separan ${num1} y ${num2} son:`);
    for (let i = start; i <= end; i++) {
      console.log(i);
    }

