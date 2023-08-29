// Task details

// Print the following series using while loop

// 1 4 9 16 25 36 …. n

// Input :-

// n = 49

// Output :-

// 1

// 4

// 9

// 16

// 25

// 36

// 49



// Watch the hint video if you get stuck.



// Solve the following question in the compiler, make sure all test case passes and then click submit.

function print_series(n){
    /* Print the following series 
       1 4 9 16 25 36 to n. Note print all the numbers in a seperate line*/
let i=1
let sum=1
while (sum<=n){
    console.log(sum)
    i+=2
    sum+=i
}
    
    
    
}