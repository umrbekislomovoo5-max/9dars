function task1(array) {
    let min = array[0];
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
        if (array[i] > max) {
            max = array[i];
        }
    }
    return [min, max];}
    let n = Number(prompt("Nechta element kiritmoqchisiz?"));
let array = [];

for (let i = 0; i < n; i++) {
    let son = Number(prompt(`Massivning ${i + 1}-elementini kiriting:`));
    array.push(son);
}

console.log("Kiritilgan massiv:", task1(array));
