let textooriginal = "HOLA mundo JavaScript ";

let textolimpio = textooriginal.trim().toLowerCase();

let inicio = textolimpio.indexOf("javascript");

textolimpio = textolimpio.substring(inicio);

console.log("Texto original:", textooriginal);
console.log("Texto limpio:", textolimpio);