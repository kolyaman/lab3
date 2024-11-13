const replaceVowels = require('../tasks/task1');

test('Replaces vowels with asterisks', () => {
  expect(replaceVowels('hello')).toBe('h*ll*');
  expect(replaceVowels('javascript')).toBe('j*v*scr*pt');
  expect(replaceVowels('aeiou')).toBe('*****');
  expect(replaceVowels('')).toBe('');
});

test('Handles strings without vowels', () => {
  expect(replaceVowels('bcdfgh')).toBe('bcdfgh');
});

test('Handles mixed case vowels', () => {
  expect(replaceVowels('HELLO')).toBe('H*LL*');
  expect(replaceVowels('JavaScript')).toBe('J*v*Scr*pt');
});