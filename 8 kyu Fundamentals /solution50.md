# Solution

Write a function that returns a string in which firstname is swapped with last name.

# Solution

```ruby
function nameShuffler(str){  
let solution = str.split(' ').reverse().join(' ');
return solution;
}

```

# Explanation


//P - str 
//R - return a string
//E - 'Jared Machado'--> 'Machado Jared'
//P - i need to split the string so i can then use the array method of reverse to reverse the strings and the join the string with space inbetween.