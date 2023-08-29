// Write a program to declare an array of size n and store the numbers 1,2,3,4 ...n in the array and return the array.
// let array=[]
// for (let i=1; i<=n; i++){
    // array.push(i)
// }
// return array
// Given an array find the maximum in it and return it 



// Example:-

// Input:-

// Arr=[5, 4, 7, 2, 6]

// Ouput:-

// 7
// function find_maximum(arr,length){
//     /*Function to find the maximum in the array--> arr 
//     return the maximum value*/
//    let max = arr[0] // here we define the max //1
//    for (let i=0; i<length; i++){ // 
//     if(max<arr[i]) max=arr[i] //1 2 9 6 8 
//    }
//    console.log(max)
    
// }
// find_maximum([1,2,9,6,8,7],6)
// Complete the function to find the minimum in the array and return it

// Input :- Array and the length of the array

// [5,6,2,9,-2] , 5



// Output:-

// -2
// function find_minimum(arr,length){
//     /*Function to find the minimum in the array--> arr 
//       return the minimum value*/
// let min = arr[0]
// for (let i=1; i<length; i++){
// if (min>arr[i]) min=arr[i]
// }
// console.log(min)
// }
// find_minimum([3,-1,4,2,1,0],6)
// input 11 , 12
// let x=11
// let prime=true
// for (let i=2; i<x; i++){
//   if (x%i==0)
//   return false
// }
// return true

function primeOrNot(n){
    for(let i=2;i<n;i++){ //to check number is divided by any smaller number
        if(n%i==0) return false
    }
    return true
}
let arr=[11,15,17,19,22]
let primeNumberList=[]
for(let i=0;i<arr.length;i++ ){
    let n =arr[i]
    const prime = primeOrNot(n)
    if(prime) primeNumberList.push(n)
    // if(prime) console.log(n," number is Prime")
    // else console.log(n," number is not prime")
}
console.log("list of prime number -> ",primeNumberList)
