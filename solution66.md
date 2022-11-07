# Solution

Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

```ruby

function last(x) {
  const result = x.split(' ').sort((a, b) => a.charCodeAt(a.length -1) - b.charCodeAt(b.length -1));
  return result;
}

last('jared', 'josue', 'jared', 'hernandez', 'machado') -> 'jared', 'jared', 'josue', 'machado', 'hernandez'
  
```

# Explanation

We split the string of words and separate them by each space. Then we use array method sort and grab the last element of a and last element of b and pass a comparison function, which says if the character represented by a code returned by the method charCodeAt() minus the the character represented by a code from b returns a positive number it will go first, if the subtraction is negative it will go after the positive number, making the the last letter of the words be arranged alphabetically. sun nov 6 2022

