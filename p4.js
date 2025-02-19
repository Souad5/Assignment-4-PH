function  isBestFriend( f1 , f2 ) {
    if (typeof f1 !== 'object' || typeof f2 !== 'object' || f1 === null || f2 === null) {
        return "Invalid";
    }

    if(f1.bestFriend === f2.roll && f2.bestFriend === f1.roll){
        return true;
    }
    return false;
}

let result = isBestFriend({ name: "hashem", roll: 1 , bestFriend: 1},
    { name: "kashem" , roll: 1, bestFriend: 1 }
     )
console.log(result);
