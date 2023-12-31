const allHeroCard = document.querySelectorAll(".hero-card");
const defaultHovered = document.querySelector(".hero-card.hovered");

allHeroCard.forEach((e) => {
	e.addEventListener("pointerenter", (e) => {
		console.log(e);
		defaultHovered.classList.remove("hovered");
	});

	e.addEventListener("pointerleave", (e) => {
		console.log(e);
		defaultHovered.classList.add("hovered");
	});
});

// const imageList = document.querySelectorAll(".home-image-animation");

// imageList.forEach((image) => {
// 	image.addEventListener("mouseover", () => {
// 		document.querySelector("#first-image").classList.add("hovered-first-image");
// 	});
// 	image.addEventListener("mouseout", () => {
// 		document
// 			.querySelector("#first-image")
// 			.classList.remove("hovered-first-image");
// 	});
// });

const featureBtnList = [...document.querySelectorAll(".feature-btn")];

featureBtnList.forEach((btn) => {
	btn.addEventListener("click", (event) => {
		event.preventDefault();
		document.querySelector(".default-btn").classList.remove("default-btn");
		btn.classList.add("default-btn");
	});
});

const testimonialContainer = [
	...document.querySelectorAll(".testimonial-container"),
];
const nextBtn = [...document.querySelectorAll(".next-btn")];
const prevBtn = [...document.querySelectorAll(".prev-btn")];

testimonialContainer.forEach((item, i) => {
	let containerDimension = item.getBoundingClientRect();
	let containerWidth = containerDimension.width;

	nextBtn[i].addEventListener("click", () => {
		item.scrollLeft += containerWidth;
	});

	prevBtn[i].addEventListener("click", () => {
		item.scrollLeft -= containerWidth;
	});
});


const hamburgerIcon = document.querySelector(".hamburger-icon");

hamburgerIcon.addEventListener("click", (event) => {
	event.preventDefault();
	document.querySelector("#vertical-nav-bar").classList.toggle("active");
})