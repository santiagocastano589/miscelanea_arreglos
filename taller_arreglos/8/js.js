function Mayor(arreglo) {
    arreglo = [];
    let n = parseInt(prompt("Ingrese el tamaño del arreglo:"));


    for (let i = 0; i < n; i++) {
        let numero = parseInt(prompt("Ingrese el número en la posición:", [i]));
        arreglo.push(numero);
    }


    let numeroMayor = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > numeroMayor) {
            numeroMayor = arreglo[i];
        }
    }

    return numeroMayor;
}


let salida = Mayor();
console.log("El número mayor es:", salida);
