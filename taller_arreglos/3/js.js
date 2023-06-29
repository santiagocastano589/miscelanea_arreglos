function menor(arreglo) {
  arreglo = [];
  let n = parseInt(prompt("Ingrese el tamaño del arreglo:"));


  for (let i = 0; i < n; i++) {
      let numero = parseInt(prompt("Ingrese el número en la posición:", [i]));
      arreglo.push(numero);
  }


  let numeroMenor = arreglo[0];
  for (let i = 1; i < arreglo.length; i++) {
      if (arreglo[i] < numeroMenor) {
          numeroMenor = arreglo[i];
      }
  }

  return numeroMenor;
}


let salida = menor();
console.log("El número menor es:", salida);
