# Task


# Solution

```ruby
function twoSum(numbers, target) {
    
    // create an object to store the numbers we've seen
    const seenNumbers = {}    

    // loop through the array of numbers
    for (let i = 0; i < numbers.length; i++) {

        // check if we've seen the target number minus the current number
        if (seenNumbers[target - numbers[i]] !== undefined) {

            // if we have, return the indices of the current number and the previously seen number
            return [seenNumbers[target - numbers[i]], i]
        }

        // if we haven't seen the current number, add it to the object
        seenNumbers[numbers[i]] = i
    }
}


```



