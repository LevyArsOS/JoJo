var pause = false;
var pauseP = false;
var showFPS = false;
var maxFPS = 60;
var volumeP = 100;
var volumeM = 100;
var volumeE = 100;
var actionKey = 32,
	upKey = 87,
	downKey = 83,
	leftKey = 65,
	rightKey = 68;
	
var audio = new Audio('./soundfx/02_Failien_Funk.mp3');
	
function setConfigurations(fileString){
	var configs = JSON.parse(atob(fileString));
	showFPS = configs.showFPS;
	maxFPS = configs.maxFPS;
	volumeP = configs.volumeP;
	volumeM = configs.volumeM;
	volumeE = configs.volumeE;
	actionKey = configs.action;
	upKey = configs.action;
	downKey = configs.action;
	leftKey = configs.action;
	rightKey = configs.action;
}