function willSuccess(marks) {
    if (!Array.isArray(marks)) {
        return "Invalid";
    }

    let pass = 0;
    let fail = 0;

    for (let mark of marks) {
        if (typeof mark !== "number") {
            return "Invalid";
        }
        if (mark >= 50) {
            pass++
        }else {
            fail++;
        }
    }
    return pass > fail;
}
let result = willSuccess([ 90 ]);
console.log(result);