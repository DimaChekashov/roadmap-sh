import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
	if (req.url === "/page") {
		fs.readFile("./index.html", (err, data) => {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(data);
			res.end();
		})
	} else if (req.url === "/about") {
		res.writeHead(200, { "Content-Type": "text/plain" });
		res.end("About Us!\n");
	} else {
		res.writeHead(200, { "Content-Type": "text/plain" });
		res.end("The World!\n");
	}
});

const port = 4000;

server.listen(port, () => {
	console.log("Server is running on port", port);
});
