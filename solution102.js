// 242. Valid Anagram
// Easy
// 9.3K
// 292
// Companies
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


var isAnagram = function(s, t) {
    // Check if the lengths of the two strings are different
    if (s.length !== t.length) {
        return false; // If lengths are different, they can't be anagrams
    }

    // Create frequency maps for characters in both strings
    let sMap = {}; // Frequency map for characters in string s
    let tMap = {}; // Frequency map for characters in string t

    // Populate the frequency maps by iterating over the characters in strings s and t
    for (let i in s) {
        // Increment the frequency of character s[i] in sMap and t[i] in tMap
        sMap[s[i]] = sMap[s[i]] + 1 || 0;
        tMap[t[i]] = tMap[t[i]] + 1 || 0;
    }

    // Compare the frequency maps for any differences
    for (let c in sMap) {
        // If the frequencies of any character differ between the two maps,
        // the strings are not anagrams
        if (sMap[c] !== tMap[c]) {
            return false;
        }
    }

    // If the loop completes without finding any differences in character frequencies,
    // the strings are anagrams
    return true;
};

