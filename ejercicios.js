let nombre = "Dylan Rivero";
let edad = 18;
let ciudad = "Entre Rios"

let mensajeEdad;
if (edad < 13){
    mensajeEdad = "Eres un niño";
} else if (edad >= 13 && edad <= 17){
    mensajeEdad = "Eres un adolescente";
} else {
    mensajeEdad = "Eres un adulto";
}

console.log("Informacion Personal");
console.log("Nombre: " + nombre);
console.log("Edad: " + edad);
console.log("Ciudad: " + ciudad);
console.log("Clasificacion: " + mensajeEdad);