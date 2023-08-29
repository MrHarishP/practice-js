// Write a program to store first n prime numbers in an array . After storing return the array.﻿



// Input:-

// n=5

// Output:- Return the output in the form of an array.

// 2

// 3

// 5

// 7l

// 11
function primeOrNot(n){
    for(let i=2;i<n;i++){ //to check number is divided by any smaller number
        if(n%i==0) return false
    }
    return true
}
function prime_numbers(n){
/* Function to store first n prime_numbers in an array
Return the array containing the prime numbers */
// for(let i=2;i<n; i++){
//     if (n%i===0) return false
// }
// return true
// let arr=[12 , 1 , 3 ,5];

let primeNumberList=[]
for (let i=2; primeNumberList.length<n; i++){
    let ni= i
    const prime = primeOrNot(ni)
    if (prime) primeNumberList.push(ni)
}
    return primeNumberList
}
