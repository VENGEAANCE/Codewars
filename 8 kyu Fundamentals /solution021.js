// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// Goodluck :)



//take the square root of the number
//round it to the nearest number
//take square root of rounded number
// return
//execution order goes like this
// 1 -Math.sqrt(n)
// 2 -Math.round(n)
// 3 -Math.pow(n,2)
function nearestSq(n) {
    let nearestSquare = Math.pow(Math.round(Math.sqrt(n)), 2);
    return nearestSquare;
}