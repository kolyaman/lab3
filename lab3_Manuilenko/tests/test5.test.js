const countOccurrences = require('../tasks/task5');
test('counts the occurrences of a character in a string', () => {
  expect(countOccurrences("hello world", 'o')).toBe(2);
  expect(countOccurrences("banana", 'a')).toBe(3);
  expect(countOccurrences("example", 'x')).toBe(1);
  expect(countOccurrences("hello", 'z')).toBe(0);
});