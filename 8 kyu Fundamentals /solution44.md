# Task

Write a function to split a string and convert it into an array of words.

# Solution

```ruby
function stringToArray(string){

  
  let result = string.split(' ')
  
  return result;

}
```

# Explanation 

  // P always a string 
  // R  return an array of words
  // E 'I love amazon --> [i, love, amazon]
  // P use split to separate string by space. Split will return array