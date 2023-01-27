// 392. Is Subsequence

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

let isSubsequence = function(s, t) {
    // This variable will hold the times s string has the letters in t in order
    let sPointer = 0;
    // Iterate through second string
    for(let tPointer = 0; tPointer < t.length; tPointer++){
        // We will only add if current element in s is the same as curr elem in t;
        if(s[sPointer] === t[tPointer]){
            sPointer++
        }

        // When loop is done. If length of sPointer is the same as s.length. That means s is subsequent to T
        if(sPointer === s.length){
            return true
        }

        return false;
    }
};