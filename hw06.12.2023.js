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