const removeFromArray = function(arr) {
  let arrayArg = arr;
  let argList = Array.from(arguments);
  argList.shift();
  for (let arg of argList) {
    if (arrayArg.includes(arg)) {
      let ind = arrayArg.indexOf(arg);
      arrayArg.splice(ind, 1);
    }
  }
  return arrayArg;
};

// Do not edit below this line
module.exports = removeFromArray; 
