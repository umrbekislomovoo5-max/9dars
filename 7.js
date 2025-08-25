function formatPhoneNumber(arr) {
    if (arr.length !== 10) {
        return "Array uzunligi 10 bo'lishi kerak!";
    }
    return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}${arr[9]}`;
}


let phoneArray = [];

for (let i = 0; i < 10; i++) {
    let digit = Number(prompt(`Telefon raqamingizning ${i + 1}-raqamini kiriting (0-9):`));
    while (digit < 0 || digit > 9 || isNaN(digit)) {
        digit = Number(prompt(`Iltimos, 0-9 oralig'ida raqam kiriting. ${i + 1}-raqam:`));
    }
    phoneArray.push(digit);
}

console.log("Telefon raqami:", formatPhoneNumber(phoneArray));
