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

//   204
function proofread (str) { 
    return str
      .split('. ')
      .map(string => string[0].toUpperCase() + string.slice(1).toLowerCase())
      .join('. ')
      .replaceAll('ie', 'ei')
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