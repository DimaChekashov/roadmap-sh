import fs from "fs";
import { isMainThread, Worker, parentPort } from "worker_threads";


// Task 1
const readFilePromise = (filename) => {
	return new Promise((resolve, reject) => {
		fs.readFile(filename, 'utf-8', (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		})
	})
};

readFilePromise("./file1.txt")
	.then(data1 => {
		return readFilePromise("./file2.txt")
			.then(data2 => {
				console.log(data1, "|", data2);
			});
	})
	.catch(err => {
		console.error(err);
	});


// Task 2
async function readFileAndProcess() {
	try {
		const data1 = await fs.promises.readFile("./file1.txt", "utf-8");
		const data2 = await fs.promises.readFile("./file2.txt", "utf-8");

		console.log(data1, "|", data2);
	} catch (err) {
		console.error(err);
	}
}

readFileAndProcess();

// Task 3
// interface User {
// 	name: string;
// 	email: string;
// 	age: number;
// }

// function (user: User) {
// 	console.log(user.name, user.email, user.age);
// }

// Task 4
if (isMainThread) {
	const worker = new Worker("./app-1.js");

	worker.on('message', (result) => {
		console.log(`Результат из worker: ${result}`);
	});

	worker.postMessage({
		data: "Hello from main thread"
	});
} else {
	parentPort.on("message", (data) => {
		const result = 250 * 5 + 10000;

		parentPort.postMessage(result);
	});
}
