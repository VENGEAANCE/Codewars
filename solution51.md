# Solution

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

# Solution

```ruby
function fakeBin(x){
let solution = 

x.split('')
.map(num => num < 5 ? 0 : 1)
.join('')

return solution
     
}

```

# Explanation

We first split the given string using a string method that returns an array then we use the array method of map to provide a function to each element in the array and run a condtional to check if the element is grater than or less than 5 to return the appropriate number and then we use the array method of join with a separator of empty. Then we return the value which is stored inside solution variable.