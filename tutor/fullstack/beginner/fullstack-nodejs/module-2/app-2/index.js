import express from "express";
import morgan from "morgan";
import fs from "fs";
import path from "path";

const __dirname = path.resolve();

const port = 3000;
const app = express();

app.use(express.json());

// Task 4
app.use((req, res, next) => {
	const reqHeader = req.header("Content-Type");

	if (!reqHeader) {
		return res.status(400).json({ error: "Missing Content-Type header" });
	}

	next();
})

// Task 2
let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
app.use(morgan('combined', { stream: accessLogStream}));

app.get("/", (req, res) => {
	res.send("Hello World!");
});

// Task 3
app.post("/data", (req, res) => {
	fs.writeFileSync("data.json", JSON.stringify(req.body));
	res.send("Received and save data!");
});

// Task 4
app.use((req, res) => {
	res.status(404);
	res.send("Not found!");
})

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
