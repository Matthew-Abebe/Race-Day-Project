let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly = true;
let runnerAge = 25;
if (registerEarly && runnerAge > 18) {
  raceNumber += 1000;
}
if (registerEarly && runnerAge > 18) {
  console.log(`Race will begin at 9:30, your race number is: ${raceNumber}.`)
} 
else if (!registerEarly && runnerAge > 18) {
   console.log(`Race will begin at 11:00, your race number is: ${raceNumber}.`)
}
else if (runnerAge < 18) {
  console.log(`Race will begin at 12:30, your race number is: ${raceNumber}.`)
} else {
  console.log('Please approach the registration desk. Thank you for your patience.')
}



