const yearOfBirth = age => {
  if (age < 0) {
    throw new Error("Age cannot be negative");
  };
  return 2018 - age;
}
  
  




const whoAmI = (name, age) => {
 
  try {
    const yob = yearOfBirth(age)
    console.log(`Hi, my name is ${name} and Im ${age} years old`);
    console.log(`I was born in ${yob}`);
  } catch (e) {
      console.error(e.message);
  }
};

whoAmI("Antoine", 28);
whoAmI("Jeff", 30);
whoAmI("Jeff", -1);
