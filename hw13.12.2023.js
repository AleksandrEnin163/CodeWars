// 200
function rgb(r, g, b) {
  const rgbArr = [r, g, b]
  return rgbArr
    .map(value => value > 255 ? 255 : value)
    .map(value => value < 0 ? 0 : value)
    .map(value => [Math.floor(value / 16), (value % 16)].map(num => num.toString(16).toUpperCase()).join(''))
    .join('')           
}

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
function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays === null || arrayOfArrays.length === 0 || arrayOfArrays.some(arr => arr === null || arr.length === 0)) {
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
      bytes.unshift(data.slice(i, i + size))
    }
    return bytes.flat()
  }

//   204
function proofread (str) { 
    return str
      .split('. ')
      .map(string => string[0].toUpperCase() + string.slice(1).toLowerCase())
      .join('. ')
      .replaceAll('ie', 'ei')
  }

  // 206
  function deleteDigit(n) {
    const numbers = n.toString().split('')
    const newNumbers = []
    for(let i = 0; i < numbers.length; i++){
      let numbersCopy = [...numbers]
      numbersCopy.splice(i, 1)
      newNumbers.push(parseInt(numbersCopy.join('')))
    }
    return Math.max(...newNumbers)
  }

//   207
function sumArray(array){
    return array.reduce((acc, curr) => acc + curr, 0)
  }
  
  function findEvenIndex(arr){
    const indexes = []
    if(sumArray(arr.slice(1)) === 0){
      return 0
    }
    for(let i = 1; i < arr.length; i++){
      if(sumArray(arr.slice(0, i)) === sumArray(arr.slice(i + 1))){
        indexes.push(i)
      }
    }
    return indexes.length === 0 ? -1 : Math.min(...indexes)
  }

  // 209
  function indexEqualsValue(a) {
    for(let i = 0; i < a.length; i++){
      if(a[i] === i){
        return i
      }
    }
    return -1
    
  //   return a.indexOf(a.find((value, i) => value === i)) 
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