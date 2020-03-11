let arr = [];

for (let i = 0; i < 250; i++) {
    arr[i] = Math.round(Math.random() * (300 - 10 + 1)) + 10;
}

for (let i = 250; i < 500; i++) {
    arr[i] = Math.round(Math.random() * (700 - 500 + 1)) + 500;
}
console.table(arr);

let grootsteGetal = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > grootsteGetal) {
        grootsteGetal = arr[i]
    }
}

let aantalGetallen = arr.length;
let indexGrootsteGetal = arr.indexOf(grootsteGetal);

console.log('Uit het array van ' + (aantalGetallen) + ' getallen, is het getal ' + (grootsteGetal) + ' het grootst. Dit getal zit in index ' + (indexGrootsteGetal) + ' in het array.'); 