function print_subarray(arr,length){
    /*Function to print all the subarrays given in an array
    Input arr--> array, length -->length of an array */

// let array='arr';
// let a = [1,2,3,4,5];

for (let i=0; i<length; i++){ //0
    for (let j=i; j<length; j++) //0,1,2,3,4,5
    {
         var setn="";
        for (let k=i ; k<=j; k++)
        {
            setn+=arr[k]
        }
            console.log(setn);
    }
    // console.log(set)
}
}
let arr=[1,2,3,4,5]

print_subarray(arr,arr.length)