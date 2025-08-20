let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`El número ${i} es par`);
    pares++;
  } else {
    console.log(`El número ${i} es impar`);
    impares++;
  }
}

console.log(`Resumen: ${pares} números pares y ${impares} números impares`);