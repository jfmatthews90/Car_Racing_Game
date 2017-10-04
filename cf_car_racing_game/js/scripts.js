// JS file for track_paddle game
// note that parameters that are nested immediately next to adjacent commas represent pair values

var canvas, canvasContext;

var redCar = new carClass();

window.onload = function() {
	canvas = document.getElementById('gameCanvas'); //this displays the game's canvas
	canvasContext = canvas.getContext('2d');

	colorRect(0,0, canvas.width, canvas.height, 'lightgreen');
	colorText("Loading Images", canvas.width/2, canvas.height/2, "black");

	loadImages();
}

function imageLoadingDoneSoStartGame() {
	var framesPerSecond = 30; // sets frames per second that we're wanting to achieve for smooth gameplay
	setInterval(updateAll, 1000/framesPerSecond); // 1000ms / 30 should give us 30 frames per second

	setupInput();
	redCar.reset();
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
	redCar.move();
	carTrackHandling(redCar);
}

function clearScreen() {
	colorRect(0,0, canvas.width,canvas.height, '#0f0'); // this 'resets' the background canvas each frame
}

function drawAll() {
	// clearScreen();
	drawTracks(); 
	redCar.draw();
} 

// I'm working check
// console.log("I'm working!");
