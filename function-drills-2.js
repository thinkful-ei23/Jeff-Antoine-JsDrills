const jediName = (firstName, lastName) => {
  let jediFirst = firstName.slice(0, 2);
  let jediLast = lastName.slice(0, 3);
  return jediLast.concat(jediFirst);
  

}
console.log(jediName('Beyonce', 'Knowles'));

const beyond = num => {
  if(num === Infinity) {
    console.log("And beyond!");
  } else if(isFinite(num) && num > 0) {
    console.log("To infinity");
  } else if(isFinite(num) && num < 0) {
    console.log("To negative infinity");
  } else {
    console.log("Staying home");
  }

}

beyond(1);
beyond(-1);
beyond(0);
beyond(Infinity);


