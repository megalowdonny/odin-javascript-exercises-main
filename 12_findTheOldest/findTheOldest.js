// ~COMPLETED~ *

/*I'm going to want to revisit this one later after I have a better idea of how to work
with objects. It's messy, I had to use 3 separate functions rather than just doing it
for the fun of it, and it does work at least. Idk, it feels like it could be done way
simpler, but I currently don't know how to make that happen.*/

const findTheOldest = function(people) {
  let today = new Date(); // Needed to have the current date
  let oldest = 0;

  function getAge(person) {
    person.age = (person.yearOfDeath || today.getFullYear()) - person.yearOfBirth;
    }

  function getOldest() {
    for (let person of people) {
      getAge(person);
      if (person.age > oldest) oldest = person.age;
    }
  }

  // I feel like this could be added to getOldest(), but idk how to do that.
  function findOldest() {
    for (let person of people) {
      if (person.age === oldest) return person;
    }
  }
  getOldest(people);
  return findOldest(people);
  
};

// Do not edit below this line
module.exports = findTheOldest;

// OLD CODE PROBABLY WORTHLESS
 /*let oldest;
  let oldestPerson = {};
  let today = new Date();
  for (let person of people) {
    age = (person.yearOfDeath || today.getFullYear()) - person.yearOfBirth;
    if (age > oldest) {
      Object.assign(oldestPerson, person);
    }
  }
  return oldestPerson;*/