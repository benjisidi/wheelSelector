let BLACK = (0,0,0);
let WHITE = (255, 255, 255);
let spinner;
let segmentSlider;
let spinButton;

function setup() {
	let canvas = createCanvas(800, 800);
	canvas.parent("sketch holder");
	spinner = new spinWheel(0, 0, width/3, 20, 40);

	// Create slider and label
	sliderLabel = document.createTextNode('Number of segments: ');
	col1 = document.getElementById('col1');
	col1.appendChild(sliderLabel);

	segmentSlider = createSlider(2,70,8);
	segmentSlider.parent("col2");

	sliderAmountLabel = document.createTextNode(segmentSlider.value());
	col3 = document.getElementById('col3');
	col3.appendChild(sliderAmountLabel);

	spinButton = createButton('SPIN!');
	spinButton.mousePressed(spinSpinner);
}

function draw() {
	ellipseMode(RADIUS);
	translate(width/2, height/2);
	background(100, 100, 100);
	stroke(BLACK);
	strokeWeight(1);
	spinner.setN(segmentSlider.value());
	sliderAmountLabel.nodeValue = segmentSlider.value();
	spinner.show();
}

function spinSpinner(){
	spinner.spin();
}
