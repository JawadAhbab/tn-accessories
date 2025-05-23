'use strict';

var average = function average(numbers) {
  return numbers.reduce(function (a, b) {
    return a + b;
  }, 0) / numbers.length;
};
var fixednum = function fixednum(num) {
  var digits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return +num.toFixed(digits);
};
var minmax = function minmax(num, min, max) {
  return Math.min(Math.max(num, min), max);
};
exports.average = average;
exports.fixednum = fixednum;
exports.minmax = minmax;
