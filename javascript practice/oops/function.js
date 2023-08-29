class Triangle
{
    //Write the code here
    constructor (side1 , side2 , side3)
    {
        this.side1= side1
        this.side1= side2
        this.side1= side3
    }
     calculate_area()
    {
       const s = (this.side1 + this.side2 + this.side3)/2
       const area = Math.sqrt(s*(s-this.side1)* (s-this.side2)* (s-this.side3))
       return area
    }
    calculate_perimeter()
    {
        const perimeter= this.side1+this.side2 +this.side3
        return perimeter
    }
}
//Do Not change the Below  Code



var t=new Triangle(3,4,5);
console.log(t.calculate_area());
var per=t.calculate_perimeter();
console.log(per);
t=new Triangle(9,10,11);
console.log(t.calculate_area());
per=t.calculate_perimeter();
console.log(per);