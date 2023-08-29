// here we are using for loop to print triangle of *
function print_pattern(){
    /* Function to print the pattern */
    let n=5;
   for ( let i=0;i<n; i++){
       for(let j=0; j<n-i; j++){
           process.stdout.write("*")
       }
       console.log("")
   }
}
// here we are using for loop to print triangle of *
function print_pattern(){
    /* Function to print the pattern */
let n=5;
// let string = "";
let i=0;
while (i<n){
   let j=0;
   while ( j<n-i){
       // string += "*"
               process.stdout.write("*")
   j++

   }
   i++
   // string += "\n"
       console.log("")
}
   // console.log(string)
}

// creating space between *
function print_pattern(){
    /* Function to print the pattern */
let n=5;
let i,j;
for (i=0;i<n; i++){
   for (j=0; j<=i; j++){
   process.stdout.write("*")
   }
   for(let k=n-1-i;k>0;k--){process.stdout.write(` `)}
   for (let l=0; l<=i; l++){
   process.stdout.write("*")
   }
   console.log("")
}
}


// printing star form top to bottom and bottom to top
function print_pattern(){
    /* Function to print the pattern */
let n=5
   var i=0;
   while(i<n){
       // process.stdout.write("*")
       let j=0;
   while(j<n-i){
       process.stdout.write("*")
   j++
   }
     i++
   console.log("")
   
   }
   
   var i=1;
   while(i<=n){
       let j=0;
       while(j<i){
           process.stdout.write("*")
           j++
       }
       i++
       console.log("")
   }
   
}