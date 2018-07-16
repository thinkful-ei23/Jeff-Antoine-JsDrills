const jediName = (firstName, lastName) => {
  let jediFirst = firstName.slice(0, 2);
  let jediLast = lastName.slice(0, 3);
  return jediLast.concat(jediFirst);
  

}
console.log(jediName('Beyonce', 'Knowles'));