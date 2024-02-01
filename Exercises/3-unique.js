"use strict";

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = (array) => {
  const set = new Set();

  for (let i = 0; i < array.length; i++) {
    const el = array[i];
    set.add(el);
  }

  return Array.from(set);
};

module.exports = { unique };
