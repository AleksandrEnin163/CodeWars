"use strict";

function detectInt(...predicates) {
  let num = 1;

  while (true) {
    if (predicates.every((predicate) => predicate(num))) {
      return num;
    }
    num++;
  }
}

// 501
function zipWith(fn, a0, a1) {
  const arrResult = [];
  const length = Math.min(a0.length, a1.length);
  for (let i = 0; i < length; i++) {
    arrResult.push(fn(a0[i], a1[i]));
  }
  return arrResult;
}

// 502
function multiplyAll(arr) {
  // let x = 0;
  return function (int) {
    // ← foo
    // x++;
    return arr.map((num) => num * int);
  };
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

  fns.reduce((currentInput, fn) => fn(currentInput), input);
  ///         10            x => x + 1      11
  //          11            x => x * 2      22
  //          22            x => x + 5      27
  //          27
}

// 10
// x => x + 1, x => x * 2, x => x + 5

//   504
function dropWhile(array, predicate) {
  const index = array.findIndex((num) => !predicate(num));
  return index === -1 ? [] : array.slice(index);
}

//   508
var multiFilter = function (...predicates) {
  return function (arg) {
    return predicates.every((predicate) => predicate(arg));
  };
};

// 509
function flip(fn) {
  return function (...args) {
    return fn(...args.reverse());
  };
}

// https://maxcode.dev/problems/compose

function compose(...fncs) {
  return function (num) {
    return fncs.reduceRight((currentInput, fn) => fn(currentInput), num);
  };
}
function compose(...fncs) {
  fncs.reverse();
  return function (num) {
    console.log("=======", num, "=======");
    return fncs.reduce(
      (currentInput, fn) => console.log(fn) || fn(currentInput),
      num
    );
  };
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

const double = (x) => x * 2;
const cube = (x) => x ** 3;
const inc = (x) => x + 1;

const foo = compose(double, cube, inc);

console.log(foo(0)); // 2
console.log(foo(1)); // 16
console.log(foo(2)); // 54

// const res0 = double(cube(inc(0))); // 2
// const res1 = double(cube(inc(1))); // 16
// const res2 = double(cube(inc(2))); // 54

// https://maxcode.dev/problems/repeater

function makeLooper(str) {
  let index = 0;
  return function (index) {
    const result = str[index];

    index++;
    if (index === str.length) {
      index = 0;
    }

    return result;
  };
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
  let filteredArr = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) filteredArr.push(array[i]);
  }
  return filteredArr;
}

// Реализуйте аналог стандартного метода Array#forEach.

// Это задача на работу с функциями. Поэтому forEach будет не методом массива, а функцией, принимающей два аргумента, первым из которых является массив.

function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

// Реализуйте аналог стандартного метода Array#map.

// Это задача на работу с функциями. Поэтому map будет не методом массива, а функцией, принимающей два аргумента, первым из которых является массив.

function map(array, callback) {
  const mappedArr = [];
  for (let i = 0; i < array.length; i++) {
    mappedArr.push(callback(array[i], i, array));
  }
  return mappedArr;
}

// Напишите функцию zip, которая объединяет элементы двух массивов, используя функцию-колбэк.

function zip(a, b, callback) {
  const arrResult = [];
  for (let i = 0; i < a.length; i++) {
    if (typeof a[i] !== "undefined" && typeof b[i] !== "undefined")
      arrResult.push(callback(a[i], b[i]));
  }
  return arrResult;
}

// Реализуйте аналог стандартного метода Array#reduce.

// Это задача на работу с функциями. Поэтому reduce будет не методом массива, а функцией, принимающей три аргумента, первым из которых является массив.

function reduce(array, callback, initialValue) {
  isInitValue = typeof initialValue !== "undefined";
  if (!array.length && !isInitValue) {
    return "Error";
  }
  if (array.length === 1 && !isInitValue) {
    return array[0];
  }
  if (!array.length && isInitValue) {
    return initialValue;
  }
  const firstIndex = isInitValue ? 0 : 1;
  let acc = isInitValue ? initialValue : array[0];
  for (let i = firstIndex; i < array.length; i++) {
    acc = callback(acc, array[i], i, array);
  }
  return acc;
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

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  let del = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      del += 2;
    }
  }
  return del === 2;
}

function primeGenerator() {
  let num = 2;
  return function () {
    const result = num;

    while (true) {
      num++;
      if (isPrime(num)) {
        break;
      }
    }

    return result;
  };
}

// Функция-декоратор once принимает функцию и возвращает новую функцию, которая отрабатывает только один раз.

function once(fn) {
  let wasCalled = false;
  return function (...args) {
    if (!wasCalled) {
      wasCalled = true;
      return fn(...args);
    }
  };
}

const click = () => {
  console.log("click");
};

const decoratedClick = once(click);

console.log(decoratedClick());
console.log(decoratedClick());
console.log(decoratedClick());
console.log(decoratedClick());

// Допустим, у нас есть чистая функция double, принимающая число и умножающая его на два. Но работает она долго.
// Ваша задача реализовать функцию-декоратор memo. Эта функция принимает один аргумент fn и возвращает новую функцию, которая делает то же самое, но не вычисляет результат для тех же аргументов повторно.

function memo(fn) {
  const results = new Map();
  return function (arg) {
    if (!results.has(arg)) {
      results.set(arg, fn(arg));
    }
    return results.get(arg);
  };
}

const identity = (x) => x;

const memoizedIdentity = memo(identity);

console.log({ x: memoizedIdentity(1) });
console.log({ x: memoizedIdentity("1") });

console.log({ x: identity(1) });
console.log({ x: identity("1") });

// String Joining
// Реализуйте функцию join, которая будет работать следующим образом:

// copy
// const s = join("Hello")("World!")("how")("are")("you?")();
// console.log(s); // "Hello World! how are you?"
// Цепочка может состоять из произвольного количества вызовов.

// Каждый вызов, кроме последнего, принимает в качестве аргумента одну строку. Последний вызов не принимает аргументы и возвращает итоговую строку.

function join(initialStr) {
  let result = initialStr;
  function innerJoin(nextString) {
    if (typeof nextString === "string") {
      result += " " + nextString;
      return innerJoin;
    } else {
      return result;
    }
  }
  return innerJoin;
}

// Склонение существительных
// Реализуйте функцию, которая позволяет склонять существительное во множественном числе.

// Например, 1 корова, 2 коровы, 5 коров, 24 коровы, 51 корова. Или 2 задачи, 70 задач и 21 задача.

function plural(words) {
  return function (count) {
    let wordIndex;
    if (count % 10 === 1 && count % 100 !== 11) {
      wordIndex = 0;
    } else if (
      count % 10 >= 2 &&
      count % 10 <= 4 &&
      (count % 100 < 10 || count % 100 >= 20)
    ) {
      wordIndex = 1;
    } else if (count === 0) {
      wordIndex = 2;
    } else {
      wordIndex = 2;
    }
    return words[wordIndex];
  };
}

function group(arr, isEqual) {
  const result = [];

  for (const elem of arr) {
    const groupFinded = result.find((group) => isEqual(group[0], elem));

    if (groupFinded !== undefined) {
      groupFinded.push(elem);
    } else {
      result.push([elem]);
    }
  }

  return result;
}

console.log(
  group(
    //                                  ↓
    ["a", "bb", "x", "qwe", "yu", "v", "pp"],
    (a, b) => a.length === b.length
  )
);

// Полифил Map.groupBy
// Реализуйте аналог стандартного метода Map.groupBy.

// Функция groupBy принимает iterable и callback, с помощью которого можно понять, к какой группе относится очередной элемент iterable.

// Возвращает объект Map, где по ключам собраны элементы, относящиеся к одной группе.

function groupBy(iterable, cb) {
  const array = Array.from(iterable);
  const map = new Map();
  for (let i = 0; i < array.length; i++) {
    const key = cb(array[i], i);
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(array[i]);
  }
  return map;
}

function groupBy(iterable, cb) {
  const map = new Map();
  for (let i = 0; i < iterable.length; i++) {
    const key = cb(iterable[i], i);
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(iterable[i]);
  }
  return map;
}

function groupBy(array, classifier, downstream, accSup) {
  const map = new Map();
  for (const elem of array) {
    const key = classifier(elem);
    const acc = map.has(key) ? map.get(key) : accSup();
    const updatedAcc = downstream(acc, elem);
    map.set(key, updatedAcc);
  }
  return map;
}

// partial_application

function partial(fn, ...args) {
  return function (...missingArgs) {
    const allArgs = args
      .map((arg) => (arg === partial.placeholder ? missingArgs.shift() : arg))
      .concat(missingArgs);
    return fn(...allArgs);
  };
}

partial.placeholder = Symbol();

const foo1 = (a, b, c) => [a, b, c];
const foo2 = partial(foo1, "xxx", partial.placeholder, 2);

console.log(foo2(10)); // ["xxx", 10, 2]

function frequency(arr, options = {}) {
  const {
    criteria = (x) => x,
    compareTo = (val1, val2) => (val1 < val2 ? -1 : 1),
  } = options;
  const mapFreqeuncy = new Map();
  for (const elem of arr) {
    let newElem = criteria(elem);

    if (!mapFreqeuncy.has(newElem)) {
      mapFreqeuncy.set(newElem, 0);
    }
    mapFreqeuncy.set(newElem, mapFreqeuncy.get(newElem) + 1);
  }

  return Array.from(mapFreqeuncy).sort((a, b) =>
    compareTo(a[0], b[0], a[1], b[1])
  );
}

function parity(number) {
  return number % 2 === 0 ? "even" : "odd";
}

console.log(frequency([1, 2, 3, 4, 5, 6, 7], { criteria: parity }));
// [["even", 3], ["odd", 4]]

console.log(frequency(["Peter", "Anna", "Rose", "Peter", "Peter", "Anna"], {}));

console.log(frequency(["Peter", "Anna", "Rose", "Peter", "Peter", "Anna"]));
// [["Anna", 2], ["Peter", 3], ["Rose", 1]]

// console.log(frequency([1, 10, 12, 2, 1, 10, 2, 2]));
// // [[1, 2], [2, 3], [10, 2], [12, 1]]

function frequencyCompare(value1, value2, freq1, freq2) {
  return freq2 - freq1;
}

console.log(
  frequency(["Peter", "Anna", "Rose", "Peter", "Peter", "Anna"], {
    compareTo: frequencyCompare,
  })
);
[
  ["Peter", 3],
  ["Anna", 2],
  ["Rose", 1],
];

function sum(n) {
  let total = n;
  function add(nextNum) {
    total += nextNum;
    // console.log({ total });
    return add;
  };
  add[Symbol.toPrimitive] = function() {
    return total
  }
  return add
}

function sum(total) {
  function add(nextNum) {
    return sum(total + nextNum);
  };
  add[Symbol.toPrimitive] = function() {
    return total
  }
  return add
}

const obj = {
  x: 1,
  y: 2,
};

obj[Symbol.toPrimitive] = function() {
  return JSON.stringify(this);
}

console.log(`Hello, ${obj}!`)

// https://learn.javascript.ru/object-toprimitive#symbol-toprimitive

// console.log(sum(1)(2)(3)(4) + 10)
// console.log(sum(1)(2)(3)(4) + "10")

const s = `function add(nextNum) {
    total += nextNum;
    console.log({ total });
    return add;
  }`;

// console.log(">>>", sum(1)(2)(3)(4) + "");
// console.log(">>>", sum(1)(2)(3)(4) == 10);

const fooo = sum(1)(2)(3); // 6

console.log(+fooo(10)(20)) // 36
console.log(+fooo(1000)) // 1006


function sum(a, b, c, d, e, f, g, h, j) {
  return a + b + c + d + e + f + g + h + j;
}

// const res = curry(sum, 1)(2, 3, 4)(5, 6)()(7)(8, 9);
// console.log(res); // 45

// const res = curry(sum, 1, 2, 3, 4, 5, 6, 7, 8, 9); // 45


const res = curry(sum, 1)(2, 3, 4)         (5, 6)()(7)(8, 9);
const res = curry(sum, 1, 2, 3, 4)         (5, 6)()(7)(8, 9);

// curry(sum, 1)(2, 3, 4) → curry(sum, 1, 2, 3, 4) 

function curry(fn, ...args) {
  if (fn.length <= args.length) {
    return fn(...args);
  }

  return (...nextArgs) => {
    return curry(fn, ...args, ...nextArgs);
  };
}