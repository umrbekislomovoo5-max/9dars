function task10(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            count++;
        }
    }
    return count;
}
const massiv=[true,false,true,true,false]
console.log(task10(massiv))