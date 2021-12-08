/*It's pretty easy to just make each of these functions individually, but I wanted to try to 
use any more basic functions as the method for accomplishing the more complicated ones,
and I was able to do */

const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(sumArray) {
  let sumTotal = 0;
	/*for (let num of sumArray) {
    sumTotal += num || 0; // The || 0 accounts for any undefined holes in the array
  }*/

  // The above works simply, but I also wanted to try utilizing the previous add() below
  for (let i = 0; i < sumArray.length; i++) {
    sumTotal = add(sumTotal, sumArray[i] || 0); // Lots of dumb mistakes before getting here
  }
  return sumTotal;
};

const multiply = function(multArray) {
  if (multArray.length < 2) return 'ERROR'; // Unnecessary but I think it would work
  let multTotal = 1; // Starting with 0 wouldn't be very fun
  for (let num of multArray) {
    multTotal *= num;
  }
  return multTotal;
};

const power = function(num, pow) {
  let total = 1;
	for (let i = 0; i < pow; i++) {
    /*total *= num;*/
    total = multiply([total, num]); // The previous line does it simply, but this uses my multiply()
  }
  return total;
};

const factorial = function(num) {
	let total = 1;
  if (num < 2) return total; // Not sure how to make the bottom code work without this catch
  for (; num > 1; num--) {
    /*total *= num;*/
    total = multiply([total, num]); // The previous line does it simply, but this uses my multiply()
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
