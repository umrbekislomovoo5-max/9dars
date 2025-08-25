function task4(arr) {
    arr.sort((a, b) => a - b); 
    return [arr[0], arr[arr.length - 1]];
}

let n = Number(prompt("Nechta element kiritmoqchisiz?"));
let nasiv = [];

for (let i = 0; i < n; i++) {
    let son = Number(prompt(`${i + 1}-elementni kiriting:`));
    nasiv.push(son);
}

console.log("Eng kichik va eng katta son:", task4(nasiv));
