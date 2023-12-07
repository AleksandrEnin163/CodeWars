function isHomogenous(arr){
    if(arr.length === 0){
        return false
    }
    for (const el of arr) {
        if (typeof el !== typeof arr[0]){
            return false
        }
    }
    return true
}

function filterHomogenous(arrays) {
    return arrays.filter(arr => isHomogenous(arr));
  }
  
// const arr = [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]
// console.log(filterHomogenous(arr))

// 100
function filterArrayNumbers(arr) {
    return arr.filter(el => typeof el === 'number')
  }

//   101
function findShortestWordsLength(string){
    const arrayWords = string.split(' ')
    let shortestWordLength = arrayWords[0].length
    for (const word of arrayWords){
      shortestWordLength = word.length <= shortestWordLength ? word.length : shortestWordLength
    }
    return shortestWordLength
}

// 102
function positiveSum(arr) {
    const arrPositiveNumbers = arr.filter(num => num > 0)
    return arrPositiveNumbers.reduce((acc, curr) => acc + curr, 0)
  }

  // 103
  function generateShape(integer){
    return `${'+'.repeat(integer)}\n`.repeat(integer - 1) + '+'.repeat(integer)
  }

  // 104
  function getCount(str) {
    const lettersArray = str.split('')
    const vowelsSet = new Set(['a','e','i','o','u', ' '])
    return lettersArray.filter(letter =>  !vowelsSet.has(letter)).length
  }

  // 106
  function min(arr, toReturn) {
    const minNumber = Math.min(...arr)
    return toReturn === 'value' ? minNumber : arr.indexOf(minNumber)
  }

  // 108
  function capitalsIndex(word) {
    const arrayLetters = word.split('')
    const arrayIndexOfCapitals = []
    for(const letter of arrayLetters){
      if(letter === letter.toUpperCase()){
        arrayIndexOfCapitals.push(arrayLetters.indexOf(letter))
      }
    }
    return arrayIndexOfCapitals
  };

  let num = 12234234
  console.log(num.toString().split(''))