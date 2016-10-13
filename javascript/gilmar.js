var myGamePiece;
var myObstacles = [];
var myShots = [];
var myScore;
var myCenario;
var obstacleCount;
var lastShotTime;
var tiro;
document.onkeydown = evento;
document.onkeyup = killMove;

function startGame() {
	myGamePiece = new component(30, 30, "", 25, 120, "image");
	myGamePiece.setImage("./charset/gil/Gilar.png");
	myGamePiece.gravity = 0;
	myCenario = new component(480, 270, "", 0, 0, "image");
	myCenario.setImage("./charset/gil/cenario.png");
	lastShotTime= 0;
	obstacleCount= 0;
	myScore = new component("30px", "Consolas", "black", 280, 40, "text");
	myGameArea.start();
	tiro = new Audio("./soundfx/shoot.wav");
}

var myGameArea = {
	canvas : document.createElement("canvas"),
	start : function() {
		this.canvas.width = 480;
		this.canvas.height = 270;
		this.context = this.canvas.getContext("2d");
		document.getElementsByTagName("mini")[0].appendChild(this.canvas);
		this.frameNo = 0;
		this.kills= 0;
		this.shots;
		this.update = setInterval(updateGameArea, 10);
		this.win = setInterval(win,20);
		},
	clear : function() {
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}

function component(width, height, color, x, y, type) {
	this.type = type;
	this.img = [];
	this.andando = 0;
	this.andarTimer= 0;
	this.anda = false;
	this.score = 0;
	this.color = color;
	this.width = width;
	this.height = height;
	this.speedX = 0;
	this.speedY = 0;
	this.x = x;
	this.y = y;
	this.gravity = 0;
	this.gravitySpeed = 0;
	this.update = function() {
		ctx = myGameArea.context;
		switch(this.type) {
			case "text":
				ctx.font = this.width + " " + this.height;
				ctx.fillStyle = this.color;
				ctx.fillText(this.text, this.x, this.y);
				break;
			case "image":
				if (this.anda)
					this.andar();
				ctx.drawImage(this.img[this.andando], this.x, this.y, this.width, this.height);
				break;
			default:
				ctx.fillStyle = this.color;
				ctx.fillRect(this.x, this.y, this.width, this.height);
		}
	}
	this.setImage = function(newImage) {
		novaImagem= document.createElement('img');
		novaImagem.src= newImage;
		this.img.push(novaImagem);
	}
	this.andar = function() {
		if (this.andarTimer==0) {
			if (this.andando== this.img.length-1)
				this.andando= 0;
			else
				this.andando++;
			this.andarTimer= 10;
		}
		else
			this.andarTimer--;
	}
	this.newPos = function() {
		this.gravitySpeed += this.gravity;
		this.x += this.speedX;
		this.y += this.speedY + this.gravitySpeed;
		this.hitBottom();
		this.hitTop();
	}
	this.delete = function() {
		this.x= -30;
		this.update();
	}
	this.hitTop = function () {
		if (this.y <= 0 ) {
			this.y= 0;
			this.gravitySpeed= 0;
		}
	}
	this.hitBottom = function() {
		var rockbottom = myGameArea.canvas.height - this.height;
		if (this.y > rockbottom) {
			this.y = rockbottom;
			this.gravitySpeed = 0;
		}
	}
	this.crashWith = function(otherobj) {
		var myleft = this.x;
		var myright = this.x + (this.width);
		var mytop = this.y;
		var mybottom = this.y + (this.height);
		var otherleft = otherobj.x;
		var otherright = otherobj.x + (otherobj.width);
		var othertop = otherobj.y;
		var otherbottom = otherobj.y + (otherobj.height);
		var crash = true;
		if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
			crash = false;
		}
		return crash;
	}
}

function updateGameArea() {
	var x,y, maxHeight, minHeight;
	var shotsCollided = [];
	var obstaclesCollided = [];
	for (i = 0; i < myObstacles.length; i += 1) {
		if (myGamePiece.crashWith(myObstacles[i])) {
			clearInterval(myGameArea.update);
			clearInterval(myGameArea.win);
			audio.pause();
			quests[9] = 1;
			while(document.getElementsByTagName("mini")[0].childNodes.length != 0){
				document.getElementsByTagName("mini")[0].removeChild(document.getElementsByTagName("mini")[0].childNodes[0]);
			}
			document.onkeydown = principal;
			document.onkeyup = secundario;
			document.getElementsByTagName("head")[0].removeChild(script);
			setTimeout(function () {
				audio.src = './music/02_Failien_Funk.ogg';
				audio.play();
				u_action = true;
				pauseP = false;
			}, 200);
			return;
		}
		if (myObstacles[i].x<=10) {
			clearInterval(myGameArea.update);
			clearInterval(myGameArea.win);
			quests[9] = 1;
			while(document.getElementsByTagName("mini")[0].childNodes.length != 0){
				document.getElementsByTagName("mini")[0].removeChild(document.getElementsByTagName("mini")[0].childNodes[0]);
			}
			document.onkeydown = principal;
			document.onkeyup = secundario;
			document.getElementsByTagName("head")[0].removeChild(script);
			setTimeout(function () {
				audio.src = './music/02_Failien_Funk.ogg';
				audio.play();
				u_action = true;
				pauseP = false;
			}, 200);
			return
		}
	}
	for (i=0; i<myShots.length; i++) {
		for (j=0; j<myObstacles.length; j++) {
			if (myShots[i].crashWith(myObstacles[j])) {
				shotsCollided.push(i);
				obstaclesCollided.push(j);
			}
		}
	}
	for (i=0;i<shotsCollided.length;i++) {
		myShots[shotsCollided[i]].delete();
		myShots.splice(shotsCollided[i],1);
	}
	for (i=0;i<obstaclesCollided.length;i++) {
		myObstacles[obstaclesCollided[i]].delete();
		myObstacles.splice(obstaclesCollided[i],1);
		myGameArea.kills++;
	}
	shotsCollided= [];
	obstaclesCollided= [];
	myGameArea.clear();
	myGameArea.frameNo += 1;
	if (myGameArea.frameNo == 1 || everyinterval(100)) {
		x = myGameArea.canvas.width;
		minHeight= myGameArea.canvas.height-20;
		maxHeight= 10;
		y = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
		if (obstacleCount<120) {
			newObstacle = new component(25, 25, "", x, y, "image");
			newObstacle.setImage("./charset/gil/agente1.png");
			newObstacle.setImage("./charset/gil/agente2.png");
			newObstacle.setImage("./charset/gil/agente3.png");
			newObstacle.setImage("./charset/gil/agente4.png");
			newObstacle.anda= true;
			myObstacles.push(newObstacle);
			obstacleCount++;
		}
	}
	myCenario.update();
	for (i = 0; i<myShots.length; i++) {
		myShots[i].x++;
		if (myShots[i].x>=x) {
			myShots[i].delete();
			myShots.splice(i,1);
		}
		else
			myShots[i].update();
	}
	for (i = 0; i < myObstacles.length; i++) {
		myObstacles[i].x--;
		myObstacles[i].update();
	}
	myScore.text="SCORE: " + myGameArea.kills;
	myScore.update();
	myGamePiece.newPos();
	myGamePiece.update();
}

function everyinterval(n) {
	if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
	return false;
}

function accelerate(n) {
	myGamePiece.gravity = n;
}
function killMove(e) {
	if (e.keyCode == upKey || e.keyCode == downKey) {
		myGamePiece.gravity = 0;
		myGamePiece.gravitySpeed = 0;
	}
}
function evento(e) {
	//Seta cima
	if (e.keyCode == upKey) {
		accelerate(-0.07);
		//setTimeout(killMove,500);
	}
	
	if (e.keyCode == downKey) {
		accelerate(0.07);
		//setTimeout(killMove,500);
	}
	
	if (e.keyCode == actionKey) {
		if (lastShotTime==0) {
			newShot= new component(10,3,"",40,myGamePiece.y+14,"image");
			newShot.setImage("./charset/gil/PaoDeQueijo.png");
			myShots.push(newShot);
			tiro.play();
			lastShotTime= 5;
			myGameArea.shots = setInterval(shotFrequency,120);
		}
	}
}
function shotFrequency() {
	lastShotTime--;
	if (lastShotTime==0)
		clearInterval(myGameArea.shots);
}
function win() {
	if (myGameArea.kills>=100) {
		audio.pause();
		clearInterval(myGameArea.update);
		clearInterval(myGameArea.win);
		quests[9] = 2;
		while(document.getElementsByTagName("mini")[0].childNodes.length != 0){
			document.getElementsByTagName("mini")[0].removeChild(document.getElementsByTagName("mini")[0].childNodes[0]);
		}
		document.onkeydown = principal;
		document.onkeyup = secundario;
		document.getElementsByTagName("head")[0].removeChild(script);
		setTimeout(function (){
			audio.src = './music/02_Failien_Funk.ogg';
			audio.play();
			u_action = true;
			pauseP = false;
		}, 200);
	}
}