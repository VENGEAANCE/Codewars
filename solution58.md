# Solution

Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

```ruby
function multipleOfIndex(arr){
  return arr.filter((element, index)=> element % index === 0);
};

```

# Explanation

Filter method returns the elements that meet the conditions.