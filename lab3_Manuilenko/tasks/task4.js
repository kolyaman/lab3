// Задача: Напишіть функцію findMax, яка приймає масив чисел і повертає найбільше число в масиві.

function findMax(numbers) {
	let max = numbers[0];
	for (const number of numbers) {
	  if (number > max) {
		max = number;
	  }
	}
	return max;
}
console.log(findMax([3, 5, 7, 2, 8]));
console.log(findMax([10, 20, 5, 30])); 
  
module.exports = findMax;