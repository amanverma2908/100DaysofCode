/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const sorted = nums.sort((x,y) => x-y), permutations = [];

    const rcr = (arr, permutation) => {
        if (!arr.length) return permutations.push(permutation);

        let prev = -Infinity;
        for (let i = 0; i < arr.length; i++) {
            if (prev === arr[i]) continue;

            newArr = arr.slice(0, i).concat(arr.slice(i+1));
            rcr(newArr, [...permutation, arr[i]]);

            prev = arr[i];
        }
    }
    rcr(nums, []);

    return permutations;
};
