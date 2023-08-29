function sumofoddlengtharray(arr){
    let sum = 0
    let n= arr.length
    for (let i=0; i<n; i++){console.log("i",i)
        for (let j=i; j<n; j+=2){console.log("j",j)
            for (let k=i; k<=j;k++){console.log("k",k)
                sum=sum+arr[k]
                console.log("--->",sum)
            }
        }
        console.log("sum of ",sum)
        // return sum 
    }
}
let arr=[1,2,4,5]
sumofoddlengtharray(arr)