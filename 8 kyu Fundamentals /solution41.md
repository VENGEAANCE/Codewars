# Tasks

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


# Solution
```ruby
function isPangram(string){
  string = string.toLowerCase()
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.includes(x));
}
```

# Explanation

// P - string
// R - return a boolean
// E - 'Jared' --> false
// P - declare string to make string lowercase. return the alphabet string, then split to individual letters and use every() method to test whether all elements in the array pass the test implemented by the provided function x being the param taking each letter from alphabet and checking if string provided includes (x) which are the letters from the alphabet.