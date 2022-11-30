# Task

Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"

# Solution



```ruby

const removeConsecutiveDuplicates = s => s.split(' ').filter( (word, index, array) => word != array[index-1]).join(' ')


```

# Explanation

We separate the array by each space and return the array of substrings, then tell the filter method to use 3 parameters.
We name them word, index, array
The filter method compares the current word w against the previous word a[i-1].  If they are the same, then != returns false to filter() and the word is removed. If they are not the same, != returns true and filter() keeps the word.