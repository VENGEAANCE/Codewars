function wordFixer(char) {
    if (char === "0") {
        return char.replace('0', 'O').tooUpperCase()
    }
    else if (char === '1') {
        return char.replace('1', 'I').tooUpperCase()
    }

    else if (char === '2') {
        return char.replace('2', 'Z').tooUpperCase()
    }
    else if (char === '3') {
        return char.replace('3', 'E').tooUpperCase()
    }
    else if (char === '4') {
        return char.replace('4', 'h').tooUpperCase()
    }
    else if (char === '5') {
        return char.replace('5', 'S').tooUpperCase()
    }
    else if (char === '6') {
        return char.replace('6', 'G').tooUpperCase()
    }
    else if (char === '7') {
        return char.replace('7', 'L').tooUpperCase()
    }
    else if (char === '8') {
        return char.replace('8', 'B').tooUpperCase()
    }
    else if (char === '9') {
        return char.replace('9', 'q').tooUpperCase()
    }
    else {
        return char
    }

}

let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const points = games => games.reduce((output, current) => {
    return output += current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0;
}, 0)