# Array Manuplation [ Move Zeros ] - LeetCode

Today, we are Solving the question of leetcode which deals with the concept of Array manuplation.

## Task
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

## Example
```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

```
Input: nums = [0]
Output: [0]
```

### Input Format
  
  A single integer array, _nums_ .

### Constraints
  * 1 <= nums.length <= 104
  * -231 <= nums[i] <= 231 - 1
  
### Test Cases
_ _ _ _

* **Case 1**

Input
```bash
  [0,1,0,3,12]
```
Output
```bash
  [1,3,12,0,0]
```


* **Case 2**

_Input_
```zsh
  [0,1,0,3,12,-1,0,0,999]
```

_Output_

```bash
  [1,3,12,-1,999,0,0,0,0]
```

