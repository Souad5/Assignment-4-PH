function cashOut(money) {
    if (typeof money !== 'number' || money < 0) {
        return "Invalid";
    }

    return money * 1.75 / 100;
}

let result = cashOut(999)
console.log(result);