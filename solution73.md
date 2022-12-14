# Task
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true


# Solution

```ruby
function containsDupes(arr){
// Declared local variable to store keys for each element
  let numsMap = {}

  // Loop through each element of the array
  for(let i = 0; i < arr.length; i++){
    // Store the current element in a local variable
    let num = arr[i]

    // Check if the element exists as a key in `numsMap`
    if(numsMap[num]){
        // If it exists, return true to indicate the array contains duplicates
      return true
    }else{
        // If it does not exist, add the element to `numsMap` object.
      numsMap[num] = true
    }
  }

  // If the loops continues without returning true, return false to indicate that no duplicates were found
  return false
}
```

