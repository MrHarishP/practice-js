// var missing_elements = function(arr ) {
//     let length=arr.length;
//     let output=[]
//     for(let i=1;i<=length;i++){
//         let j_length=arr.length;
//         let nt=false
//         for(let j=0;j<j_length;j++){
//             if(arr[j]==i) arr.splice(j,1),nt=true
//         }
//         if(!nt) output.push(i)//console.log(i)
//     }
//     return output
//  };

var missing_elements = function(arr ) {
    let narr=[],length=arr.length;
    for(let i=0;i<length;i++){
        if(!narr[i]) narr[i]=-1
        else narr[arr[i]]=arr[i]
    }

    for(let i=0;i<length;i++){
        narr[arr[i]]=arr[i]
        if(narr[i]!==-1)narr.splice(i,1)
            }
        return narr;



}


const result= missing_elements([1, 3, 3, 3, 3])
console.log("-->result",result)