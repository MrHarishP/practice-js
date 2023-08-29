// var arrange = function(nums) {
//     // let n= nums.length;
//     let pass = []
//     let fail = 0
//     for (let i=0 ; i<nums.length; i++){
//         if (i>pass){

//             pass.push(i)
//         }
//     }
//         console.log("passed --->",pass)
//     // console.log(pass)
// };
function wegetpositive(pass){
    getpositive= pass.filter(nums=> nums >0)
    return getpositive
}
function wegetnagetive(fail){
    getnegative= fail.filter(nums=> nums <0)
    return getnegative
}
function addvalue(){
     result =wegetpositive()+wegetnagetive()
}
// console.log(result)
let nums , pass , fail= [1, -1, 3, 2, -7, -5, 11, 6 ]
// const result= arrange(nums)
// const pst = wegetpositive(fail)
// const ngt = wegetnagetive(fail)
// console.log(pst)
// console.log(ngt)
console.log(addvalue())