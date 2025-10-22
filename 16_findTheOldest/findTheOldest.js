const findTheOldest = function (people) {
  let newArray = [];
  let ages = people.map((person) => {
    if (person.yearOfDeath == undefined) {
      const currentYear = new Date().getFullYear();
      newArray.push({
        name: person.name,
        age: currentYear - person.yearOfBirth,
      });
    } else {
      newArray.push({
        name: person.name,
        age: person.yearOfDeath - person.yearOfBirth,
      });
    }
  });
  return newArray.sort((a, b) => b.age - a.age)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
