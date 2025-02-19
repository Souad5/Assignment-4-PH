function input(nums, target) {
    if(!Array.isArray(nums)){
        return "Invalid";
    }
    if(nums[0] + nums[1] === target){
        return target;
    }
    return false;
};
let result = input([5,2,3,5,4], 7);
console.log(result);