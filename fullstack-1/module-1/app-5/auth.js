const user = [];

export const login = (login, password) => {
	if (user.find(user => user.login === login && user.password === password)) {
		console.log("Login successful");
	} else {
		console.log("Login failed");
	}
}

export const register = (login, password) => {
	if (user.find(user => user.login === login)) {
		console.log("User already exists");
	} else {
		user.push({
			id: user.length + 1,
			login,
			password
		});
	}
}
