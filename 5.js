
function task5(array) {
    let toqSon = null;  

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1) {
            toqSon = array[i]; 
            break;             
        }
    }

    return toqSon;          
}

let n = Number(prompt("Nechta element kiritmoqchisiz?"));
let massiv = [];

for (let i = 0; i < n; i++) {
    let son = Number(prompt(`Massivning ${i + 1}-elementini kiriting:`));
    massiv.push(son);
}

console.log("Birinchi toq son:", task5(massiv));