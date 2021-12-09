// ~COMPLETED~

function repeatString(str, num) {
  if (num < 0) {
    return 'ERROR';
  }
  let finished = '';
  for (let i = 0; i < num; i++) {
   finished += str;
  }
  return finished;
};

// Do not edit below this line
module.exports = repeatString;
