// function reverseNumber(n){
//     let remainder;//4
//     let quotient=n;//123
//     let sum=0
    
//     while(quotient>10){
//       remainder=n%10;//4  //3 //2
//       quotient=Math.floor(n/10);//123 //12 //1
//       n=quotient
//       sum=sum*10+remainder //4 //43 //432
//       console.log(remainder,quotient,sum)
//     }
//     console.log("--sum",sum=sum*10+quotient)
//     // sum*=10+quotient //4321
//     return sum
//   }
  
//   const reverse=reverseNumber(1234)
//   console.log(reverse)

// function check_armstrong(n){
     
//     let sum=0;
//     let temp=n;//153
//     while(temp>0){
//         let rem=temp%10; // 3 // 5// //+1
//         temp=parseInt(temp/10); //15 //1
//         sum= sum + rem**3; //0 + 3*3*3 + 5*5*5 + 1*1*1
//         console.log(n,"rem-->",rem,"quotient-->",temp,sum)
//     }
//     if(sum==n){
//         console.log(true)
//     }
//     else{
//         console.log(false)
//     }
//     }
//     check_armstrong(153)