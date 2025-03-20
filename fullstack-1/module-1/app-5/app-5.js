import { connect, query } from "./db.js";
import { register, login } from "./auth.js";

// Task 1
const user = {
	name: "Dmitry",
	email: "no_reply@example.com",
	age: 26,
};

const address = {
	street: "123 Pinia Street",
	city: "Russia",
	zipCode: "12345",
};

const {name, email, age = 20} = user;
const {street, city = "Default city", zipCode} = address;

console.log(name, email, age, street, city, zipCode);

// Task 2
function sum(...numbers) {
	let total = 0;

	for (const number of numbers) {
		total += number;
	}

	return total;
}

const numsA = [1, 2, 3, 4, 5];
const numsB = [6, 7, 8, 9, 10];

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(...numsA, ...numsB));

// Task 3
connect();
query("SELECT * FROM users");

register("no_reply@example.com", "123321");
register("no_reply@example.com", "123321");

login("no_reply@test.com", "123321");
login("no_reply@example.com", "123321");

// Task 4
const posts = [
	{
		id: 1,
		title: "Post 1",
		content: "Content 1"
	},
	{
		id: 2,
		title: "Post 2",
		content: "Content 2"
	}
];

function getPosts() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(posts);
		}, 3000);
	});
}

getPosts().then(posts => console.log(posts));

async function getPostsSync() {
	try {
		const data = await new Promise(res => {
				setTimeout(() => {
					res(posts);
				}, 3000);
			}
		);

		return data;
	} catch(err) {
		console.error(err);
	}
}

getPostsSync().then(posts => console.log(posts));