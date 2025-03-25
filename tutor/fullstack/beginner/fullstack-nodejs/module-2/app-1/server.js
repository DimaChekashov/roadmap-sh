import express from "express";

const app = express();

app.use((req, res, next) => {
	console.log(req.method, req.url);
	next();
});

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/about", (req, res) => {
	res.send("This is express App!");
});

app.get("/users/:id", (req, res) => {
	const id = req.params.id;

	res.send(`Selected user id: ${id}`);
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
