function validEmail(email) {
    if (typeof email !== 'string') {
        return "Invalid";
    }
    
    let specialChars = "._+-@";
    if (specialChars.includes(email[0])) {
        return false;
    }
    
    if (!email.includes("@")) {
        return false;
    }
    
    if (email.indexOf("@") === 0 || email.indexOf("@") === email.length - 1) {
        return false;
    }
    
    if (email.includes(" ")) {
        return false;
    }
    
    if (!email.endsWith(".com")) {
        return false;
    }
    
    return true;
}

let result = validEmail(".jhankar@hero.com");
console.log(result);
