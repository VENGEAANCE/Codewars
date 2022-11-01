# Solution

Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE" "Example Input"
You may assume the input only contain English alphabet and spaces.

```ruby

function stringTransformer(str) {
    
  return str.split(' ')
  .reverse()
  .join(' ')
  .split('')
  .map(l => l === l.toLowerCase() ? l.toUpperCase() : l.toLowerCase())
  .join('');
  
}



```

# Explanation
str -> Example Input

We first split the string using space separator to turn it to an array to then use array method reverse() to reverse the elements of the array.
Then we concatenate the elememnts on the array and return a new string to get 'Input Example'.
Now that our string has been reverse, we split it once more without a separator, becuse we want to iterate through all letter elements and not the words.
Then we iterate through the array and check if each element strictly equals l (letter) to a lower case letter therefore returning its oppsite if true.
