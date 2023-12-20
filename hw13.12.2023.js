// 200
function rgb(r, g, b) {
  return [r, g, b]
    .map(value => value > 255 ? 255 : value)
    .map(value => value < 0 ? 0 : value)
    // .map(value => [Math.floor(value / 16), (value % 16)].map(num => num.toString(16).toUpperCase()).join(''))
    .map(value => value.toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase()
}

console.log(">>>", rgb(255, 128, 33));
console.log(">>>", rgb(255, 5, 33)); // FF0521

// 201
function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}

// 202

const isNullOrEmpty = arr => arr === null || arr.length === 0;

function getLengthOfMissingArray(arrayOfArrays) {
    if (isNullOrEmpty(arrayOfArrays) || arrayOfArrays.some(isNullOrEmpty)) {
      return 0;
    }
    
    return arrayOfArrays
      .map(arr => arr.length)
      .sort((a, b) => a - b)
      .find((value, i, arr) => arr[i + 1] - value > 1) + 1;
  }

  // 203
  function dataReverse(data) {
    const bytes = []
    const size = 8
    for(let i = 0; i < data.length; i += size){
      bytes.push(data.slice(i, i + size))
    }
    return bytes.reverse().flat()
  }

//   204
function proofread (str) { 
    return str
      .toLowerCase()
      .replaceAll('ie', 'ei')
      .split('. ')
      .map(string => string[0].toUpperCase() + string.slice(1))
      .join('. ')
  }

  // Iefytirdirt

  // 206
  function deleteDigit(n) {
    const numbers = n.toString().split('')
    const newNumbers = []
    for(let i = 0; i < numbers.length; i++){
      // const numbersCopy = [...numbers]
      // numbersCopy.splice(i, 1)]
      const numbersCopy = numbers.toSpliced(i, 1);
      newNumbers.push(parseInt(numbersCopy.join('')))
    }
    return Math.max(...newNumbers)
  }

//   207
function sumArray(array){
    return array.reduce((acc, curr) => acc + curr, 0)
  }
  
  function findEvenIndex(arr){
    // if(sumArray(arr.slice(1)) === 0){
    //   return 0
    // }
    for(let i = 0; i < arr.length; i++){
      if(sumArray(arr.slice(0, i)) === sumArray(arr.slice(i + 1))){
        return i
      }
    }
    return -1
  }

  console.log(findEvenIndex([2, 5, 1, 1])) // 1 ???
  console.log(findEvenIndex([5, -2, 1, 1])) // 0 ???
  console.log(findEvenIndex([5, -2, 1])) // -1 ???

  // 209
  function indexEqualsValue(a) {
    // for(let i = 0; i < a.length; i++){
    //   if(a[i] === i){
    //     return i
    //   }
    // }
    // return -1
    
    return a.findIndex((value, i) => value === i)
  }

  //             0    1  2  3  4  5   6   7   8    9   10   11    12    13      14    15
  const arr = [-55, -10, 0, 1, 4, 6, 12, 22, 34, 100, 200, 300, 3000, 9999, 789787];
  //             L                        M                                            R


  // * + 4 / - * 7 + 3 / + 3 5 * 2 2 2 11 3
  // * + 4 / - * 7 + 3 / 8 * 2 2 2 11 3
  // * + 4 / - * 7 + 3 / 8 4 2 11 3
  // * + 4 / - * 7 + 3 2 2 11 3
  // * + 4 / - * 7 5 2 11 3
  // * + 4 / - 35 2 11 3
  // * + 4 / 33 11 3
  // * + 4 3 3
  // * 7 3
  // 21

  const operators = {
    "+": (a, b) => a + b,
    "/": (a, b) => a / b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
  }

  function calculate(expression) {
    const tokens = expression.split(' ')

    for(let i = 0; i < tokens.length; i ++){
      if(operators.hasOwnProperty(tokens[i]) && !operators.hasOwnProperty(tokens[i + 1]) && !operators.hasOwnProperty(tokens[i + 2])){
        const result = operators[tokens[i]](+tokens[i + 1], +tokens[i + 2]);

        console.log(operators[tokens[i]]);
        console.log(result);
        break;
      }
    }
    // for → findIndex
    // + 3 5 → 8
    // заменяем эти 3 элемента на 8

    // повторяем в цикле
  }

  calculate('* + 4 / - * 7 + 3 / + 3 5 * 2 2 2 11 3')


  







  // 
  // 

  // 214
  function zeroPlentiful(arr){
    let zeroGroups = arr.map(String).map(num => num !== '0' ? 1 : num).join('').split(/[^0]/).filter(value => value !== '')
    return zeroGroups.every(group => group.length >= 4) ? zeroGroups.length : 0
  }

  // 215
  function kebabize(str) {
    str = str.replaceAll(/\d+/g, '')
    str = str[0].toLowerCase() + str.slice(1)
    for(let i = 1; i < str.length; i++){
      if(str[i] === str[i].toUpperCase()){
        str = str.slice(0, i) + '-' + str[i].toLowerCase() + str.slice(i + 1);
      }
    }
    return str
  }

  // 217
  function isValidIP(str) {
    const ip = str.split('.')
    if(ip.length !== 4){
      return false
    }
    for(let i = 0; i < 4; i++){
      if(isNaN(parseInt(ip[i]))){
        return false
      }
      if(!ip[i].match(/^[0-9]+$/)){
        return false
      }
      if(parseInt(ip[i]) < 0 || parseInt(ip[i]) > 255){
        return false
      }
      if(ip[i].length > 1 && ip[i][0] === '0'){
        return false
      }
    }
    return true
  }