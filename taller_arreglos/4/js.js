function NumPrimo(arreglo) {
    arreglo = [];
    let n = parseInt(prompt("Ingrese el tamaño del arreglo:"));
    let numero = "";
    


    for (let i = 0; i < n; i++) {
        numero = parseInt(prompt("Ingrese el número en la posición:", [i]));
        arreglo.push(numero);
    }


    let primo = numero % numero == 1;
    for (let i = 1; i < arreglo.length; i++) {
        if (primo==1) {
            console.log(primo);
        }
    }

   
}


let salida = NumPrimo();
console.log("los primos son:", salida);