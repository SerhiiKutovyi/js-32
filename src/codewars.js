// const sheep = [undefined, null, false, true];

// function countSheeps(sheep) {
//   const sheepLength = sheep.filter(value => value === true);
//   return sheepLength.length;
// }

// console.log(countSheeps(sheep));

// const sheep = [undefined, null, false, true];

// const countSheeps = sheep => sheep.filter(Boolean).length;

// console.log(countSheeps(sheep));

// function makeNegative(num) {
// //   if (num < 0) {
// //     return num
// //   }
//   //  return num * -1

//   return -Math.abs(num)
// }

// console.log(makeNegative(10));

// const quarterOf = month => {
//   let cost;
//   switch (month) {
//     case '1,2,3':
//       cost = 1;
//       break;

//     case 4 | 5 | 6:
//       cost = 2;
//       break;
//     case 7 | 8 | 9:
//       cost = 3;
//       break;
//     case 10 | 11 | 12:
//       cost = 4;
//       break;

//     default:
//       console.log('Invalid');
//   }
//   return cost
// };

// console.log(quarterOf(8));
const quarterOf = month => {
  if ( month <= 3) {
    return 1;
  } else if ( month <= 6) {
    return 2;
  } else if ( month <= 9) {
    return 3;
  } else if (month <= 12) {
    return 4;
  }
};

console.log(quarterOf(3));
