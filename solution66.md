# Solution

Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

```ruby

function last(x) {
  const result = x.split(' ').sort((a, b) => a[a.length -1] >= b[b.length - 1] ? 1 : -1);
  return result;
}
  
```

# Explanation

