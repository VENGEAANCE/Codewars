# Solution

You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

# Solution

```ruby
function twoSort(s) {
  
let sortedArray = s.sort()

let result = Array.from(sortedArray[0]).join('***')
    
return result


  
}

```

# Explanation

  // P - array of strings
  // R - return a string and have *** between the letters of the first alphabetically sorted string
  // E - ['barron', 'carron', 'arron'] --> a***r**r***o***n
  // P - i need to sort the string array alphabetically, then take the first string and return the string with ascis between each letter.