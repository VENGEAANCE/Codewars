# Solution

Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

```ruby

function summation(num){
  let sum = 0
  for(let i = 0; i <= num; i++){
      sum += i
    }
  return sum
}

```

# Explanation

for loop to iterate over given nums.
we use addition assignment to sum until num. sum += i ->
if num is 2 sum should be 3
sum starts at 0
sum(0) = 0 + 1 -> 1
sum(1) = 1 + 2 -> 3
sum equals 3 and is returned
O(n) complexity.