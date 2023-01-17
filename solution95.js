// Leetcode 724. Find Pivot Index


// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

let pivotIndex = function (nums) {
    let totalSum = 0;
    let leftSum = 0;
    nums.forEach(e => totalSum += e);


    for (let i = 0; i < nums.length; i++) {
        // Check for 0 pivot index first   
        if (leftSum === totalSum - leftSum - nums[i]) {
            return i;
        }
        // Then keep adding to leftSum
        leftSum += nums[i];
    }
    // if we dont hit if stament return -1
    return -1
}


