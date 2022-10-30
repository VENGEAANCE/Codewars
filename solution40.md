# Tasks

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

# Solution
```ruby
function check(a, x) {
  //P an array and a value 
  //R return true if array contains x
  //E a = [1,q,3,w,4,e] x = 4 --> true
  //P use an array method inlcudes() to find x. Use truthy 
  
  return a.includes(x)
}
```