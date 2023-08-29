var extract_number = function(s) {
    let a = []
    for (let i=0; i<s.length;){
        if (s.charCodeAt(i)>=48 && s.charCodeAt(i)<=57){
            let j=i;
            while (j<s.length && s.charCodeAt(j)>=48 && s.charCodeAt(j)<=57){
                
                j=j+1
            
            } 
            a.push(s.charCodeAt(i,j))
        }
        else {
            i=i+1
        }
    }return a
};

let s= "abv345fjjf123tyir45jf6th"
const result = extract_number(s)
console.log(result)