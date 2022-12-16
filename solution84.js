// Task

//Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

const magazine =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";


// Solution

//First we store each property to an object by adding a value. Ex add 1 to it

// Then we iterate through the wordsInNotes array and compare the words with the magazine object to see if the words in the note exist in the magaine object.

function ransomNote(note, magazine) {
  // Split the note and magazine into array of words
  const wordsInNote = note.split(' ');
  const wordsInMagazine = magazine.split(' ');

  // Create a hash table to store the frequency of each word in the magazine
  const magazineHash = {};

  // Set a flag  to determine if it is possible to create a ransom note from the the magazine
  let possible = true;

  // loop through the words in the magazine and store their frequency in the magazine hash
  for (const word of wordsInMagazine) {
    magazineHash[word] = magazineHash + 1 || 1; // word= Lorem, ipsum, kilua... is stored to magazineHash and 1 is added to the value or give it a value of 1 if it doesnt exist yet.
  }

  // Next step is to loop through the wordsInNote array and check if they exist in the magazineHash
  for (const word of wordsInNote) {
    if (magazineHash[word]) {
      // If the word exists in the hash table, decrement its frequency.
      magazineHash[word]--;

      // If the frequency becomes negative, it means there aren't enough copies of that word
      // in the magazine, so we return false
      if (magazineHash[word] < 0) return false;
    } else {
      // If the word is not in the hash table, it means it's not in the magazine at all
      // so we return false
      return false;
    }
    // If the loop completes, it means all the words in the ransom note are in the magazine
    // and there are enough copies of each, so we return true
    return possible;
  }
}
