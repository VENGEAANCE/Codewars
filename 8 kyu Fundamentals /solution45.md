# Task

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F



# Solution

```ruby
function abbrevName (name) {  
  let innitials = name
                  .split(' ')
                  .map( element => element[0].toUpperCase()) //the map function is only returning the first letter of each word 
                  .join('.') 
  
  return innitials

} 

```

# Explanation 

Split seprates elements from spaces returning an array.
The function inside map turns every index zero elemnt to uppercase. element takes each word and finds 0 index of each word element, equalling [S]0 and [H]0, then concatenates a dot with the separator of no space

  //P - string of two words with one space in between
  //R - two capitl letters wirh a dot separating them
  //E - 'Jared Machado' --> 'J.M'
  //P - split the name with space inbetween, then iterate the array and turn every 0 index of very word to uppercase then join with . inbetween with no space