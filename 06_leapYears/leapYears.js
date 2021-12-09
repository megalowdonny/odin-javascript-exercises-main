// ~COMPLETED~

/* Originally I had 3 if conditions nested together, but I was able to consolidate it into one if
statement after seeing that suggested in the README.*/

const leapYears = function(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;
