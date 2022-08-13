# Task

Given an array of integers, return a new array with each value doubled.

# Solution

```ruby
function maps(x){
  //P - postive number
  //R - return an array with each element doubled
  //E - [1,2,3] --> [2,4,6]
  //P - return a new array and with each element doubled
 
  //Using map retuns array by default
  return x.map( (x) => x * 2  )
  
  
  //Using forEach you have to specify what to return 
  
  //   let arr= []
  //   x.forEach(x => arr.push(x * 2))
  //   return arr

}
```

# Explanation

Map retuns an array by default
  
  
Using forEach you have to specify what to return 
