function calculateVAT( price ) {
    if(typeof price !== "number" || typeof price === "string" || price < 0){
        return "Invalid";
    }
    let output = price * 7.5 / 100
    return output;
}

let result = calculateVAT(999)
console.log(result);
