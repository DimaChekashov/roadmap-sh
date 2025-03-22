const theme = localStorage.getItem("theme");

if (theme) {
	document.body.setAttribute("data-theme", theme);
} else {
	document.body.setAttribute("data-theme", "light");
}

function toggleTheme() {
	const sunIcon = document.getElementById("sun_icon");
	const moonIcon = document.getElementById("moon_icon");
	const body = document.body;
	const theme = document.body.getAttribute("data-theme");

	body.setAttribute("data-theme", theme === "light" ? "dark" : "light");

	if (theme === "light") {
		sunIcon.style.display = "none";
		moonIcon.style.display = "block";
		localStorage.setItem("theme", "dark");
	} else {
		sunIcon.style.display = "block";
		moonIcon.style.display = "none";
		localStorage.setItem("theme", "light");
	}
}