// ~COMPLETED~

const getTheTitles = function(books) {
  const titlesArray = [];
  for (let book of books) {
    titlesArray.push(book.title);
  }
  return titlesArray;
};

// Do not edit below this line
module.exports = getTheTitles;
