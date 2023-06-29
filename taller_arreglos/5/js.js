function mayores(mayor) {
    let personas = parseInt(prompt("Ingrese la cantidad de usuarios:"));
    mayor = [];

    for (let i = 0; i < personas; i++) {
        let nombre = prompt("Ingrese el nombre del usuario " + (i + 1) + ":");
        let edad = parseInt(prompt("Ingrese la edad de " + nombre + ":"));

        if (edad >= 18) {
            mayor.push(nombre);
        }
    }

    let cantidad = mayor.length;

    console.log("Usuarios mayores de edad:");
    console.log(mayor);
    console.log("Cantidad de usuarios mayores de edad: " + cantidad);

    return mayor;
}

mayores();
