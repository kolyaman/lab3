const sumArray = require('../tasks/task3');

test('sums all numbers in an array', () => {
  expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
  expect(sumArray([10, 20, 30])).toBe(60);
  expect(sumArray([])).toBe(0);
  expect(sumArray([7])).toBe(7);
});