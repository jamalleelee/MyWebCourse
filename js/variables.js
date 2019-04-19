let x, y, z;
x = 10;
y = '10';
z = 30;

console.log(`x is ${typeof x}`);
console.log(`y is ${typeof y}`);
console.log(`z is ${typeof z}`);

var newX = x++;
console.log(`newX value is ${x}`);
console.log(`x==y value is ${x == y}`);

let timeInMs = Date.now();
console.log(`The current date in ms is ${timeInMs}`);

// try {
// let y = 30;
// console.log(`y is ${typeof y}`);
// } catch (error) {
//     y='30';
// }


// const r = 30;
// r=40;
