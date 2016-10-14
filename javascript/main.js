var lastFrameTimeMs = 0,
	delta = 0,
	timestep = 1000 / 60,
	numUpdateSteps = 0;
	
var fps = 60,
    framesThisSecond = 0,
    lastFpsUpdate = 0;
	
var layer0 = [],
	layer1 = [];

var reset_up = false,
	reset_down = false,
	reset_left = false,
	reset_right = false,
	reset_action = false,
	reset_saiu = false;

var objects = [];

var gui,
	mini,
	game;
	
var painel = new function(){
	this.entrar = function(){
		
	};
};
function initialize(){
	audio.pause();
	game = document.getElementsByTagName("game")[0];
	gui = new Gui();
	mini = document.getElementsByTagName("mini")[0];
	gui.setVisible(false);
	window.requestAnimationFrame(main);
	loadScene(2, 2);
	setTimeout(function (){
		audio.src = './music/02_Failien_Funk.ogg';
		audioCtr = setInterval(function (){
			if(audio.paused){
				audio.play();
				clearInterval(audioCtr);
			}
		}, 200);
		gui.setVisible(false);
		objects.push(new msgBox(5, function (){
			mapa[0] = 2;
			mapa[1] = 2;
			loadScene(2, 2);
		}, 0));
		mini = document.getElementsByTagName("mini")[0];
		game = document.getElementsByTagName("game")[0];
	},200);
}

function main(timestamp){
	
	if(audio != null && audio != undefined){
		audio.volume = volumeM;
	}
	
	if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
        requestAnimationFrame(main);
        return;
    }
	
	if(quests[0] + quests[1] + quests[2] + quests[3] + quests[4] + quests[5] + quests[6] + quests[7] + quests[8] + quests[9] + quests[10] == 14){
		gui.append(document.createElement('parabens'));
		gui.setVisible(true);
		setTimeout(function(){location.reload(true)}, 5000);
	}
	
	if(pause){
		if(up && !u_up){
			u_up = true;
			painel.move("up");
		}
		if(down && !u_down){
			u_down = true;
			painel.move("down");
		}
		if(left && !u_left){
			u_left = true;
			painel.move("left");
		}
		if(right && !u_right){
			u_right = true;
			painel.move("right");
		}
		if(action && !u_action){
			u_action = true;
			painel.entrar();
		}
	}
	if(u_up && !reset_up){
		setTimeout(function(){
			u_up = false;
			reset_up =false;
		}, 2000);
		reset_up = true;
	}
	if(u_down && !reset_down){
		setTimeout(function(){
			u_down = false;
			reset_down =false;
		}, 2000);
		reset_down = true;
	}
	if(u_left && !reset_left){
		setTimeout(function(){
			u_left = false;
			reset_left =false;
		}, 2000);
		reset_left = true;
	}
	if(u_right && !reset_right){
		setTimeout(function(){
			u_right = false;
			reset_right =false;
		}, 2000);
		reset_right = true;
	}
	if(u_action && !reset_action){
		setTimeout(function(){
			u_action = false;
			reset_action =false;
		}, 2000);
		reset_action = true;
	}
	
	if(saiu && !reset_saiu){
		setTimeout(function(){
			saiu = false;
			reset_saiu = false;
		}, 1000);
		reset_saiu = true;
	}
	
	if(!pause){
		delta += timestamp - lastFrameTimeMs;
	}
	else{
		delta = 0;
	}
	
	while (delta >= timestep) {
		for(i = 0; i < objects.length; i++){
			if((!pauseP || !(objects[i] instanceof player)) && objects[i] !== null && objects[i] !== undefined){
				objects[i].update(timestep);
			}
		}
        delta -= timestep;
		if (++numUpdateSteps >= 240) {
            delta = 0;
            break;
        }
    }
	
	lastFrameTimeMs = timestamp;
	
	if(showFPS){
		
		if (timestamp > lastFpsUpdate + 2000) {
			fps = 0.25 * framesThisSecond + (1 - 0.25) * fps;
	 
			lastFpsUpdate = timestamp;
			framesThisSecond = 0;
		}
		framesThisSecond++;
		
		if(!gui.visible){
			gui.setVisible(true);
		}
		
		if(document.getElementsByTagName('FPS')[0] !== null && document.getElementsByTagName('FPS')[0] !== undefined){
			gui.documentGui.getElementsByTagName('FPS')[0].textContent = Math.round(fps) + ' FPS';
		}else{
			gui.append(document.createElement("FPS"));
			gui.documentGui.getElementsByTagName('FPS')[0].textContent = Math.round(fps) + ' FPS';
		}
		
	}
	window.requestAnimationFrame(main);
}