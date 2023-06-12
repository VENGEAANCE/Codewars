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
    if(s.length != t.length){
        return false;
    }

    let sMap = {};
    let tMap = {};

    for(let i in s){
        sMap[s[i]] = 1 + sMap[s[i]] || 0;
        tMap[t[i]] = 1 + tMap[t[i]] || 0;
    }

    for(let c in sMap){
        if (sMap[c] != tMap[c]){
            return false;
        }
    }

    return true


};
