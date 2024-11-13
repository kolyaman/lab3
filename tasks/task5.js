// Задача: Напишіть функцію countOccurrences, яка приймає рядок і символ,
//  і повертає кількість входжень цього символу в рядку.


function countOccurrences(str, char) {
	let count = 0;
	for (const ch of str) {
	  if (ch === char) {
		count++;
	  }
	}
	return count; 
}
console.log(countOccurrences("hello world", 'o')); 
console.log(countOccurrences("banana", 'a'));
  
module.exports = countOccurrences;