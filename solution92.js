// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

function inverted(array) {
    let arr = [];
    for (let i = 0; i <= array.length - 1; i++) {
        arr.push(array[i] * -1)
    }
    return arr;

}

// Using Map

// return array.map(e => e * -1)