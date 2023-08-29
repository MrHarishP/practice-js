function maxSubArraySum(a, size)
{
    var maxint = Math.pow(2, 53) //Infinity
    var max_so_far = -maxint - 1 //-infinity
    var max_ending_here = 0
      
    for (var i = 0; i < size; i++)
    {
        max_ending_here = max_ending_here + a[i] //-2 //- //4 //3 //1 //2 //7 //4
        if (max_so_far < max_ending_here) //true //fa //t //t
            max_so_far = max_ending_here //-2 //4 //7
 
        if (max_ending_here < 0)
            max_ending_here = 0 //true //4 //3 //1 //2 //7
    }
    return max_so_far
}
var a = [ -2, -3, 4, -1, -2, 1, 5, -3 ]
const b=maxSubArraySum(a,a.length)
console.log("b vaue-->",b)
