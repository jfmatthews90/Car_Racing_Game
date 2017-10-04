// Input variables and contants for car control on keyboard

const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

var keyHeld_Gas = false;
var keyHeld_Reverse = false;
var keyHeld_TurnLeft = false;
var keyHeld_TurnRight = false;

var mouseX = 0;
var mouseY = 0;

function setupInput() {
	canvas.addEventListener('mousemove', updateMousePos);

	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);
}

function updateMousePos(evt) { // evt is the expected argument for an event receiver
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;

	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.left - root.scrollLeft; // not needed given paddle's range of movement
}

function keyPressed(evt) {
	// console.log("Key pressed: "+evt.keyCode);
	if(evt.keyCode == KEY_LEFT_ARROW) {
		keyHeld_TurnLeft = true;
	}
	if(evt.keyCode == KEY_RIGHT_ARROW) {
		keyHeld_TurnRight = true;
	}
	if(evt.keyCode == KEY_UP_ARROW) {
		keyHeld_Gas = true;
	}
	if(evt.keyCode == KEY_DOWN_ARROW) {
		keyHeld_Reverse = true;
	}
}

function keyReleased(evt) {
	// console.log("Key released: "+evt.keyCode);
	if(evt.keyCode == KEY_LEFT_ARROW) {
		keyHeld_TurnLeft = false;
	}
	if(evt.keyCode == KEY_RIGHT_ARROW) {
		keyHeld_TurnRight = false;
	}
	if(evt.keyCode == KEY_UP_ARROW) {
		keyHeld_Gas = false;
	}
	if(evt.keyCode == KEY_DOWN_ARROW) {
		keyHeld_Reverse = false;
	}
}