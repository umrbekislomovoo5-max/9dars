function task3(array) {
    let sum = 0; 
    for (let i = 0; i < array.length; i++) {
        sum += array[i] ** 3; 
    }
    return sum;
}

let n = Number(prompt("Nechta massiv elementi kiritmoqchisiz?"));
let umarchik = [];

for (let i = 0; i < n; i++) {
    let son = Number(prompt(`${i + 1}-elementni kiriting:`));
    umarchik.push(son);
}

console.log("Kublar yig'indisi:", task3(umarchik));
