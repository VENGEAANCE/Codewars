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


function isAnagram (s, t) {
    
    if(s.length !== t.length){
        return false;
    }

    const sMap= {};
    const tMap= {};

    for(let e of s){
        sMap[e] = (sMap[e] || 0) + 1
    }

    for(let e of t){
        tMap[e] = (tMap[e] || 0) + 1
    }

    for(const count in sMap){
        if(sMap[count] !== tMap[count]){
            return false;
        }
    }

    return true;


};
