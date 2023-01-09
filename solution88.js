// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.



function isVow(a) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    return a.map(number => {

        // If vowels array includes(create a string from character code of (number, which is the current element from array a))
        if (vowels.includes(String.fromCharCode(number))) {

            // return a string from the code of the number. 97 -> a
            return String.fromCharCode(number)
        };
        // Or just return the number if it's not included in array a beacuse its code does not represemt a string.
        return number;
    });
};

