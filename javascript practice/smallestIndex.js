var revamp = function(arr) {
    
    // let obj={};
    // let index=0,greater=0,smaller=Infinity,ans;
    // arr.forEach((data)=>{
    //     obj[data]=obj[data]+1||1
    //     greater=greater<data?data:greater
    //     smaller=smaller>data?data:smaller
    // })
    // let value=Object.keys(obj).filter((data)=>obj[data]>1)[0]
    // value=parseInt(value)
    // index=arr.indexOf(value)
    // console.log(index,smaller,greater,value,arr,obj)
    // // if(greater==value) ans=smaller//value+smaller;
    // // else if(value==smaller) ans= greater
    // // else{
    //     for(let i=1;i<arr.length;i++){
    //         let unique = arr[index]+i;
    //         console.log("--else part",arr[index],i,!obj[unique],unique)
    //         if(!obj[unique]){ ans=i;break}
    //    }
    // // }
    // return ans  
    arr.sort((a, b) => a - b); // Sort the array in ascending order
  
  let operations = 0;
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      operations += arr[i - 1] - arr[i] + 1;
      arr[i] = arr[i - 1] + 1;
    }
  }  
  return operations;  
};

let arr=[1, 1, 3, 1, 4]//0[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]//5[1, 1, 3, 1, 4]//[1,1,2,3]//[1, 2, 2] 
//[1,2,2,3], 4[1 2 3 1 4]
let ans = revamp(arr)
console.log("-->main output",ans)
