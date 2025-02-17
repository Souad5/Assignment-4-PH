function electionResult(votes) {
    if (!Array.isArray(votes)) {
        return "Invalid";
    }
    
    let mangoCount = 0;
    let bananaCount = 0;
    
    for (let vote of votes) {
        if (typeof vote === 'string') {
            let lowerVote = vote.toLowerCase();
            if (lowerVote === "mango") {
                mangoCount++;
            } else if (lowerVote === "banana") {
                bananaCount++;
            }
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
let result = electionResult("banana, Mango");
console.log(result);