# Solution

An AI has infected a text with a character!!

This text is now fully mutated to this character.

If the text or the character are empty, return an empty string.
There will never be a case when both are empty as nothing is going on!!

# Solution

```ruby
function contamination(text, char){

  return char.repeat(text.length)
}

```

# Explanation

  // p - 2 params str, char
  // r - return a string with all original charaters replaced by the letter
  // e - 'amazon', 'f' --> 'ffffff' 
  // p  - replace all letters with the given character 

  using the repeat method we will repeat the char passed the amout of times the lenght of the text