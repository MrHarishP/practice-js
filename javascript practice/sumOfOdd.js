let sumofodd = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
// var sumOddLengthSubarrays = function (arr) {
//     if(arr.length<3) return sumofodd(arr)
//   let numberArray = 2//arr.length % 2 == 0 ? 0 : (arr.length + 1) / 2;
//   let newArray = [...arr];
//   let sum=0,sum0fIndividua=0
//   for (let i = 0; i < arr.length + 1 - numberArray; i++) {
//     // let oddlength = sumofodd(arr[i])
//     // if (odd<oddlength) odd=oddlength
//     // console.log(newArray.slice(i,numberArray),numberArray,newArray.length,i)
//     let subArray = newArray.slice(i, numberArray+i);
//     let add = sumofodd(subArray);
//     sum+=add;
//     sum0fIndividua+=newArray[i]
//     console.log("output", add, subArray, i,newArray[i]);
// }
// let newVaue=newArray.length+1-numberArray
// while(newVaue<newArray.length){
//     console.log("ooop", newArray[newVaue],sum);

//     sum0fIndividua+=newArray[newVaue]
//     newVaue+=1
//   }
//   if((arr.length + 1) / 2<3)   return sum+(sum0fIndividua)
//   return sum+2*(sum0fIndividua)
// };

function sumOddLengthSubarrays(A) {
    let n = A.length;
    let res = 0;
    for (let l = 1; l <= n; l += 2) {
        for (let i = 0; i <= n - l; i++) {
            res += A.slice(i, i + l).reduce((a, b) => a + b);
        }
    }
    return res;
}
const arr = [6,9,14,5,3,8,7,12,13,1]//[1,2]//[10,11,12]//[1, 4, 2, 5, 3];
const resut = sumOddLengthSubarrays(arr);
console.log("output", resut);
