// Refactored to function expression
// Added some parameters to be passed in the function
const whoAmI = (name, age) => {
  const yearOfBirth = 2018 - age;

console.log(`Hi, my name is ${name} and Im ${age} years old`);
console.log(`I was born in ${yearOfBirth}`);
}
whoAmI("Antoine", 28);
whoAmI("Jeff", 30);