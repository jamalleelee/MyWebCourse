let numOne = 1;
let stringOne = "1";

console.log("double ==", numOne == stringOne);
console.log("triple ===", numOne === stringOne);

const day = new Date().getDay();
//  0 = Sunday 1 = Monday ....  6 = Saturday

if (day == 1) {
  console.log(`Back to Work`);
} else if (day == 2) {
  console.log(`Over the hump`);
} else if (day == 0 || day == 6) {
  console.log(`It is the weekend!`);
} else {
  console.log(`Its a weekday`);
}
