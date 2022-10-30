# Task

Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

# Solution

```ruby
function capitalizeWord(word) {
  return word.split('').map((e, i) => i === 0 ? e.toUpperCase(): e).join('') 
}

```

# Explanation

I used the split method to turn the word to an array, so I could use the array method map to iterate the string array and used a conditional to check if the element was in the 0 index to capitalize the first letter of the word, then used the array method of join to concatenate the string array with an empty string separator as the argument.