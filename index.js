const readline = require("readline");

const reader = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

reader.question("please enter your number: ", (number) => {
	let n = number;
	let resp = 0;
	for (let i = 0; i < n.length; i++) {
		resp += n[i] ** n.length;
		console.log("resp iteration " + i, resp);
	}

	if (resp.toString() === number) {
		console.log(number + " is a narcissistic number");
	} else {
		console.log(number + " is not a narcissistic number");
	}

	reader.close();
});
