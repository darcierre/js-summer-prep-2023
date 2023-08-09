/*
  Transform the input array of strings into uppercase strings
  For example, for the input ["cat", "hat"], return ["CAT", "HAT"]
*/
function transformArrayToUpper(listOfStrings) {
  let upperCaseStrings = listOfStrings.map((string => string.toUpperCase()));

  return upperCaseStrings;
}

/*
  Write a function that returns the sum of all student ages.
  The function will be passed an array of objects and the result
  will be the sum of all ages.
  - Note, not all objects will contain an age. Omit these objects.
  For example, for the input:
    [{ name: 'Sandra', age: 31 }, {}, { name: 'Didi', age: 20}]
    the function should return 51
*/
function sumOfAllAges(listOfStudentObjects) {
  const studentsWithAgeArray = listOfStudentObjects.filter((student) => "age" in student);
  let ageSum = 0;
  for(const student of studentsWithAgeArray){
    ageSum += student.age;
  }
  return ageSum;
}

module.exports = { transformArrayToUpper, sumOfAllAges };