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


