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


function daysInMonth(month, leapYear) {
  switch(month) {

    case January:
    case March:
    case May:
    case July:
    case August:
    case October:
    case December:
      numberOfDays = 31;
      break;
    case February:
      numberOfDays = determineLeapYear();
      break;
    default:
      numberOfDays = 30;
}
return month + "has " + numberOfDays + ' days';
}

function determineLeapYear() {
  let year = parseInt(); 
	
	if((year % 4 == 0 && year % 100 !=0)  || (year % 400==0)) {
	  return 29;
	}
  else {
     return 28;
  }
}