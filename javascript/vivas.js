
var myGamePiece;
var myObstacles = [];
var myScore;
var myCenarios = [];
var obstacleCount;

var pulo;
var queda;

function startGame() {
	document.onkeydown = jump;
    newCenario = new component(480, 270, "", 0, 0, "image");
    newCenario.setImage("./charset/vivas/cenario.png");
    myCenarios.push(newCenario);
    myGamePiece = new component(50, 50, "", 10, 120, "image");
    myGamePiece.setImage("./charset/vivas/PlayerAndando1.png");
    myGamePiece.setImage("./charset/vivas/PlayerAndando2.png");
    myGamePiece.setImage("./charset/vivas/PlayerAndando3.png");
    myGamePiece.setImage("./charset/vivas/PlayerAndando4.png");
    myGamePiece.gravity = 0.05;
    obstacleCount = 0;
    myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    myGameArea.start();
	pulo = new Audio("./soundfx/jump.wav");
	queda = new Audio("./soundfx/hurt.wav");
	pulo.volume = volumeE;
	queda.volume = volumeE;
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.getElementsByTagName("mini")[0].appendChild(this.canvas);
        this.frameNo = 0;
        this.update = setInterval(updateGameArea, 10);
        this.maxY = setInterval(maxY,20);
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
		novaImagem.style.imageRendering = "pixelated";
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
        var rockbottom = myGameArea.canvas.height-1 - this.height;
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
        var otherleft = otherobj.x+20;
        var otherright = otherobj.x + (otherobj.width-20);
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
    var x, height, minHeight, maxHeight;
    for (i = 0; i < myObstacles.length; i += 1) {
        if (myGamePiece.crashWith(myObstacles[i])) {
			queda.play();
			clearInterval(myGameArea.update);
			clearInterval(myGameArea.maxY);
			clearInterval(myGameArea.win);
			quests[1] = 1;
			
			document.onkeydown = null;
			document.onkeyup = null;
			
			var victory = new Audio("./soundfx/missionfail.wav");
			victory.volume = volumeE;
			
			gui.append(document.createElement("falha"));
			gui.setVisible(true);
			setTimeout(function(){victory.play();}, 1000);
			setTimeout(function (){
				audio.src = './music/02_Failien_Funk.ogg';
				audioCtr = setInterval(function (){
					if(audio.paused){
						audio.play();
						clearInterval(audioCtr);
					}
				}, 200);
				gui.setVisible(false);
				document.getElementsByTagName("mini")[0].innerHTML = "";
				document.getElementsByTagName("head")[0].removeChild(script);
				document.onkeydown = principal;
				document.onkeyup = secundario;
				action = false;
				u_action = true;
				pauseP = false;
			}, 2000);
            return;
        }
    }
    myGameArea.clear();
    myGameArea.frameNo += 1;
    if (myGameArea.frameNo == 1 || everyinterval(220)) {
        x = myGameArea.canvas.width;
        minHeight = 40;
        maxHeight = 100;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
		var rand = Math.round(Math.random()*3);
        if (obstacleCount<450) {
			if(rand == 0){
				newObstacle= new component(30, 40, "green", x, myGameArea.canvas.height-40, "image");
				newObstacle.setImage("./charset/vivas/cone2.png");
				myObstacles.push(newObstacle);
				obstacleCount++;
			}else if(rand == 1){
				newObstacle= new component(30, 40, "green", x, myGameArea.canvas.height-40, "image");
				newObstacle.setImage("./charset/vivas/cone1.png");
				myObstacles.push(newObstacle);
				obstacleCount++;
			} else if(rand == 2){
				newObstacle= new component(30, 70, "green", x, myGameArea.canvas.height-70, "image");
				newObstacle.setImage("./charset/vivas/pare.png");
				myObstacles.push(newObstacle);
				obstacleCount++;
			} else if(rand == 3){
				newObstacle= new component(40, 100, "green", x, myGameArea.canvas.height-100, "image");
				newObstacle.setImage("./charset/vivas/tree.png");
				myObstacles.push(newObstacle);
				obstacleCount++;
			}
    	}
    }
    for (i=0; i<myCenarios.length; i++) {
        myCenarios[i].x--;
        myCenarios[i].update();
    }
    if (myCenarios[0].x == -1) {
        newCenario = new component(480, 270, "", 479, 0, "image");
        newCenario.setImage("./charset/vivas/cenario.png");
        myCenarios.push(newCenario);
    }
    if (myCenarios[0].x <= -479)
        myCenarios.shift()

    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += -1;
        myObstacles[i].update();
    }
    myScore.text="SCORE: " + myGameArea.frameNo;
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
function jump(e) {
    if (e.keyCode == upKey && myGamePiece.y>= (myGameArea.canvas.height-1-myGamePiece.height) )  {
        accelerate(-0.05);
        setTimeout(accelerate,500,0.04);
		if(pulo.paused){
			pulo.play();
		}
    }
	if (e.keyCode == downKey)
		accelerate(5);
}
function maxY() {
    if (myGamePiece.y < 160 && myGamePiece.speedY<0) {
    	myGamePiece.gravity= 0.06;
    }
}
function win() {
	if (myGameArea.frameNo>=10000) {
		clearInterval(myGameArea.update);
		clearInterval(myGameArea.maxY);
		clearInterval(myGameArea.win);
		document.onkeydown = null;
		document.onkeyup = null;
		var victory = new Audio("./soundfx/missioncomplete.wav");
			victory.volume = volumeE;
			
		gui.append(document.createElement("sucesso"));
		gui.setVisible(true);
		setTimeout(function(){victory.play();}, 1000);
		setTimeout(function (){
			audio.src = './music/02_Failien_Funk.ogg';
			audioCtr = setInterval(function (){
				if(audio.paused){
					audio.play();
					clearInterval(audioCtr);
				}
			}, 200);
			gui.setVisible(false);
			document.getElementsByTagName("mini")[0].innerHTML = "";
			document.getElementsByTagName("head")[0].removeChild(script);
			document.onkeydown = principal;
			document.onkeyup = secundario;
			action = false;
			u_action = true;
			pauseP = false
			loadScene(5,0);
		}, 2000);
		
		quests[1] = 1;
	}
}