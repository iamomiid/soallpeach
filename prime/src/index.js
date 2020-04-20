const fs = require('fs');
const input = process.argv[2];

let primes = [];
let keys = {};

const data = fs.readFileSync(input, { encoding: 'utf-8' }).split('\n');

function isPrime(strNumber) {
	const input = Number(strNumber);
	let index = 0;
	let i = primes[index];
	if (keys[input]) {
		return 1;
	}
	if (input == 0 || input == 1 || input % 2 == 0) {
		return 0;
	}
	while (i <= Math.floor(Math.sqrt(input))) {
		if (input % i == 0) {
			return 0;
		}
		i = index < primes.length - 1 ? primes[++index] : i + 2;
	}
	return 1;
}

function generate(n) {
	const done = {};
	for (let i = 2; i < n; i++) {
		if (done[i]) continue;
		for (let j = 1; j * i < n; j++) {
			done[j * i] = true;
		}
		primes.push(i);
		keys[i] = true;
	}
}

generate(150000);

console.log(data.map(isPrime).join('\n'));
