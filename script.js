// Get the container element

// const container = document.querySelector('.container');

// Randomly place the box divs inside the container

// const boxes = document.querySelectorAll('.box');
// boxes.forEach(box => {
// 	const randomX = Math.floor(Math.random() * (container.offsetWidth - box.offsetWidth));
// 	const randomY = Math.floor(Math.random() * (container.offsetHeight - box.offsetHeight));
// 	box.style.top = `${randomY}px`;
// 	box.style.left = `${randomX}px`;
// });

// Get user data from the database
const userData = [
	{ name: "John", age: 25 },
	{ name: "Jane", age: 32 },
	{ name: "Mark", age: 28 },
	{ name: "Sarah", age: 21 },
	{ name: "David", age: 36 },
	{ name: "Lisa", age: 29 },
	{ name: "Mike", age: 24 },
	{ name: "Emma", age: 27 },
	{ name: "Alex", age: 31 },
	{ name: "Rachel", age: 23 },
	{ name: "Paul", age: 35 },
	{ name: "Emily", age: 26 }
];

// Get the container element
const container = document.querySelector('.container');

// Randomly place the box divs inside the container and change their text color
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    const randomX = Math.floor(Math.random() * (container.offsetWidth - box.offsetWidth));
    const randomY = Math.floor(Math.random() * (container.offsetHeight - box.offsetHeight));
    box.style.top = `${randomY}px`;
    box.style.left = `${randomX}px`;

    const randomColorX = Math.floor(Math.random()*16777215).toString(16);
    const randomColorY = Math.floor(Math.random()*16777215).toString(16);
    box.style.color = "#" + randomColorX;
    box.style.backgroundColor = "#" + randomColorY;
});
