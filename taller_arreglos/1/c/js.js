let array1 = [1,2,3,4,5,6];
let array2 = array1.splice(array1);

for (let i = 0; i < array2.length; i++) {
    console.log(array2[i] + 1)
}
