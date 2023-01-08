// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata




function shortcut(string) {
    // create an array holding the vowels to compare later.
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    // Convert the given string to an array of substrings by splitting it.
    let stringArray = string.split('');

    // We filter the array of substrings and pass a callback function, which will compare every letter
    // in the stringArray and check if each letter is not included in the vowels array. For Example

    // the NOT operator is used to negate the boolean value returned by the includes() method. If the includes() method returns true, indicating that the current element is a vowel, then the NOT operator will negate this value and the callback function will return false. If the includes() method returns false, indicating that the current element is not a vowel, then the NOT operator will negate this value and the callback function will return true.
    return stringArray.filter(letter => !vowels.includes(letter)).join('')
}