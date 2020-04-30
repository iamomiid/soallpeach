const http = require('http');

let total = 0;

const convertChunk = (req) =>
	new Promise((r) => {
		let body = '';
		req
			.on('data', (chunk) => {
				body += chunk.toString();
			})
			.on('end', () => {
				return r(Number(body));
			});
	});

const app = http.createServer(function (req, res) {
	if (req.method == 'POST') {
		convertChunk(req).then((num) => (total += num));
		res.end();
	} else {
		res.end(total.toString());
	}
});

app.listen(80);
