# Tasks

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

# Solution
```ruby
function removeChar(str){
  // P - a string
  // R - return a string
  // E - 'Amazon' --> 'mazo'
  // P - find the first and last index of the word and delete them
  
  let result = str.slice(1, -1)
  return result
}
```

# Explanation

Slice takes in 2 parameters, slice(start,end). str.slice(1 will delete elements in the 0 index and -1 will delete elements from last index)