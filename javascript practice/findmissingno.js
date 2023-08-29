var missingNumber = function(nums) {
    let n= nums.length;
    let temp = [];
    for (let i=0; i<n; i++){
        temp[i]=0
        // console.log(temp[i])
    }
    for (let i=0; i<n; i++){
        temp[nums[i]-1]=1
        // console.log("--->",temp[i])
    }
    let ans=0;
    for (let i=0; i<n; i++){
        if (temp[i]==0) ans = i+1
        // console.log(ans)
    }
    console.log("---",ans)
};
let nums=[1,3,0,2,5]
missingNumber(nums)