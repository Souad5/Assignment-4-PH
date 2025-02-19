function  validContact( contact ) {
    if (typeof contact !== "string"){
        return "Invalid";
    }
    if(contact.length !== 11){
        return false;
    }
    if(!contact[0] === 0 && !contact[1]=== 1){
        return false;
    }
    if(contact.includes(" ")){
        return false;
    }
    return true;
}
let result = validContact("018308 07523")
console.log(result);
