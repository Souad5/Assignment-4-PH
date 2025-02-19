function calculateWatchTime(times) {
    for (let time of times) {
        if (typeof time !== 'number') {
            return "Invalid" ;
        } 
    }

    let totalSeconds = 0
    for (let time of times) {
        totalSeconds += time
    }
    
    let hour = (totalSeconds - (totalSeconds % 3600)) / 3600;
    totalSeconds = totalSeconds % 3600;
    let minute = (totalSeconds - (totalSeconds % 60)) / 60;
    let second = totalSeconds % 60;

    return { hour, minute, second };
}
let result = calculateWatchTime([100,3800])
console.log(result)