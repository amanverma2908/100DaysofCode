function findPalindrome(str) {
  for(var i=0;i<str.length;i++){
    if(str.charAt(i)!=str.charAt(str.length-i-1)){ // Comparison fail
      return `${str} is not Palindrome` ; //returns if false
    }
  }
  return `${str} is Palindrome`;  //Returns if true
}

let str = prompt("Enter to Check Palindrome");  // Takes input from the user
console.log(findPalindrome(str)); //calls the function
