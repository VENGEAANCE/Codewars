// // 205. Isomorphic Strings

// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

function isIsomorphic(s, t) {
    let sMap = {};
    let tMap = {};

    for (let i = 0; i < s.length; i++) {
        // if sLetter is not in the sMap we will add it
        if (!sMap[s[i]]) {
            // if current letter in t is true it means it has been mapped to a different letter in s string
            if (tMap[t[i]]) {
                return false;
            }
            // we map corrresponding letters to each object
            sMap[s[i]] = t[i];
            tMap[t[i]] = s[i];
        }

        // if letter in sMap has been seen again, check if it does not map to the current index in t. 
        else {
            if (sMap[s[i]] !== t[i]) {
                return false;
            }
        }

    }
    return true;
}


