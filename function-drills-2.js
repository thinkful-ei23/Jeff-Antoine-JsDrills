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

const decode = words => {
  
  let decoded = [];
  // split the sentence into individual words
  let split = words.split(' ');
  // loop through each word
  split.forEach(word => {
    // store the first character of each word
    let firstChar = word.charAt(0);
    // compare the first character of each word to a
    if(firstChar === 'a') {
      decoded.push(word[1]);      
    };
    // compare the first character of each word to b
    if(firstChar === 'b') {
      decoded.push(word[2]);    
    };
    // compare the first character of each word to c
    if(firstChar === 'c') {
      decoded.push(word[3]);     
    };
    // compare the first character of each word to d
    if(firstChar === 'd') {
      decoded.push(word[4]);
    };
  })
  return decoded.join('');
}

console.log(decode('craft block argon meter bells brown croon droop'));

const daysInMonth = (month, leapYear) => {
  switch(month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      console.log(`${month} has 31 days`);
      break;
    
    case 'February':
      if(leapYear) {
        console.log('February has 29 days');
      } else {
        console.log('February has 28 days');
      }
      break;
    
    case 'April':
    case 'June':
    case 'September':
    case 'November':
      console.log(`${month} has 30 days`);
      break;
    
    default:
      console.log('Must provide a valid month');
  }
}

console.log(daysInMonth('April'));


const rockPaperScissors = choice => {
  const computer = Math.floor(Math.random() * 3) + 1;
  const rock = 1;
  const paper = 2;
  const scissor = 3;

  if(choice > 3) {
    return 'Must be number between 1-3';
  }

  if(computer === rock && choice === paper) {
    return 'Paper beats rock. Player wins';
  } else if(computer === paper && choice  === scissor) {
    return 'Scissors beats paper. Player wins';
  } else if(computer === scissor && choice === rock) {
    return 'Rock beats scissors. Player wins';
  } else {
    return 'You lose! Computer wins!';
  }
  
 

}

console.log(rockPaperScissors(3));