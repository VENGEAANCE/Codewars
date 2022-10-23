# Solution

Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

```ruby

function findAverage(array){
  
  let sum = array.reduce( (e,a) => e + a, 0 )
  return array.length == 0 ? 0 : sum / array.length
  
}

```

# Explanation

