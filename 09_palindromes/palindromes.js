/*For this one I got extra cheeky. I wanted all of my operations to be done
within self-made functions, rather than doing them out in the open. So there's
a separate function for getting the array of the original string minus the 
spaces and punctuation, and then there's a separate function that tests whether
it's a palindrome or not, which requires temporarily turning the array
back into a string with .join().*/

const palindromes = function (str) {
  const testLetters = 'qwertyuiopasdfghjklzxcvbnm';
  const letterArray = [];
  // Original code
  /*for (let char of str) {
    if (testLetters.includes(char.toLowerCase())) {
      letterArray.push(char.toLowerCase())
    }
  }
  if (letterArray.join('') === letterArray.reverse().join('')) {
    return true
  }
  return false;*/

  function getLettersOnly() {
    for (let char of str) {
      if (testLetters.includes(char.toLowerCase())) {
        letterArray.push(char.toLowerCase())
      }
    }
  }

  function testPalindrome() {
    if (letterArray.join('') === letterArray.reverse().join('')) {
      return true
    }
    return false;
  }

  getLettersOnly();
  return testPalindrome();
};

// Do not edit below this line
module.exports = palindromes;
