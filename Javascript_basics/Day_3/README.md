# Binary Number - HackerRank

Today, we’re working with binary numbers.

## Task

Given a base-10 integer, n, convert it to binary (base-2). Then find and print the base-10 integer denoting the maximum number of consecutive 1‘s in n‘s binary representation. When working with different bases, it is common to show the base as a subscript.

## Example
n = 125

The binary representation of 12510 is 11111012. In base 10, there are 5 and 1 consecutive ones in two groups. Print the maximum, 5.
  

### Input Format
  
  Input must contain an integer n.

### Constraints
  * 1<=n<=10^6
  
### Test Cases
_ _ _ _

* **Case 1**

Input
```bash
  5
```
Output
```bash
    1
```
The binary representation of 510 is 1012, so the maximum number of consecutive 1‘s is 1.

* **Case 2**

_Input_
```zsh
  13
```

_Output_

```bash
    2
```

The binary representation of 1310 is 11012, so the maximum number of consecutive 1‘s is 2.
* **Case 3**

_Input_
```bash
  999
```
_Output_
```bash
    5
```

The binary representation of 999 is 1111100111, so the maximum number of consecutive 1‘s is 5.

