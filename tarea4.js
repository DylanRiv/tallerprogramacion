function saludarSegunHora(nombre, hora) {
    if (hora >= 6 && hora <= 12) {
        console.log(`Buenos días, ${nombre}`);
    } else if (hora >= 13 && hora <= 19) {
        console.log(`Buenas tardes, ${nombre}`);
    } else if ((hora >= 20 && hora <= 23) || (hora >= 0 && hora <= 5)) {
        console.log(`Buenas noches, ${nombre}`);
    } else {
        console.log("Hora inválida");
    }
}

saludarSegunHora("Dylan", 8);
saludarSegunHora("Yuliana", 15);
saludarSegunHora("Sofia", 2);