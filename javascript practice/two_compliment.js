// function hexdec() {
//   let remainder, questient;
//   let ans = "";
//   let divident = 155;
//   let conhex = {
//     10: "a",
//     11: "b",
//     12: "c",
//     13: "d",
//     14: "e",
//     15: "f",
//   };
//   while (divident >= 16) {
//     remainder = divident % 16;
//     questient = Math.floor(divident / 16).toFixed(0);
//     remainder = conhex[remainder] ? conhex[remainder] : remainder;
//     divident = questient;
//     ans = remainder + ans;
//   }
//   questient = conhex[questient] ? conhex[questient] : questient;

//   ans = questient + ans;
//   return ans;
// }

// const value = hexdec();
// console.log("--vale",value)

// 1convert decimal to binary
// 1's compliment
//2's compliment

function decimal_to_binary(divident) {
  if (divident === 0) {
    return "0";
  }
  const obj = { 1: "00000001" };
  console.log("-->valjdkfjasdjfl", obj[divident] ? true : false);
  if (obj[divident]) return obj[divident];
  // let remainder,quostient
  let binary_result = "";
  while (divident > 0) {
    remainder = divident % 2; //10
    divident = Math.floor(divident / 2);
    // divident=quostient
    binary_result = remainder + binary_result;
  }
  return binary_result;
  //  binary_result = quostient+binary_result
  console.log(binary_result);
}

let divident = -1;
if (divident < 0) divident = -divident;
const value = decimal_to_binary(divident);
console.log("value--->", value);

function one_compliment(decimal_to_binary) {
  let result = "";
  for (let i = 0; i < decimal_to_binary.toString().length; i++) {
    result += decimal_to_binary.toString()[i] == "0" ? "1" : "0";
  }
  return result;
}
const final_result = one_compliment(value);
console.log("one's compiment--->", final_result);

function two_compliment() {
  console.log("--2's compliment inside", final_result);
  let add = "",
    remainder;
  let length = final_result.length;
  let set = { "1+1": "10" };
  let sum = set[final_result[length - 1] + 1];
  (sum = sum == undefined ? "1" : "0")
    let test= !sum? (remainder = 1):''
  console.log("value sum and  inside", final_result, sum, remainder);

  if (remainder) {
    for (let i = length - 2; i >= 0; i--) {
      if (remainder) {
        sum = set[final_result[i] + remainder];
        (sum = sum == undefined ? i : "0"), (remainder = 1);
        add = sum + add;
      } else {
        add = final_result.slice(i) + add;
        break
      }
    }
  } else {
    console.log("else  sum and  inside", typeof final_result,final_result ,final_result.slice(final_result.length-1));

    add = final_result.slice(0,final_result.length - 2) + "1";
    
  }
  return add;
}
const two = two_compliment();
console.log("two's compiment---->", two);


















var toHex = function(num) {
    if (num===0){
        return 0
    }
    
    const hexChars = "0123456789abcdef";
    let result = "";


    if (num < 0){
        num = (2**32) + num
    }
    
    while (num>0){
        const digits = num%16
        result = hexChars[digits]+ result 
        num= Math.floor(num/16)
    }
    return result
};
