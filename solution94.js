// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.




function count(string) {
    // Initialize an empty object called `obj`
    let obj = {};
    // Iterate over the letters in the string
    for (const letter of string) {
        // Check if the letter already exists as a property in the `obj` object
        // If it does, increment the value of that property by 1
        // If it does not, set the value of that property to 1

        obj[letter] = obj[letter] + 1 || 1;
    }
    // Return the `obj` object, which contains the count of each letter in the input string
    return obj;
}
