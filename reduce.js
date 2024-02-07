function reduce(array, callback, initialValue) {
  isInitValue = typeof initialValue !== "undefined";
  if (!array.length && !isInitValue) {
    throw new TypeError('Reduce of empty array with no initial value');
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

const test = require("node:test");
const assert = require("node:assert");

test("Редюс считает сумму элементов массива с переданным начальным значением", () => {
  const result = reduce([0, 1, 2, 3], (a, b) => a + b, 0);
  assert.equal(result, 6);
});

test('Редюс считает сумму элементов массива без переданного начального значения', () => {
    const result = reduce([0, 1, 2, 3], (a, b) => a + b);
    assert.equal(result, 6);
});

// test('Редьюс собирает из массива объект', () => {
//     const result = reduce(["a", "b", "c"], (acc, key) => ({ ...acc, [key]: 0 }), {});
//     assert.deepEqual(result, { a: 0, b: 0, c: 0 });
// });

test('Редьюc собирает объект из массива без переданного начального назначения', () => {
    const result = reduce(["a", "b", "c"], (a, b) => ({ [b]: a }));
    assert.deepEqual(result, { "c": { "b": "a"} })
})

test('Редьюc собирает объект из массива с начальным значением {}', () => {
    const result = reduce(["a", "b", "c"], (a, b) => ({ [b]: a }), {});
    assert.deepEqual(result, { "c": { "b": { "a": {} } } })
})

test('Редьюc собирает объект из массива с начальным значением null', () => {
    const result = reduce(["a", "b", "c"], (a, b) => ({ [b]: a }), null);
    assert.deepEqual(result, { "c": { "b": { "a": null } } })
})

test('Редьюс на пустом массиве без начального значения бросает ошибку', () => {
  assert.throws(() => {
    reduce([])
  }, {
      name: 'TypeError',
      message: 'Reduce of empty array with no initial value',
  });
});