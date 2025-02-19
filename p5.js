function  calculateWatchTime( times ) {
    for(let value of times){
        if (typeof value !== "number"){
            return "Invalid"
        }
    }
    let totalSec = 0;
    for(let time of times){
        totalSec = totalSec + time;
    }
    let hour = (totalSec - (totalSec % 3600))/3600;
    let minute = (totalSec - (totalSec % 60))/60;
    let second = (totalSec % 60);

    return {hour, minute, second};
}

let result = calculateWatchTime([])
console.log(result);
