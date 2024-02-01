"use strict";

// Find difference of two arrays
// elements from array1 that are not includes in array2

const difference = (array1, array2) => {
  //the best solution
  return array1.filter((item1) => !array2.includes(item1));
};

module.exports = { difference };
