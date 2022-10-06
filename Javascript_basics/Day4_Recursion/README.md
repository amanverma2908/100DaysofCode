# Recursion [factorial of a number] - HackerRank

Today, we are learning about an algorithmic concept called recursion.

## Task
Calculate the factorial of the number 

### Recursive Method for Calculating Factorial
        <img src='https://www.geeksforgeeks.org/wp-content/ql-cache/quicklatex.com-4c912a772dad4e77b0aea07d991b1a13_l3.png' />


int n: an integer

## Example

Consider the following steps. After the recursive calls from step 1 to 3, results are accumulated from step 3 to 1.

* _factorial_(3) = 3 x _factorial_(2) = 3 x 2 = 6
* _factorial_(2) = 2 x _factorial_(1) = 2 x 1 = 2
* _factorial_(1) = 1
  

### Input Format
  
  A single integer, _n_ (the argument to pass to factorial).

### Constraints
  * 2 <= n <= 100
  
### Test Cases
_ _ _ _

* **Case 1**

Input
```bash
  Enter a number : > 56
```
Output
```bash
  The factorial of 56 is: 7.109985878048635e+74
```


* **Case 2**

_Input_
```zsh
  Enter a number : > 3
```

_Output_

```bash
  The factorial of 3 is: 6
```

