"use strict";

const removeElements = (array, ...items) => {
  const filtered = array.filter((i) => !items.includes(i));
  array.forEach((item, index) => (array[index] = filtered[index]));
  array.length = filtered.length;
};

module.exports = { removeElements };
