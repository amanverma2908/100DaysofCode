function FloydsTriangle(n) {
    let num = 0;
    let str = "";
    for(let i=1; i<= n; i++) {
        for(let j=1; j<=i; j++) {
            str += ++num;
            str += j===i ? "\n" : " "
        }
    }
    return str
}
    
let input = prompt("Enter a positive value");
console.log(FloydsTriangle(input));
