const fs = require('fs');
const readLine = require('readline');

function isPrime(strNumber) {
	const input = Number(strNumber);
	let i = 3;
	if (input == 2) {
		return 1;
	}
	if (input == 0 || input == 1 || input % 2 == 0) {
		return 0;
	}
	while (i <= Math.floor(Math.sqrt(input))) {
		if (input % i == 0) {
			return 0;
		}
		i += 2;
	}
	return 1;
}

function main() {
	const input = process.argv[2];
	const readInterface = readLine.createInterface({
		input: fs.createReadStream(input),
		output: process.stdout,
		console: false,
		terminal: false,
	});
	readInterface.on('line', (l) => console.log(isPrime(l)));
}

main();
