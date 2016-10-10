var saiu = false;

function player(x, y, direction){
	this.direction = direction;
	this.x = x;
	this.y = y;
	
	scene[x][y] = this;
	
	this.real_x = x*68;
	this.real_y = y*68;
	
	this.sprite = document.createElement("sprite");
	this.superior = document.createElement("superior");
	
	this.sprite.style.backgroundImage = "url('./charset/anda.png')";
	this.superior.style.backgroundImage = "url('./charset/anda.png')";
	
	this.sprite.style.top = this.real_y -34 + "px";
	this.sprite.style.left = this.real_x + "px";
	
	this.sprite.appendChild(this.superior);
	document.getElementById('game').appendChild(this.sprite);
	
	document.getElementById('game').scrollTop = this.real_y - 266;
	document.getElementById('game').scrollLeft = this.real_x - 366;
	
	if(this.direction == "up"){
		this.sprite.style.backgroundPositionY = "-68px";
		this.superior.style.backgroundPositionY = "-68px";
	} else if(this.direction == "down"){
		this.sprite.style.backgroundPositionY = "0px";
		this.superior.style.backgroundPositionY = "0px";
	} else if(this.direction == "left"){
		this.sprite.style.backgroundPositionY = "-204px";
		this.superior.style.backgroundPositionY = "-204px";
	} else if(this.direction == "right"){
		this.sprite.style.backgroundPositionY = "-136px";
		this.superior.style.backgroundPositionY = "-136px";
	}
	
	this.update = function (delta) {
		if(action == true && u_action == false){
			switch(this.direction){
				case "up":
					if(scene[this.x][this.y-1] instanceof basicIA || scene[this.x][this.y-1] instanceof coletaveis){
						scene[this.x][this.y-1].interaction();
					}
					break;
				case "down":
					if(scene[this.x][this.y+1] instanceof basicIA || scene[this.x][this.y+1] instanceof coletaveis){
						scene[this.x][this.y+1].interaction();
					}
					break
				case "left":
					if(scene[this.x-1][this.y] instanceof basicIA || scene[this.x-1][this.y] instanceof coletaveis){
						scene[this.x-1][this.y].interaction();
					}
					break;
				case "right":
					if(scene[this.x+1][this.y] instanceof basicIA || scene[this.x+1][this.y] instanceof coletaveis){
						scene[this.x+1][this.y].interaction();
					}
					break;
			}
			u_action = true;
		}
		if(up == true && this.real_y == this.y*68 && this.real_x == this.x*68){
			if(this.direction !== "up"){
				this.direction = "up";
				this.sprite.style.backgroundPositionY = "-68px";
				this.superior.style.backgroundPositionY = "-68px";
			}
			if(this.y > 0 && (scene[this.x][this.y-1] instanceof saida)){
				scene[this.x][this.y-1].interaction();
			}
			if(this.y > 0 && !(scene[this.x][this.y-1] instanceof colision) && !(scene[this.x][this.y-1] instanceof basicIA)&& !(scene[this.x][this.y-1] instanceof coletaveis) && !(scene[this.x][this.y-1] instanceof saida)){
				scene[this.x][this.y] = scene[this.x][this.y-1];
				scene[this.x][this.y-1] = this;
				this.y--;
			}
		}else if(down == true && this.real_y == this.y*68 && this.real_x == this.x*68){
			if(this.direction !== "down"){
				this.direction = "down";
				this.sprite.style.backgroundPositionY = "0px";
				this.superior.style.backgroundPositionY = "0px";
			}
			if(this.y < scene[this.x].length-1 && (scene[this.x][this.y+1] instanceof saida)){
				scene[this.x][this.y+1].interaction();
			}
			if(this.y < scene[this.x].length-1 && !(scene[this.x][this.y+1] instanceof colision) && !(scene[this.x][this.y+1] instanceof basicIA)&& !(scene[this.x][this.y+1] instanceof coletaveis)&& !(scene[this.x][this.y+1] instanceof saida)){
				scene[this.x][this.y] = scene[this.x][this.y+1];
				scene[this.x][this.y+1] = this;
				this.y++;
			}
		}else if(left == true && this.real_y == this.y*68 && this.real_x == this.x*68){
			if(this.direction !== "left"){
				this.direction = "left";
				this.sprite.style.backgroundPositionY = "-204px";
				this.superior.style.backgroundPositionY = "-204px";
			}
			if(this.x > 0 && (scene[this.x-1][this.y] instanceof saida)){
				scene[this.x-1][this.y].interaction();
			}
			if(this.x > 0 && !(scene[this.x-1][this.y] instanceof colision)  && !(scene[this.x-1][this.y] instanceof basicIA)&& !(scene[this.x-1][this.y] instanceof coletaveis)&& !(scene[this.x-1][this.y] instanceof saida)){
				scene[this.x][this.y] = scene[this.x -1][this.y];
				scene[this.x-1][this.y] = this;
				this.x--;
			}
		}else if(right == true && this.real_y == this.y*68 && this.real_x == this.x*68){
			if(this.direction !== "right"){
				this.direction = "right";
				this.sprite.style.backgroundPositionY = "-136px";
				this.superior.style.backgroundPositionY = "-136px";
			}
			if(this.x < scene.length-1 && (scene[this.x+1][this.y] instanceof saida)){
				scene[this.x+1][this.y].interaction();
			}
			if(this.x < scene.length-1 && !(scene[this.x+1][this.y] instanceof colision) && !(scene[this.x+1][this.y] instanceof basicIA)&& !(scene[this.x+1][this.y] instanceof coletaveis)&& !(scene[this.x+1][this.y] instanceof saida)){
				scene[this.x][this.y] = scene[this.x+1][this.y];
				scene[this.x+1][this.y] = this;
				this.x++;
			}
		}
		
		if(this.real_y > this.y*68){
			document.getElementById('game').scrollTop = this.real_y - 266;
			this.real_y -= Math.round(this.real_y - ((34*delta)/(136)) < this.y*68 ? this.real_y - this.y*68 : ((34*delta)/(136)));
			this.sprite.style.top = this.real_y-34 + "px";
			this.sprite.setAttribute('class','up');
			this.superior.setAttribute('class','up');
		}else if(this.real_y < this.y*68){
			document.getElementById('game').scrollTop = this.real_y - 266;
			this.real_y += Math.round(this.real_y + ((34*delta)/(136)) > this.y*68 ? this.y*68 - this.real_y : ((34*delta)/(136)));
			this.sprite.style.top = this.real_y-34 + "px";
			this.sprite.setAttribute('class','down');
			this.superior.setAttribute('class','down');
		}else if(this.real_x > this.x*68){
			document.getElementById('game').scrollLeft = this.real_x - 366;
			this.real_x -= Math.round(this.real_x - ((34*delta)/(136)) < this.x*68 ? this.real_x - this.x*68 : ((34*delta)/(136)));
			this.sprite.style.left = this.real_x + "px";
			this.sprite.setAttribute('class','left');
			this.superior.setAttribute('class','left');
		}else if(this.real_x < this.x*68){
			document.getElementById('game').scrollLeft = this.real_x - 366;
			this.real_x += Math.round(this.real_x + ((34*delta)/(136)) > this.x*68 ? this.x*68 - this.real_x : ((34*delta)/(136)));
			this.sprite.style.left = this.real_x + "px";
			this.sprite.setAttribute('class','right');
			this.superior.setAttribute('class','right');
		}else{
			this.sprite.setAttribute('class','');
			this.superior.setAttribute('class','');
		}
	};
}

function air(){
	
}

function colision(){

}

function basicIA(x,y,id){
	this.x = x;
	this.y = y;
	
	this.real_x = x*68;
	this.real_y = y*68;
	
	this.sprite = document.createElement("sprite");
	this.superior = document.createElement("superior");
	this.sprite.style.backgroundImage = "url('./charset/profs.png')";
	this.superior.style.backgroundImage = "url('./charset/profs.png')";
	
	this.sprite.style.backgroundSize = "136px";
	this.superior.style.backgroundSize = "136px";
	
	if(id % 2 == 1){
		this.sprite.style.backgroundPositionX = "-68px";
		this.superior.style.backgroundPositionX = "-68px";
	}
	this.sprite.style.backgroundPositionY = -68*Math.floor(id/2) + "px";
	this.superior.style.backgroundPositionY = -68*Math.floor(id/2) + "px";
	
	this.sprite.style.top = this.real_y -34 + "px";
	this.sprite.style.left = this.real_x + "px";
	
	this.sprite.appendChild(this.superior);
	document.getElementById('game').appendChild(this.sprite);
	
	this.interaction = function (){
		if(quests[id] == 0){
			if(id == 0){
				i = faca[0] + faca[1] + faca[2] + faca[3];
				
				if(i == 4){
					if(quests[0] != 1){
						achievement(3);
						quests[0] = 1;
					}
				}else{
					if(quests[0] == 0){
						objects.push(new msgBox(id, function(){}));
					}
				}
			}else if(id == 1){
				objects.push(new msgBox(id, vivasMini));
			}
			else if(id == 9){
				objects.push(new msgBox(id, gilmarMini));
			}
			else{
				objects.push(new msgBox(id, function(){}));
			}
		}
	}
}

function coletaveis(x,y,id){
	this.x = x;
	this.y = y;
	
	this.real_x = x*68;
	this.real_y = y*68;
	
	this.sprite = document.createElement("sprite");
	this.superior = document.createElement("superior");
	this.sprite.style.backgroundImage = "url('./charset/facas.png')";
	this.superior.style.backgroundImage = "url('./charset/facas.png')";
	
	this.sprite.style.backgroundSize = "136px";
	this.superior.style.backgroundSize = "136px";
	
	if(id % 2 == 1){
		this.sprite.style.backgroundPositionX = "-68px";
		this.superior.style.backgroundPositionX = "-68px";
	}
	this.sprite.style.backgroundPositionY = -68*Math.floor(id/2) + "px";
	this.superior.style.backgroundPositionY = -68*Math.floor(id/2) + "px";
	
	this.sprite.style.top = this.real_y + "px";
	this.sprite.style.left = this.real_x + "px";
	
	this.sprite.appendChild(this.superior);
	document.getElementById('game').appendChild(this.sprite);
	
	this.interaction = function (){
		achievement(id+4);
		faca[id] = 1;
		document.getElementById('game').removeChild(this.sprite);
		scene[x][y] = new colision();
	}
}

function saida(id){
	this.interaction = function (){
		if(!saiu){
			saiu = true;
			loadScene(id);
		}
	}
}