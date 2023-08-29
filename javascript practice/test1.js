function weekday_name(n){
    /*write the code to print the weekday name in lower case when
     the weekday number is given using switch statements*/
       let day;
   switch(n){
    case 1:
        day="monday";
        break;
    case 2:
        day="tuesday";
        break;
    case 3:
        day= "wednesday";
   break;
    case 4:
        day= "thursday";
    break;
    case 5:
        day= "friday"
    break;
    case 6:
        day= "saturday"
    break;
    case 7:
        day= "sunday"
    break;
    default:
    day= 'invalid'
}
console.log(day)

}
   weekday_name(5)

//    Write a program using only while loops to print all the even numbers from 1 to n

// Input

// if n = 10

   let i=1
while (i<=n){
        if (i%2==0){
            console.log(i)
        }
        i++
}