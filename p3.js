function electionResult(votes) {
    if (!Array.isArray(votes)) return "Invalid"; 

    let mangoCount = 0;
    let bananaCount = 0;

    for (let vote of votes) {
        if (typeof vote === "string") {
            if (vote === "mango" || vote === "Mango") {
                mangoCount++;}
            else if (vote === "banana" || vote === "Banana"){
                bananaCount++;} 
        }
    }

    if (mangoCount > bananaCount) {
        return "Mango";
    } else if (bananaCount > mangoCount) {
        return "Banana";
    } else {
        return "Draw";
    }
}

let result = electionResult(["mango","mango" , "banana"]);
console.log(result);