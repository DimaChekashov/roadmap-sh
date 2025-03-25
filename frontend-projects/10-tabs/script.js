document.addEventListener('DOMContentLoaded', function() {
	const links = document.querySelectorAll(".tab-link");
	let activeLink = document.querySelector(".tab-link.active");
	let activeContent = document.querySelector(".tab-content.show");

	links.forEach(link => {
		link.addEventListener("click", () => {
			if (activeLink !== link) {
				activeLink.classList.remove("active");
				activeContent.classList.remove("show");

				activeLink = link;
				activeContent = document.querySelector(`.tab-content#${link.getAttribute("data-tab")}`);

				activeLink.classList.add("active");
				activeContent.classList.add("show");
			}
		});
	});
});