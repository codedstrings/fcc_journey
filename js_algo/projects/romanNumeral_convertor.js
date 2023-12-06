// Question: Convert the given number into a roman numeral.(provided table converted to object)
// All roman numerals answers should be provided in upper-case.

// const RomanNumeralTable = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1
//   };
//   const RomanNumeralArray = [
//     { numeral: 'M', value: 1000 },
//     { numeral: 'CM', value: 900 },
//     { numeral: 'D', value: 500 },
//     { numeral: 'CD', value: 400 },
//     { numeral: 'C', value: 100 },
//     { numeral: 'XC', value: 90 },
//     { numeral: 'L', value: 50 },
//     { numeral: 'XL', value: 40 },
//     { numeral: 'X', value: 10 },
//     { numeral: 'IX', value: 9 },
//     { numeral: 'V', value: 5 },
//     { numeral: 'IV', value: 4 },
//     { numeral: 'I', value: 1 }
//   ];
const romanTable = [
  { 1000: 'M' },
  { 900: 'CM' },
  { 500: 'D' },
  { 400: 'CD' },
  { 100: 'C' },
  { 90: 'XC' },
  { 50: 'L' },
  { 40: 'XL' },
  { 10: 'X' },
  { 9: 'IX' },
  { 5: 'V' },
  { 4: 'IV' },
  { 1: 'I' }
];
function convertToRoman(num) {
  // console.log("NewNu " + num);
  let roman = '';
  let keysArr = romanTable.map(item => Number(Object.keys(item)));
  for (let i in keysArr) {
    let key=keysArr[i];
    while (key < num) {
      num -= key;
      const valueForKey = romanTable.find(entry => entry.hasOwnProperty(key)) [key]; //ask chatgpt
      roman+=valueForKey;
      // console.log(key + " " + num + " " + roman);

    }
    if (key == num) {
      num -= key;
      const valueForKey = romanTable.find(entry => entry.hasOwnProperty(key)) [key];
      roman+=valueForKey;
      // console.log("last " + key + " " + num+ " " + roman);
    }


  } return roman;
}


let roman=convertToRoman(3);
console.log(roman)

