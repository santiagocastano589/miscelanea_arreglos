let arreglo1 = ["Pera", "Cebolla", "Limón", "Pimentón"];
let arreglo2 = ["Manzana", "Banano", "Lechuga", "Perejíl"];

let frutas = [];
let verduras = [];


for (let i = 0; i < arreglo1.length; i++) {
  if (arreglo1[i] == "Pera" || arreglo1[i] == "Limón" || arreglo1[i] == "Manzana" || arreglo1[i] == "Banano") {
    frutas.push(arreglo1[i]);
  } else {
    verduras.push(arreglo1[i]);
  }
}

for (let i = 0; i < arreglo2.length; i++) {
  if (arreglo2[i] == "Pera" || arreglo2[i] == "Limón" || arreglo2[i] == "Manzana" || arreglo2[i] == "Banano") {
    frutas.push(arreglo2[i]);
  } else {
    verduras.push(arreglo2[i]);
  }
}

console.log("Frutas:", frutas);
console.log("Verduras:", verduras);
