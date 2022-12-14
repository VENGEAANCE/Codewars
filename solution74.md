You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
dup(["kelless","keenness"]) = ["keles","kenes"].
Strings will be lowercase only, no spaces 

dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
dup(["kelless","keenness"]), ['keles','kenes'])


Hint: map through the arrays, each return in the map should be the string split and filtering for each letter that does not equal the one before it then join them up - we had this pattern before! 


``` ruby
function removeDupes(arr){
    map -> split -> filter

    // Use map to split each word in the array
    return arr.map(
        word => {

            // Split the word into array of individual letters
            let letters = word.split('');

            // Filter out any consecutive duplicate letters
            let noDupes = letters.filter((letters, index, array) => {
                // Return true for any letters that do not equal the previous letter of the array
                return letter != array[index - 1];
            });

            // Combine the remaining letters back into a single word and return it
            return noDupes.joinn('');
        }
    )
}
```