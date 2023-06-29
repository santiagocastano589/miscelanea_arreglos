let array1 = [1,2,3,4,5,6];
let suma = 0;
let promedio = 0;

for (let i = 0; i < array1.length; i++) {
    suma = suma + array1[i];
    promedio  = suma / array1.length;
}

console.log(promedio);