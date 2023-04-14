// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

function otherAngle(a, b) {
  let angleC = 180 - a - b;
  return angleC;
}

// Explanation
// Interior angles inside a triangle always add up to 180 degrees. With this in mind we can subtract 180 minus angleA and angleB, which is the the number of the missing angle.