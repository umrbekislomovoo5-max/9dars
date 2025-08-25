function task8(word) {
    let result = [];
    for (let i = 1; i <= word.length; i++) {
        result.push(word.slice(0, i)); 
    }
    return result;
}
let massiv=[hello]
console.log(task8(massiv))