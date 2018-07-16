const yearOfBirth = age => {
  return 2018 - age;
}

const whoAmI = (name, age) => {
  const yob = yearOfBirth(age)
  console.log(`Hi, my name is ${name} and Im ${age} years old`);
  console.log(`I was born in ${yob}`);
}


whoAmI("Antoine", 28);
whoAmI("Jeff", 30);