

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

    var moveZeroes = (nums) => {
    let lastNonZeroNumber = 0;
    
    //Moves all the non zero numbers at the start of the array
    for(let i=0; i<nums.length;i++){
       if(nums[i] !=0){
           nums[lastNonZeroNumber] = nums[i];
           lastNonZeroNumber++;
       } 
    }
    
    //Moves all the zeroes replaced from last non zero number found 
    //to the end of array      
    for(let i = lastNonZeroNumber; i<nums.length;i++){
        nums[i] =0;
    }
    
};


