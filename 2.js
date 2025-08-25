function task2(num) {
    let first = Math.floor(num / 2);
    let second = num - first;
    return [first, second];
}
let n=Number(prompt("n sonni kiriting"))
console.log(task2(n))
