# Task

You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics.

# Solution

```ruby

function fixTheMeerkat(arr) {
  //p-array with three vallues
  //r- return the array reversed
  //e- ['1','2','3'] --> ['3','2','1']
  //p- i can use the array method reverse to reverse the values of the given array.
  
  let solution = 
      arr.reverse();
  return solution;
};

```

# Explanation


  