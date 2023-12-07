const capitalLetters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]
let shift = 13

//functions starts here
function rot13 (str) {
  let strArr = [...str];
//   console.log(strArr);
  for (let i in strArr) {
    if (/[A-Z]/.test(strArr[i])) {
      let index = capitalLetters.indexOf(strArr[i])
      // console.log(capitalLetters[index]);
      strArr[i] = capitalLetters[(index + shift) % 26]
    }
  }
  // console.log(strArr);
  // console.log(strArr.join(''));
  return strArr.join('');
}

// rot13('SERR PBQR PNZC');
console.log(rot13('SERR PBQR PNZC'));
