const start = Date.now();
const fs = require('fs');
const readLine = require('readline');
const util = require('util');

const readFile = util.promisify(fs.readFile);

let primes = [3];

async function isPrime(strNumber) {
	return new Promise((r) => {
		const input = Number(strNumber);
		// let index = 0;
		let i = 3;
		if (input == 2 || input == 3) {
			return r(1);
		}
		if (input == 0 || input == 1 || input % 2 == 0) {
			return r(0);
		}
		while (i <= Math.floor(Math.sqrt(input))) {
			if (input % i == 0) {
				return r(0);
			}
			i += 2;
		}
		// primes.push(input);
		return r(1);
	});
}

function main() {
	const input = process.argv[2];
	// const input = '/Users/omidseyfan/Projects/Node/soalpeach/onboarding/challenges/prime/input.txt';
	// const readInterface = readLine.createInterface({
	// 	input: fs.createReadStream(input),
	// 	output: process.stdout,
	// 	console: false,
	// 	terminal: false,
	// });
	// readInterface.on('line', (l) => console.log(isPrime(l)));
	// readInterface.on('close', () => {
	// 	console.log(Date.now() - start);
	// });
	readFile(input, { encoding: 'utf-8' }).then((data) => {
		Promise.all(data.split('\n').map((v) => isPrime(v))).then((datas) => {
			process.stdout.write(datas.join('\n'));
		});
	});
}

main();
