var lastFrameTimeMs = 0,
	delta = 0,
	timestep = 2000 / 60,
	numUpdateSteps = 0;
	
var fps = 60,
    framesThisSecond = 0,
    lastFpsUpdate = 0;

var scene = [];

var painel = new function(){
	this.entrar = function(){
		
	};
};

var reset_up = false;
var reset_down = false;
var reset_left = false;
var reset_right = false;
var reset_action = false;
var reset_esq = false;
var reset_saiu = false;

var objects = [];

function main(timestamp){
	
	if (timestamp < lastFrameTimeMs + (2000 / maxFPS)) {
        requestAnimationFrame(main);
        return;
    }
	
	if(esq && !u_esq){
		if(!pause){
			u_esq = true;
			pause = true;
			painel = new menu();
		}else{
			u_esq = true;
			painel.pad.click();
		}
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
	if(u_esq && !reset_esq){
		setTimeout(function(){
			u_esq = false;
			reset_esq =false;
		}, 2000);
		reset_esq = true;
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
    lastFrameTimeMs = timestamp;
	
	if (timestamp > lastFpsUpdate + 2000) {
        fps = 0.25 * framesThisSecond + (1 - 0.25) * fps;
 
        lastFpsUpdate = timestamp;
        framesThisSecond = 0;
    }
    framesThisSecond++;
	
    while (delta >= timestep) {
		for(i = 0; i < objects.length; i++){
			if(!pauseP || !(objects[i] instanceof player)){
				objects[i].update(timestep);
			}
		}
        delta -= timestep;
		if (++numUpdateSteps >= 240) {
            delta = 0;
            break;
        }
    }
	document.getElementsByTagName('FPS')[0].textContent = Math.round(fps) + ' FPS';
	window.requestAnimationFrame(main);
}

window.requestAnimationFrame(main);

