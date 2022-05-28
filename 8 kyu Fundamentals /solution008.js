// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Y
const words = ['I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
    'not at all']

function nbPetals(n) {
    return words[(n - 1) % words.length]
}

const howMuchIloveYou = n => words[(n - 1) % words.length]


//.........