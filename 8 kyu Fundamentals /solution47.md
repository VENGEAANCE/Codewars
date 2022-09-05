# Solution

You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.

# Solution

```ruby
function reverseWords(str){
  
  let reversedString = str.split(' ').reverse().join(' ')
  
  return reversedString
  
}
```

# Explanation

//P - string //R - return a reverse string, words not letter //E - 'Amazon is awesome' --> 'awesome is Amazon' //P - reverse all the words if the string passed in.