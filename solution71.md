# Task

Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.



A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
If the average length is not an integer, use Math.round().
The input array's length > 1

# Solution



```ruby

function averageLength(arr) { 
  // get average length of the array
  let avgLength = Math.round(arr.join('').length/arr.length)
  //create new array using each letter of the avgLength amount
  return arr.map( str => str[0].repeat(avgLength))
}


```

# Explanation

First we create a variable that will hold the average length of the array. let go through it from the inside out.
- arr.join('') will join individual elements without space inbetween -> aabbbcccc
- add .length it willl return -> 9
- arr.join('').length then divide it be the length of the same array that was given ['aa', 'bbb', 'cccc']
- the length of this array ['aa', 'bbb', 'cccc'] is 3 becuase 'aa' is 1, 'bbb' is 2...
- so far we have 9 / 3 which gives us the average length
- Math.round( we put all of this inside the Math.round method) - this function is stored in avgLength variable
- Next we use map so iterate through the array ['aa', 'bbb', 'cccc'] and specify str[0] which means to grab the first index of each element and repeat it (avgLength) number of times.

avgLengthRepeat(['aa', 'bbb', 'cccc']) will return  ['aaa', 'bbb', 'ccc']


