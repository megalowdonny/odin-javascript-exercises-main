// ~COMPLETED~

const fibonacci = function(num) {
  const fibArray = [1];
  for (i = 0; i < num; i++) {
    let sum = (fibArray[i] || 0) + (fibArray[i - 1] || 0);
    fibArray.push(sum);
  }
  return fibArray[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
