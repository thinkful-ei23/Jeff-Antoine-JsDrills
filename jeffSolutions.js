function decode(word) {
  let Words = word.split(' ');
  console.log(Words);
  for (let i = 0; i < Words.length; i++) {
  
    if (Words[i].charAt(0) === 'a') {
    console.log(Words[i].charAt(1));
    } 
    if (Words[i].charAt(0) === 'b') {
      console.log(Words[i].charAt(2));
    } if (Words[i].charAt(0) === 'c') {
      console.log(Words[i].charAt(3));
    } if (Words[i].charAt(0) === 'd') {
      console.log(Words[i].charAt(4));
    }
}
}
decode('craft block argon meter bells brown croon droop');

function howManydays(month){
  switch (month) {
    case 2 : return 28;
    case 4: case 6: case 9: case 11: return 30;
    default: return 31;
  }
}

howManydays(9);