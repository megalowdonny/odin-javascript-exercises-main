// ~COMPLETED~

const sumAll = function(x, y) {
  let sum = 0;
  if (x < 0 || y < 0 || Number.isInteger(x) === false || Number.isInteger(y) === false) {
    return 'ERROR';
  }
  if (x > y) {
    let temp = y;
    y = x; 
    x = temp;
  }
  for (x; x <= y; x++) {
    sum += x;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
