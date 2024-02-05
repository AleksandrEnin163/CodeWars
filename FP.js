function detectInt(...predicates) {
    let num = 1;
  
    while (true) {
      if (predicates.every(predicate => predicate(num))) {
        return num;
      }
      num++;
    }
  }
  

// 501
function zipWith(fn,a0,a1) {
    const arrResult = []
    const length = Math.min(a0.length, a1.length)
    for(let i = 0; i < length; i++){
      arrResult.push(fn(a0[i], a1[i]))
    }
    return arrResult
  }

// 502
function multiplyAll(arr) {
    // let x = 0;
    return function(int){ // ← foo
      // x++;
      return arr.map(num => num * int)
    }
  }

  // const foo = multiplyAll([2,3,4,5,6]);
  // const foo2 = multiplyAll([1, 3]);

  // foo(10); // [20, 30, 40, 50, 60]
  // f(5); // [10, 15, 20, 25, 30]


// multiplyAll([1, 2, 3])(2) = [2, 4, 6];

//   503
function chain(input, fns) {
    // let currentInput = input
    // for(const fn of fns){
    //   currentInput = fn(currentInput)
    // }
    // return currentInput

    fns.reduce((currentInput, fn) => fn(currentInput), input)
    ///         10            x => x + 1      11
    //          11            x => x * 2      22
    //          22            x => x + 5      27
    //          27
  }

  // 10
  // x => x + 1, x => x * 2, x => x + 5

//   504
function dropWhile(array, predicate) {
  const index = array.findIndex(num => !predicate(num));
  return index === -1 ? [] : array.slice(index)
}

//   508
var multiFilter = function(...predicates){
	return function(arg){
    return predicates.every(predicate => predicate(arg))
  }
};

// 509
function flip(fn) {
    return function (...args) {
      return fn(...args.reverse());
    };
  }

// https://maxcode.dev/problems/compose

function compose(...fncs) {
  return function(num){
    return fncs.reduceRight((currentInput, fn) => fn(currentInput), num)
  }
}
function compose(...fncs) {
  fncs.reverse()
  return function(num){
    console.log("=======", num, "=======")
    return fncs.reduce((currentInput, fn) => console.log(fn) || fn(currentInput), num)
  }
}

// function compose(...fncs) {
//   return fncs.reduceRight(
//     (a, b) => x => b(a(x)),
//     x => x, // identity
//   );
// }

// const chain = (a, b) => x => b(a(x))
// const chained = chain(double, cube);
// chained(3); // 216


const double = x => x * 2;
const cube = x => x ** 3;
const inc = x => x + 1;

const foo = compose(double, cube, inc);

console.log(foo(0)); // 2
console.log(foo(1)); // 16
console.log(foo(2)); // 54

// const res0 = double(cube(inc(0))); // 2
// const res1 = double(cube(inc(1))); // 16
// const res2 = double(cube(inc(2))); // 54 

// https://maxcode.dev/problems/repeater

function makeLooper(str) {
  let index = 0
  return function(index){
    const result = str[index];

    index++;
    if (index === str.length) {
      index = 0;
    }

    return result;
  }
}


const gen = makeLooper("abc");

console.log(gen()); // "a"
console.log(gen()); // "b"
console.log(gen()); // "c"
console.log(gen()); // "a"
console.log(gen()); // "b"
console.log(gen()); // "c"
console.log(gen()); // "a"
console.log(gen()); // "b"
console.log(gen()); // "c"
console.log(gen()); // "a"
