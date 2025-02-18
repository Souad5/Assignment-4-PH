function cashOut( money ) {
    if(typeof money !== "number" || money < 0){
        return "Invalid";
    }
    let output = money * 1.75 / 100;
    return output;
}
let result = cashOut("-1000")
console.log(result);