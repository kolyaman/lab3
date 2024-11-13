const reverseWithoutNumbers = require('../tasks/task2');

test('Reverses string and removes numbers', () => {
  expect(reverseWithoutNumbers('abc123def')).toBe('fedcba');
  expect(reverseWithoutNumbers('hello5world')).toBe('dlrowolleh');
  expect(reverseWithoutNumbers('123')).toBe('');
  expect(reverseWithoutNumbers('')).toBe('');
});

test('Handles strings with no numbers', () => {
  expect(reverseWithoutNumbers('abcdef')).toBe('fedcba');
  expect(reverseWithoutNumbers('hello')).toBe('olleh');
});

test('Handles strings with only numbers', () => {
  expect(reverseWithoutNumbers('1234567890')).toBe('');
});