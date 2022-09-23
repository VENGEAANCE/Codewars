# Task

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

# Solution

```ruby

function countPositivesSumNegatives(input) {
  if(!input || input.length == 0) {
    return []
  };

  let positiveCount = input.reduce( 
    (previousValue, currentValue) => currentValue > 0 ? ++previousValue : previousValue, 0);
  let negativeSum = input.reduce( 
    (sum, item) => item < 0 ? sum + item : sum, 0);
  
  return [positiveCount, negativeSum]
}

```

# Explanation

first line checks if it's not input or input length is loosley equal to 0, we used double equal to compare null and undefined inputs.

then we create a variable, first variable uses reduce method and does a conditional to check if the elements are greater than 0, if true 
return the sum plus 1 with an accumulator starting with 0 resulting in the counmt of postive numbers. [1,2,3] --> 1 + 0 = 1, 1 + 1 = 2
2 + 1 = 3... and so on. The order of numbers does not matter because the reduce method is only adding 1 to the previus value, 
so it will only add one to the previus answer and not the element itself, and it will stop untill the end of the array.

second line accumulates the previus item to teh current item with an initial value of 0.

then we return an array with the positiveCount variable at the 0 index and negativeSum varaible in the 1st index.