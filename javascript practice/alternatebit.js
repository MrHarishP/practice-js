// Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.
var hasAlternatingBits = function(n) {
    let binary= n.toString(2)
    for (let i=1; i<binary.length; i++){
        if (binary[i-1]===binary[i])return false
    }return true
};