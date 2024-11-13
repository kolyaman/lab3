// Задача: Написати функцію, яка приймає рядок і замінює всі голосні (a, e, i, o, u) 
// на певний символ, наприклад *.

function replaceglasni(str){
	let result = '';
	for (let char of str) {
		if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
			char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
		  result += '*';
		} else {
		  result += char;
		}
	}
	return result;
}
console.log(replaceglasni("Hello world"));
console.log(replaceglasni("Javascript"));  

module.exports = replaceglasni;