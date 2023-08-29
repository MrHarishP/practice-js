// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.



// Try to Solve in time Complexity 0(n*k).

var rotate = function(nums, k) {
    let n= nums.length
    for (let i = 0 ; i < k ; i++){
        const last = nums[n-1]
        console.log("last---->",last)
        for (let j = n - 1; j > 0; j--){
            nums[j] = nums [ j - 1 ]
            console.log("nums---->" , nums[j])
        } 
    nums[0]=last
    }
    return nums
};
let nums = [1,2,3,4,5,6,7]
let k = 3
let value = rotate(nums, k )
console.log(value)