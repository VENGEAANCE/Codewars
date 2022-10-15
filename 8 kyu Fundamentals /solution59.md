//argument is a sentence
//i think i have to iterate through the sentence. i should split it then 
//loop through then 
//then check if each element === the character return the proper letter

//so i figured out hoe to replace the letters but i need to figure out how to return the numbers 


``` ruby
function wordFixer(sentence) {
    sentence.split('').map((letter, index) => {
        if (letter === '0') {
            return 'O'
        }
        if (letter === '1') {
            return 'I'
        }
        if (letter === '2') {
            return 'Z'
        }
        if (letter === '3') {
            return 'E'
        }
        if (letter === '4') {
            return 'H'
        }
        if (letter === '5') {
            return 'S'
        }
        if (letter === '6') {
            return 'G'
        }
        if (letter === '7') {
            return 'L'
        }
        if (letter === '8') {
            return 'B'
        }
        if (letter === '9') {
            return 'Q'
        }
        else {
            return letter
        }


    }).join()
}

console.log(wordFixer("PR0-T1P #hbq: 1T'5 N1C3 T0 5AY H3770."))

```