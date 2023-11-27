// const sheep = [undefined, null, false, true];

// function countSheeps(sheep) {
//   const sheepLength = sheep.filter(value => value === true);
//   return sheepLength.length;
// }

// console.log(countSheeps(sheep));

const sheep = [undefined, null, false, true];

const countSheeps = sheep => sheep.filter(Boolean).length;

console.log(countSheeps(sheep));