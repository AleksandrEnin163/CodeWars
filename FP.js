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


// Реализуйте аналог стандартного метода Array#filter.

// Это задача на работу с функциями. Поэтому filter будет не методом массива, а функцией, принимающей два аргумента, первым из которых является массив.

function filter(array, callback) {
  let filteredArr = []
  for(let i = 0; i < array.length; i++){
    if(callback(array[i], i, array))
      filteredArr.push(array[i])
  }
  return filteredArr
}

// Реализуйте аналог стандартного метода Array#forEach.

// Это задача на работу с функциями. Поэтому forEach будет не методом массива, а функцией, принимающей два аргумента, первым из которых является массив.

function forEach(array, callback) {
  for(let i = 0; i < array.length; i++){
    callback(array[i], i, array)
  }
}

// Реализуйте аналог стандартного метода Array#map.

// Это задача на работу с функциями. Поэтому map будет не методом массива, а функцией, принимающей два аргумента, первым из которых является массив.

function map(array, callback) {
  const mappedArr = []
  for(let i = 0; i < array.length; i++){
    mappedArr.push(callback(array[i], i, array))
  }
  return mappedArr
}

// Напишите функцию zip, которая объединяет элементы двух массивов, используя функцию-колбэк.

function zip(a, b, callback) {
  const arrResult = []
  for(let i = 0; i < a.length; i++){
    if(typeof a[i] !== 'undefined'  && typeof b[i] !== 'undefined')
    arrResult.push(callback(a[i], b[i]))
  }
  return arrResult
}

// Реализуйте аналог стандартного метода Array#reduce.

// Это задача на работу с функциями. Поэтому reduce будет не методом массива, а функцией, принимающей три аргумента, первым из которых является массив.

function reduce(array, callback, initialValue) {
  isInitValue = typeof initialValue !== 'undefined'
  if(!array.length && !isInitValue){
    return('Error')
  }
  if(array.length === 1 && !isInitValue){
    return array[0]
  }
  if(!array.length && isInitValue){
    return initialValue
  }
  const firstIndex = isInitValue ? 0 : 1
  let acc = isInitValue ? initialValue : array[0]
  for(let i = firstIndex; i < array.length; i++){
    acc = callback(acc, array[i], i, array)
  }
  return acc
}


// Числа Фибоначчи — элементы числовой последовательности 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ..., в которой первые два числа равны 0 и 1, а каждое последующее число равно сумме двух предыдущих чисел.

// Функция fibonacciGenerator возвращает функцию, которая при очередном вызове возвращает очередное число Фибоначчи.

function fibonacciGenerator() {
  let a = 0;
  let b = 1;

  return function () {
    const result = a;
    a = b;
    b = result + b;
    return result;
  };
}

// Простое число — натуральное число, у которого ровно 2 делителя. Как определить простоту числа, мы разбирали в задаче is-prime.

// Функция primeGenerator возвращает функцию, которая при очередном вызове возвращает следующее простое число.

function primeGenerator() {
  function isPrime(num){
    if(num <= 1 ){
        return false
    }
    let del = 0
    for(let i = 1; i <= Math.sqrt(num); i++){
        if(num % i === 0 ){
            del += 2
        }
    }
    return del === 2
  }
  let num = 1
  return function(){
    while(true){
      num++
      if(isPrime(num)){
        return num
      }
    }
  }
}

// Функция-декоратор once принимает функцию и возвращает новую функцию, которая отрабатывает только один раз.

function once(fn) {
  let wasCalled = false
  return function(...args){
    if(!wasCalled){
      wasCalled = true
      return fn(...args)
    }
  }
}

const click = () => {
  console.log("click");
}

const decoratedClick = once(click);

console.log(decoratedClick());
console.log(decoratedClick());
console.log(decoratedClick());
console.log(decoratedClick());

// Допустим, у нас есть чистая функция double, принимающая число и умножающая его на два. Но работает она долго.
// Ваша задача реализовать функцию-декоратор memo. Эта функция принимает один аргумент fn и возвращает новую функцию, которая делает то же самое, но не вычисляет результат для тех же аргументов повторно.

function memo(fn) {
  const results = {}
  return function(arg){
    if(results[arg]){
      return results[arg]
    }
    results[arg] = fn(arg)
    return results[arg]
  }
}




