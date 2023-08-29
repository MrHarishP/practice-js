function prime_numbers(n){
    /* Function to store first n prime_numbers in an array
    Return the array containing the prime numbers */
    let a=[]
    let x=2
    while(a.length<n){
        let prime = true;
        for (let i=2; i<x; i++){
            if (x%i==0)
        
        {
        prime=false
        break;
    }
            
        }
    
    }
    if (prime)
    {a.push(x);
    }
    x=x+1
    }