const findMax = require('../tasks/task4');

test('finds the maximum number in an array', () => {
  expect(findMax([3, 5, 7, 2, 8])).toBe(8);
  expect(findMax([10, 20, 5, 30])).toBe(30);
  expect(findMax([-1, -5, -3])).toBe(-1);
  expect(findMax([42])).toBe(42);
});