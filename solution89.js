// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x) {
    // a string array
    // depending on the amount of good or bads 
    // create a count and loop through array and count how many of each there are 
    let goodIdeas = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i] === 'good') {
            goodIdeas++;
        }
    }

    if (goodIdeas === 0) {
        return 'Fail!'
    } else if (goodIdeas <= 2) {
        'Publish!'
    } else {
        'I smell a series!'
    }
}

