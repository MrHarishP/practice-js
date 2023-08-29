var maxSubArray = function(nums) {
   
    let sum = nums[0]; // 1 
    // console.log(sum)
    
    for (let i=1; i<nums.length; i++){ // i=2 , 
       nums[i]= Math.max(nums[i], nums[i]+nums[i-1]) //3 //1  //9 
console.log("nums[i]",i,nums[i],nums)
       sum = Math.max(sum , nums[i])//3 //1 //9
    //    console.log(nums[i])
    }
    console.log(sum)
    // return sum
}
let nums = [1,2,-4,5]
maxSubArray(nums)
// console.log()
