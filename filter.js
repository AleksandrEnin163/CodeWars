function filter(array, callback) {
  let filteredArr = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      filteredArr.push(array[i]);
    }
  }
  return filteredArr;
}

// test runner       → mocha  jest
// assertion library → chai   jest

const test = require("node:test");
const assert = require("node:assert");

test("Фильтр корректно работает для пустого массива", () => {
  assert.deepEqual(
    filter([], () => true),
    []
  );

  const arr = [];
  const result = filter(arr, () => true);
  assert.notEqual(arr, result, "Фильтр не должен возвращать исходный массив");
});

test("Фильтр оставляет только положительные числа", () => {
  const numbers = [3, -5, 6, -1, 9, 0, 5];
  const isPositive = (x) => x > 0;

  // const actualResult = filter(numbers, isPositive);
  // const expectedResult = [3, 6, 9, 5];

  assert.deepEqual(
    filter(numbers, isPositive),
    [3, 6, 9, 5],
    `const numbers = [3, -5, 6, -1, 9, 0, 5];\nconst isPositive = (x) => x > 0;\nfilter(numbers, isPositive)`,
  );

  // actualResult === expectedResult
});

test("Фильтр фильтрует, учитывая индексы", () => {
  const numbers = ["A", "B", "C", "D", "E"];

  assert.deepEqual(
    filter(numbers, (_, i) => i % 2 === 0),
    ["A", "C", "E"],
    `const numbers = ["A", "B", "C", "D", "E"];\nfilter(numbers, (_, i) => i % 2 === 0)`
  );
});

test("Колбэк принимает третьим аргументом массив, с которым вызывается фильтр", () => {
  const numbers = [4, 3, 2, 1, 7, 6, 5, 1, 2, 3, 48, 9];

  assert.deepEqual(
    filter(numbers, (x, _, arr) => x > arr[0]),
    [7, 6, 5, 48, 9],
    `const numbers = [4, 3, 2, 1, 7, 6, 5, 1, 2, 3, 48, 9];\nfilter(numbers, (x, _, arr) => x > arr[0])`
  );
});
