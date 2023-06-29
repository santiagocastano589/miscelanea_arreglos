
function ADN(arrayADN) {
  arrayADN = ["AATGAAC", "GTTTTTC", "GGTAAA", "CCCCATGGG"];
  let acomulador = "";
  for (let i = 0; i < arrayADN.length; i++) {
    for (let j = 0; j < arrayADN[i].length; j++) {
      if (arrayADN[i][j] == "T") {
        acomulador = acomulador + "T";
      }
    }
  
    
  }
   return console.log(acomulador);
}

ADN();
