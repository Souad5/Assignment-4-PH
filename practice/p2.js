function  validEmail( email ) {
    if(typeof email !== "string"){
        return "Invalid";
    }
    let specialChars = "._+-@";
    if (specialChars.includes(email[0])) {
        return false;
    }
    
    if (!email.endsWith(".com")){
        return false;
    }
    if(!email.includes("@")){
        return false;
    }
    if(email.includes(" ")){
        return false;
    }
    if(email.includes("@") === 0 || email.includes("@") ===email.length -1){
        return false;
    }
    return true;
}
let result = validEmail("");
console.log(result)