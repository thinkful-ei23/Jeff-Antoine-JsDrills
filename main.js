const yearOfBirth = age => {
  if (age < 0) {
    throw new Error("Age cannot be negative");;
  };
  return 2018 - age;
}
  
const whoAmI = (name, age) => {
 
  try {
    const yob = yearOfBirth(age)
    if(name === undefined || age === undefined) {
      console.error("Arguments not valid");
    } else if (typeof age !== 'number' || typeof name !== 'string') {
      console.error("Name is not a number or name is not a string");
    } else {

    console.log(`Hi, my name is ${name} and Im ${age} years old`);
    console.log(`I was born in ${yob}`);
  }
  } catch(e) {
      console.error(e.message);
  }
};


whoAmI(true, 28);
whoAmI("Jeff", 30);
whoAmI("Jeff", "30");



