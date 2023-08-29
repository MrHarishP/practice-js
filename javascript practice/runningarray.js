var runningSum = function(nums) {
    for (let i=0; i<nums.length-1; i++){
        const sum = (nums[i]+nums[i+1])
        nums[i+1]=sum;
    }
    return nums.join(",")
}
console.log(runningSum([1,2,3,4])); 