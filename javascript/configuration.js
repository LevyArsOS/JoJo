var pause = false;
var pauseP = false;
var showFPS = false;
var maxFPS = 60;
var volumeM = 50/100;
var volumeE = 50/100;
var actionKey = 32,
	upKey = 87,
	downKey = 83,
	leftKey = 65,
	rightKey = 68;
	
var audio = new Audio('./music/01_Introjuice.ogg');
audio.volume = volumeM;
	setTimeout(function(){audio.play()}, 200);
	audio.loop = true;