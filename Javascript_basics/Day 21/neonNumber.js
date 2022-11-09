const num = prompt("Enter the number: ");
let sqr = num * num; 
let sumOfDigit = 0;
    
while (sqr > 0) {
       sumOfDigit += sqr % 10;
       sqr = Math.floor(sqr / 10);
}
           
if (num == sumOfDigit)
    console.log("Neon Number");
else
    console.log("Not a Neon Number");
