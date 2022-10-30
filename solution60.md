# Solution

In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

```ruby

function repeats(arr){
  return arr
  .filter(e => arr.indexOf(e) === arr.lastIndexOf(e))
  .reduce((e,a) => e + a, 0)
}

```

# Explanation

We filter by checking if the index of the element equals to the last index og the element.
console.log(repeats([4,5,7,5,4,8]), 15)

The index of 4 is 0 and the last index of the second 4 is 4, so every numbers that repeats will have a different index.
The index of 7 (which doesn't repeat) is 2 and the last index where 7 can be found is 2 (2 === 2 ) becuase it doesn't repeat.