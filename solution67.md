# Solution

An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

Example:

The starting array sequence is [1,2,3,4,5,6,7,8,9]
The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
Your function should return the int 5.
If no number was deleted from the array and no difference with it, your function should return the int 0.

Note: N may be 1 or less (in the latter case, the first array will be []).

```ruby

function missingNumber(arr, mixArr){
    let arrSum = arr.reduce( (a,c) => a + c, 0 )
    let mixSum = mixArr.reduce( (a,c) => a + c, 0 )
    return arrSum - mixSum
}

```

# Explanation

If there arent missing numbers the length will be the same so we will check that first, becuase its constant time. Next we will subtract the total of each array which will give us the missing numbers. 
