# Task

Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]

# Solution

```ruby
function fizzbuzz(n) {
  const array = []
  
  for (var i = 1; i <= n; i++) {
    const m3 = i % 3 === 0
    const m5 = i % 5 === 0
    if (m3 || m5) { 
      array.push(
        (m3 ? 'Fizz' : '') +
        (m5 ? 'Buzz' : '')
      )
    } else {
      array.push(i)
    }
  }
  
  return array
}
```

# Explanation

// if m3 for expl. is truthy it will push i and since it is true it will push "Fizz" and for example if m5 is false it will return empty string. if none of those conditions are met just return i