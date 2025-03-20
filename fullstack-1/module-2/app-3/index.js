import express from "express";

const port = 3000;
const app = express();

let products = [
	{
		id: 1,
		name: "Product 1",
		status: false,
	},
	{
		id: 2,
		name: "Product 2",
		status: true,
	},
];

app.use(express.json());

app.get("/products", (req, res) => {
	switch(req.query.status) {
		case "true":
			res.json(products.filter(product => product.status === true));
			break;
		case "false":
			res.json(products.filter(product => product.status === false));
			break;
		default:
			res.json(products);
			break;
	}
});

app.get("/products/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const productIndex = products.findIndex(product => product.id === id);

	if(productIndex !== -1) {
		res.json(products.find(product => product.id === id));
	} else {
		res.status(404).send("Product not found");
	}
});

app.post("/products", (req, res) => {
	const newProduct = {
		id: products.length + 1,
		name: req.body.name,
		status: false
	};

	products.push(newProduct);
	res.json(newProduct);
});

app.put("/products/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const productIndex = products.findIndex(product => product.id === id);

	if(productIndex !== -1) {
		products[productIndex] = {
			...products[productIndex],
			...req.body,
			id
		};

		res.json(products[productIndex]);
	} else {
		res.status(404).send("Product not found");
	}
});

app.delete("/products/:id", (req, res) => {
	const id = parseInt(req.params.id);
	products = products.filter(product => product.id !== id);
	res.status(204).send();
});

app.listen(port, () => {
	console.log("Server is running on port", port);
});
