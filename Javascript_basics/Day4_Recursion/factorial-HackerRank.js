/*
    Program to Find the factorial of any positive number.
    
    HackerRank Problem Link : https://www.hackerrank.com/challenges/30-recursion/problem
    
    -Aman Verma
*/


function factorial(n) {
  return (n > 1) ? (n * factorial(n - 1)) : n;  //used ternery operator [  (condition) ? {if true} : {if false}  ]
}

let num = prompt("Enter a number : ");  // prompt to get user input
console.log(`The factorial of ${num} is: ${factorial(num)}`);  //calling the function & print the output using f-Strings




