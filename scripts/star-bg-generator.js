const MIN_SIZE = 0.7;
const MAX_SIZE = 1.2;
const NUM_SHAPES = 150;
const SHAPE_URLS = [
	{src: "images/crescent.svg", default: 30},
	{src: "images/constellation-1.svg", default: 100},
	{src: "images/constellation-2.svg", default: 100},
	{src: "images/blackhole.svg", default: 100},
	{src: "images/nebula-1.svg", default: 500},
	{src: "images/nebula-2.svg", default: 500},
	{src: "images/star.svg", default: 30},
	{src: "images/star-2.svg", default: 10},
	{src: "images/star.svg", default: 30},
	{src: "images/star-2.svg", default: 10},
	{src: "images/star.svg", default: 30},
	{src: "images/star-2.svg", default: 20},
	{src: "images/star-2.svg", default: 10},
	{src: "images/star-2.svg", default: 10},
	{src: "images/star-2.svg", default: 10},
	{src: "images/star-2.svg", default: 10},
	{src: "images/star-2.svg", default: 10},
	{src: "images/star.svg", default: 30},
	{src: "images/star-2.svg", default: 10},
	{src: "images/star.svg", default: 30},
];

//adds a random shape to the night sky background (crescent or star)
function addRandomShape(parent, x, y, tolerance) {
	var shape = document.createElement("img")
	const r = Math.floor(Math.random() * SHAPE_URLS.length)
	const scale = Math.floor(Math.random() * (MAX_SIZE - MIN_SIZE)) + MIN_SIZE;
	shape.src = SHAPE_URLS[r].src;
	shape.style.width = Math.floor(SHAPE_URLS[r].default * scale) + "px";
	shape.style.height = "auto";
	shape.style.position = "absolute";
	shape.style.left = Math.floor(x + Math.random() * tolerance - Math.random() * tolerance/2);
	shape.style.top = Math.floor(y + Math.random() * tolerance - Math.random() * tolerance/2);
	shape.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
	shape.style.zIndex = -1000;

	console.log(shape)
	parent.appendChild(shape)
}

function generateBackground() {
	//delete existing stars, if any
	document.getElementById("starry-bg").replaceChildren()
	
	//rather than randomly placing stars, which can lead to weird gaps and clusters, I create a grid
	//and place a shape randomly within each grid square.
	
	//figure out a step size where NUM_SHAPES square tiles are evenly distributed in the window.
	const ratio = window.innerWidth / (window.innerHeight*1.25);
	const l = Math.sqrt(NUM_SHAPES / ratio)
	const step = Math.floor((window.innerHeight*1.25) / l);

	//use that step size to iterate over the entire window.
	for (let x = 0; x < window.innerWidth; x += step) {
		for (let y = 0; y < (window.innerHeight*1.25); y += step) {
			addRandomShape(document.getElementById("starry-bg"), x, y, step / 2);
		}
	}
}