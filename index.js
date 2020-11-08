const regex1 = RegExp('\/[a-z0-9\-]*');
const str1 = '/combos/test-s2uaoh';
let array1 = regex1.exec(str1);

// console.log(array1);

// while (array1 !== null) {
//   console.log(`Found ${array1[0]}. Next starts at ${regex1.lastIndex}.`);
//   // expected output: "Found foo. Next starts at 9."
//   // expected output: "Found foo. Next starts at 19."
// }

console.log(regex1.exec(str1), 'regex1.exec(str1)'); // eslint-disable-line no-console