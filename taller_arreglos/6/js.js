let valle = ["Cali" , "Tulua", "Cartago", "Salento"];
let quindio = ["Cordoba","Armenia", "Palmira", "Circasia"];

let valleOrdenado = [];
let quindioOrdenado = [];


for (let i = 0; i < valle.length; i++) {
  if (valle[i] == "Salento" || valle[i] == "Armenia" || valle[i] == "Cordoba" || valle[i] == "Circasia") {
    quindioOrdenado.push(valle[i]);
  } else {
    valleOrdenado.push(valle[i]);
  }
}

for (let i = 0; i < quindio.length; i++) {
  if (quindio[i] == "Palmira" || quindio[i] == "Cali" || quindio[i] == "Cartago" || quindio[i] == "Tulua") {
    valleOrdenado.push(quindio[i]);
  } else {
    quindioOrdenado.push(quindio[i]);
  }
}

console.log("Valle:", valleOrdenado);
console.log("Quindio:", quindioOrdenado);