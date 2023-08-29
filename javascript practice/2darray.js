// 'use strict'
var maximumWealth = function(arr) {
    // console.log("a,b,c",c)
    let sum=0
    for (let i=0; i<arr.length; i++){
        // sum+=arr[i]
        sum=sum+arr[i] //1 //3 // 6 // 3 //
        // for (let j=0; j<account[j]; j++)
       console.log("sum",sum) 
    }
    return sum;
    // return i
}
// const arr = [1,2,3,4,5]
const arr=[[1,2,3],[3,4,5,4]]
function maxSumofArray (arr){

    let maximum=0
    for (let i=0; i<arr.length; i++){
    
    const sumofArray = maximumWealth(arr[i])
    if(maximum<sumofArray) maximum=sumofArray    
    }
    return maximum
}
const maxisum = maxSumofArray(arr)
console.log("maximum vaues=>",maxisum)

// const a=0
// let b=1
//  b=0;
// var c=5 //hoisting
// var c=7
// // console.log("a,b,c",a,b,c)
// // a=5
// b=7
// c=8



// you are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

var maximumWealth = function(arr) {
    let maxwealth=0
    for (let i=0; i<arr.length; i++){
        let wealth = 0
        for (let j=0; j<arr[i].length; j++){
            
        wealth+=arr[i][j]
        }
    maxwealth=Math.max(maxwealth, wealth)
    }
    return maxwealth
 };