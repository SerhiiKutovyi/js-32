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
// const quarterOf = month => {
//   if ( month <= 3) {
//     return 1;
//   } else if ( month <= 6) {
//     return 2;
//   } else if ( month <= 9) {
//     return 3;
//   } else if (month <= 12) {
//     return 4;
//   }
// };

// console.log(quarterOf(3));

// const fruit = 'banana';

// switch (fruit) {
//   case 'apple':
//     console.log('Apple selected');
//     break;

//   case 'banana':
//     console.log('Banana selected');
//     break;

//   case 'orange':
//     console.log('Orange selected');
//     break;
//   default:
//     console.log('Non');
// }

// const getSubscriptionPrice = type => {
//   let count;
//   switch (type) {
//     case 'started':
//       count = 0;
//       break;
//     case 'professional':
//       count = 20;
//       break;
//     case 'organization':
//       count = 50;
//       break;
//     default:
//       count = 'Invalid subscription type!';
//     }
//    return count;
// };

// console.log(getSubscriptionPrice('started'));
// function isNumberInRange(start, end, number) {
//   if (number >= start && number <= end) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(isNumberInRange(10, 30, 15));

// const screenWidth = 700;
// const sm = 320;
// const md = 768;
// const lg = 1200;

// if (screenWidth <= sm || screenWidth > md) {
//   console.log('Mobile or Desktop screen');
//   // у консолі буде пусто, оскільки жодна з умов не перетворилась на true
// } else {
//   console.log('NOooo');
// }

// function checkAccess(subType) {
//   if (subType === 'pro' || subType === 'vip') {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkAccess('vip'));

// const fullName = 'Jacob Mercer';
// console.log(fullName.slice());

// function getSubstring(string, length) {
//   return string.slice(string,length);
// }

// console.log(getSubstring('Hello world', 3));

// function normalizeInput(input, to) {
//   if (to === 'lower') {
//     return input.toLowerCase();
//   } else if (to === 'upper') {
//     return input.toUpperCase();
//   } else {
//     return console.log('No data');
//   }

// }

// console.log(normalizeInput("This ISN'T SpaM", 'upper'));

function checkForName(fullName, firstName) {
  return fullName.toLowerCase().includes(firstName.toLowerCase());
}

console.log(checkForName('Caty Stars', 'Andromeda'));
