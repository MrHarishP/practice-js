'use strict';

process.stdin.setEncoding('utf-8');
const a = 3;
const b=4;

function max(a, b){
    /*write the code to find the maximum between two numbers below 
     only print the maximum number  */
    
if (a>b)
console.log(a)
else
console.log(b)
    
}

//Dont change anything below. If changed click on reset.
async function readInput() {
        let inputString = '';
        process.stdin.on('data', inputStdin => {
            inputString += inputStdin;
            const inputArr = inputString.split(/(?:\r\n|\r|\n)/g)
            // console.log(inputArr);
            max(parseInt(inputArr[0]), parseInt(inputArr[1]))
            process.exit();

        })

}
readInput();

