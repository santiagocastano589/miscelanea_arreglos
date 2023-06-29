let array = ["a", "b", "c", "d", "e", "f", "g"];

function letras(array) {
    let abc = prompt("ingrese una letra del abecedario");
    for (let i = 0; i < array.length; i++) {
        if (abc == array[i]) {
            return "si está";
        }
        
    }
    return "letra no está";
}

let salida = letras(array);
console.log(salida);