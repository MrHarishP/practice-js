function print_output(n){
    /*Print all even numbers from 1 to n except the ones divisible by 4
    use the help of continue statement to leverage this */
    for (let i=1; i<=n; i++){
        if(i%2==0 ){
            if(i%4==0) continue // here we can also use the if(i%4!==0)
            console.log(i)
        }
    }
    
    
}