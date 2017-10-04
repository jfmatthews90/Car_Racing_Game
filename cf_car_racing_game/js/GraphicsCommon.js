// All "common" graphics calls

function drawBitmapCenteredWithRotation(useBitmap, atX, atY, withAng) {
	canvasContext.save();
	canvasContext.translate(atX, atY);
	canvasContext.rotate(withAng);
	canvasContext.drawImage(useBitmap,-useBitmap.width/2,-useBitmap.height/2);
	canvasContext.restore();
}

function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
	canvasContext.fillStyle = fillColor; // this sets the background color or the color for the canvas
	canvasContext.fillRect(topLeftX,topLeftY, boxWidth,boxHeight); // this 'resets' the background canvas each frame so that no trail follows the car
}

function colorCircle(centerX,centerY, radius, fillColor) {
	canvasContext.fillStyle = fillColor; // this sets the color for the car
	canvasContext.beginPath(); // this sets the starting path for the car
	canvasContext.arc(centerX,centerY, radius, 0,Math.PI*2, true); // this creates the design for the car
	canvasContext.fill(); // this generates the car on the screen
}

function colorText(showWords, textX,textY, fillColor) {
	canvasContext.fillStyle = fillColor;
	canvasContext.fillText(showWords, textX,textY);
}