function reversal(str){
    let n=str.length
    // half the string
for (let i =0; i < n / 2  ; i++){
    if(str[i] !== str[n - 1 - i] ){
        console.log("--->",str)
        return false
    }
}
return true
}
let str = "abba"
console.log(reversal(str))